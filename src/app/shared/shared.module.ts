import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../core/core.module';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { DeviceService } from './services/device.service';
import { DeviceRendererDirective } from './directives/device-renderer.directive';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
];

const directives = [DeviceRendererDirective];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule.forRoot(),
        OverlayModule,
        CdkMenuModule,
        ...materialModules,
    ],
    providers: [DeviceService],
    declarations: [...directives],
    exports: [OverlayModule, CdkMenuModule, ...materialModules, ...directives],
})
export class SharedModule {}
