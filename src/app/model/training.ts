import { User } from './user';
import { TrainingDay } from './trainingday';

export class Training {
    id: number;
    name: string;
    trainingDays: TrainingDay[];
    users: User[];
}