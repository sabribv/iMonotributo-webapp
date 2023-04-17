import { createReducer, on } from '@ngrx/store';
import { UserAuthenticationActions } from './user-authentication.actions';
import { AuthenticatedUser } from '../../../shared/models/authenticated-user.model';

export const initialState: AuthenticatedUser = {
    isAuthenticated: false,
    user: undefined,
};

export const userAuthenticationReducer = createReducer(
    initialState,
    on(UserAuthenticationActions.login, (_state, { user }) => user)
);
