import { createAction, props } from '@ngrx/store';

export const WRITE_USERS = createAction('[Users] Write', props<{data:any}>());