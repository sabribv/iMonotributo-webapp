import { User } from './user.model';
import { Persona } from './persona.model';

export interface AuthenticatedUser {
    isAuthenticated: boolean;
    currentPerson?: Persona;
    user?: User;
}
