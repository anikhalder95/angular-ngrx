import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { State } from '../state/root-state';
  
  // export const reducers: ActionReducerMap<State> = {
  
  // };
  
  
  export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];