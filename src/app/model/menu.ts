import { User } from './user';
import { MenuDay } from './menuday';

export class Menu {
    id: number;
    name: string;
    menuDays: MenuDay[];
    users: User[];
    currentContent: string;
    currentName: string;
}