import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication/authentication.service';
import { StoreModule } from '@ngrx/store';
import { userAuthenticationReducer } from './stores/authentication/user-authentication.reducer';

@NgModule({
    imports: [HttpClientModule, StoreModule.forRoot({ authentication: userAuthenticationReducer })],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [AuthenticationService],
        };
    }
}
