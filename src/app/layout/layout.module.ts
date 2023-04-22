import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [BrowserModule, RouterModule, SharedModule],
    providers: [],
    declarations: [MainLayoutComponent],
    exports: [MainLayoutComponent],
})
export class LayoutModule {}
