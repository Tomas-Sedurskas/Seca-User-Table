import { createAction, props } from '@ngrx/store';

export const SEARCH = createAction('[Search]', props<{search:string}>());