import { createActionGroup, props } from '@ngrx/store';
import { AuthenticatedUser } from '../../../shared/models/authenticated-user.model';
import { Persona } from '../../../shared/models/persona.model';

export const UserAuthenticationActions = createActionGroup({
    source: 'Authentication',
    events: {
        login: props<{ user: AuthenticatedUser }>(),
        changeCurrentPersona: props<{ persona: Persona }>(),
    },
});
