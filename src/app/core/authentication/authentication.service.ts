import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ENDPOINTS } from '../constants/endpoints';
import { lastValueFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserAuthenticationActions } from '../stores/authentication/user-authentication.actions';
import { User } from '../../shared/models/user.model';
import { Persona } from '../../shared/models/persona.model';

@Injectable()
export class AuthenticationService {
    constructor(private httpClient: HttpClient, private store: Store) {}

    async login(username: string, provider: string): Promise<void> {
        let user = undefined;

        try {
            user = await lastValueFrom(
                this.httpClient.post<User>(`${environment.apiUrl}${ENDPOINTS.api.login}`, {
                    email: username,
                    provider,
                })
            );
        } finally {
            const currentPerson = user?.personas ? user.personas[0] : undefined;
            this.store.dispatch(
                UserAuthenticationActions.login({
                    user: {
                        isAuthenticated: !!user,
                        currentPerson,
                        user,
                    },
                })
            );
        }
    }

    changeCurrentPersona(persona: Persona) {
        this.store.dispatch(
            UserAuthenticationActions.changecurrentpersona({
                persona,
            })
        );
    }
}
