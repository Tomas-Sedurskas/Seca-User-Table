import { createReducer, on } from '@ngrx/store';
import { INCREMENT_CHUNK, RESET_CHUNK } from './chunk.actions';

export const initialState = 0;

const _chunkReducer = createReducer(
    initialState,
    on(INCREMENT_CHUNK, (state) => state + 1),
    on(RESET_CHUNK, (state) => 0),
);

export function chunkReducer(state:any, action:any) {
    return _chunkReducer(state, action);
}