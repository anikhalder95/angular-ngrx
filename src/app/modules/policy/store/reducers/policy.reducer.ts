import { Action, createReducer, on } from '@ngrx/store';
import { PolicyActions } from '../actions';
import Policy from '../models/policy';
import PolicyState, { initializeState } from '../state/policy-state';

const initialState = initializeState();

export const policyFeatureKey = 'policy';

const reducer = createReducer(
  initialState,
  on(PolicyActions.GetToDoAction, state => state),
  on(PolicyActions.CreateToDoAction, (state: PolicyState, todo: Policy) => {
    return { ...state, ToDos: [...state.ToDos, todo], ToDoError: null };
  }),

  on(PolicyActions.SuccessGetToDoAction, (state: PolicyState, { payload }) => {
    return { ...state, ToDos: payload, ToDoError: null };
  }),
  on(PolicyActions.SuccessCreateToDoAction, (state: PolicyState, { payload }) => {
    return { ...state, ToDos: [...state.ToDos, payload], ToDoError: null };
  }),
  on(PolicyActions.ErrorToDoAction, (state: PolicyState, error: Error) => {
    console.error(error);
    return { ...state, ToDoError: error };
  })
);

export function ToDoReducer(
  state: PolicyState | undefined,
  action: Action
): PolicyState {
  return reducer(state, action);
}
