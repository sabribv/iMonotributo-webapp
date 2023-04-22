import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// import { StoreModule } from '@ngrx/store';
// import { userAuthenticationReducer } from './core/stores/authentication/user-authentication.reducer';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule.forRoot(),
        SharedModule,
        LayoutModule,
        // StoreModule.forRoot({ authentication: userAuthenticationReducer }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
