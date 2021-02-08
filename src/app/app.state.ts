import { User } from './user.model';

export interface AppState {
    chunk: number,
    search: string,
    users: []
}