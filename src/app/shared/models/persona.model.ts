import { Category } from './category.model';

export interface Persona {
    _id: any;
    tenantId: any;
    firstName: string;
    lastName: string;
    transactions: any[];
    currentCategory: Category;
    history: any[];
}
