import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { Store } from '@ngrx/store';
import { AuthenticatedUser } from '../../shared/models/authenticated-user.model';
import { Observable, tap } from 'rxjs';
import { Persona } from '../../shared/models/persona.model';
import { DeviceType } from '../../shared/enum/device-type';
import { DeviceService } from '../../shared/services/device.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements AfterViewInit, OnInit {
    @ViewChild('appSideNav') appSideNav: MatSidenav;

    authentication$: Observable<AuthenticatedUser>;
    currentDeviceType: DeviceType;
    isSidenavOpened = false;
    deviceTypes = DeviceType;

    private authentication: AuthenticatedUser;

    constructor(
        private deviceService: DeviceService,
        private authenticationService: AuthenticationService,
        private store: Store<{ authentication: AuthenticatedUser }>
    ) {
        this.authentication$ = this.store
            .select('authentication')
            .pipe(tap((current) => (this.authentication = current)));
    }

    ngOnInit(): void {
        void this.authenticationService.login('sabrina.buenavida@gmail.com', 'google');
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.deviceService.deviceType$.subscribe((value) => {
                this.currentDeviceType = value;

                if (this.currentDeviceType === this.deviceTypes.desktop) {
                    this.appSideNav.open();
                } else {
                    this.appSideNav.close();
                }
            });
        });
    }

    onSidenavToggle() {
        this.appSideNav.toggle();
    }

    onPersonSelectionChange(persona: Persona) {
        if (persona._id === this.authentication.currentPerson?._id) {
            return;
        }

        this.authenticationService.changeCurrentPersona(persona);
    }
}
