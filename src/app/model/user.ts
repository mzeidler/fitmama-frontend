import { Menu } from './menu';
import { Training } from './training';
import { Role } from './role';

export class User {
    id: number;
    username: string;    
    firstName: string;
    lastName: string;
    name: string;
    gender: string;
    address: string;
    city: string;
    zipcode: string;
    mobile: string;
    email: string;
    birthDate: Date;
    height: number;

    menus: Menu[];
    trainings: Training[];
    roles: Role[];
}