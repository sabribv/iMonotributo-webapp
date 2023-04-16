import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [],
  declarations: [
    MainLayoutComponent
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
