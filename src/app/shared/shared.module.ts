import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "../core/core.module";

const materialModules = [MatSidenavModule, MatButtonModule];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule.forRoot(),
        ...materialModules,
    ],
    providers: [],
    declarations: [],
    exports: [...materialModules],
})
export class SharedModule {}
