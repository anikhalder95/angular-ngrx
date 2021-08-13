import { createAction, props } from '@ngrx/store';
import Policy from '../models/policy';

export const GetToDoAction = createAction('[ToDo] - Get ToDo');

export const CreateToDoAction = createAction(
  '[Policy] - Create ToDo',
  props<Policy>()
);

export const BeginGetToDoAction = createAction('[ToDo] - Begin Get ToDo');

export const SuccessGetToDoAction = createAction(
  '[ToDo] - Sucess Get ToDo',
  props<{ payload: Policy[] }>()
);

export const BeginCreateToDoAction = createAction(
  '[ToDo] - Begin Create ToDo',
  props<{ payload: Policy }>()
);

export const SuccessCreateToDoAction = createAction(
  '[ToDo] - Success Create ToDo',
  props<{ payload: Policy }>()
);

export const ErrorToDoAction = createAction('[ToDo] - Error', props<Error>());
