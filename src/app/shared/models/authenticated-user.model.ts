import { User } from './user.model';

export interface AuthenticatedUser {
    isAuthenticated: boolean;
    user?: User;
}
