import { Persona } from './persona.model';

export interface AuthenticatedUser {
    id: any;
    username: string;
    provider: string;
    personas: Persona[];
}
