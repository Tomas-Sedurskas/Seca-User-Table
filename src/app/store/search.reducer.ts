import { createReducer, on } from '@ngrx/store';
import { SEARCH } from './search.actions';

export const initialState = {
    search: ''
};

const _searchReducer = createReducer(
    initialState,
    on(SEARCH, (state, { search }) => ({ search }))
);

export function searchReducer(state: any, action: any) {
    return _searchReducer(state, action);
}