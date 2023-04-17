import { Persona } from './persona.model';

export interface User {
    id: any;
    username: string;
    provider: string;
    personas: Persona[];
}
