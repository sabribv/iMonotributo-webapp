import { createActionGroup, props } from '@ngrx/store';
import { AuthenticatedUser } from '../../../shared/models/authenticated-user.model';

export const UserAuthenticationActions = createActionGroup({
    source: 'Authentication',
    events: {
        login: props<{ user: AuthenticatedUser }>(),
    },
});
