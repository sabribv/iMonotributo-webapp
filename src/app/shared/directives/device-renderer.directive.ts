import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { DeviceType } from '../enum/device-type';
import { DeviceService } from '../services/device.service';

@Directive({
    selector: '[appDeviceRenderer]',
})
export class DeviceRendererDirective implements OnInit, OnDestroy {
    @Input() set appDeviceRenderer(deviceType: DeviceType) {
        this.deviceType = deviceType;
    }

    mobileQuery: MediaQueryList;
    deviceType: DeviceType;

    private mobileQueryListener: () => void;

    constructor(
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        private templateRef: TemplateRef<any>,
        private container: ViewContainerRef,
        private media: MediaMatcher,
        private deviceService: DeviceService
    ) {}

    ngOnInit() {
        this.setDevice();
    }

    private setDevice(): void {
        this.mobileQuery = this.media.matchMedia('(max-width: 1100px)');
        this.setContainerContent();

        this.mobileQueryListener = () => {
            this.setContainerContent();
        };
        this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    }

    private setContainerContent() {
        if (
            (this.mobileQuery.matches && this.deviceType === DeviceType.mobile) ||
            (!this.mobileQuery.matches && this.deviceType === DeviceType.desktop)
        ) {
            this.container.createEmbeddedView(this.templateRef);
        } else {
            this.container.clear();
        }

        this.deviceService.setDeviceType(
            this.mobileQuery.matches ? DeviceType.mobile : DeviceType.desktop
        );
    }

    ngOnDestroy(): void {
        if (this.mobileQuery) {
            this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
        }
    }
}
