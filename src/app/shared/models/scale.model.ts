import { Category } from './category.model';

export interface Scale {
    _id: any;
    name: string;
    from: Date;
    to: Date;
    active: boolean;
    categories: Category[];
}
