import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { Store } from '@ngrx/store';
import { AuthenticatedUser } from '../../shared/models/authenticated-user.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
    authentication$: Observable<AuthenticatedUser>;

    constructor(
        private authenticationService: AuthenticationService,
        private store: Store<{ authentication: AuthenticatedUser }>
    ) {
        this.authentication$ = this.store.select('authentication');
    }

    ngOnInit(): void {
        void this.authenticationService.login('sabrina.buenavida@gmail.com', 'google');
    }
}
