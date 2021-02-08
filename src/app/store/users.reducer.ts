import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { WRITE_USERS } from './users.actions';

const _userReducer = createReducer(
    on(WRITE_USERS, (state:any) => {
        return {
            users: [...state.data]
        }   
        
    }),
);

export function userReducer(state: any, action: any) {
    return _userReducer(state, action);
}