import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ENDPOINTS } from '../constants/endpoints';
import { AuthenticatedUser } from '../../shared/models/authenticated-user.model';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor(private httpClient: HttpClient) {}

    async login(username: string, provider: string) {
        const user = await lastValueFrom(
            this.httpClient.post<AuthenticatedUser>(`${environment.apiUrl}${ENDPOINTS.api.login}`, {
                username,
                provider,
            })
        );
    }
}
