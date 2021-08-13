import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PolicyActions from '../actions/policy.actions';
import Policy from '../models/policy';
import { PolicyService } from '../services/policy-service';

@Injectable()
export class PolicyEffects {
  constructor(private policyService: PolicyService, private action$: Actions) {}

  GetToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(PolicyActions.BeginGetToDoAction),
      mergeMap(action =>
        this.policyService.getToDos().pipe(
          map((data: Policy[]) => {
            return PolicyActions.SuccessGetToDoAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(PolicyActions.ErrorToDoAction(error));
          })
        )
      )
    )
  );

  CreateToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(PolicyActions.BeginCreateToDoAction),
      mergeMap(action =>
        this.policyService.createToDos(action.payload).pipe(
          map((data: Policy) => {
            return PolicyActions.SuccessCreateToDoAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(PolicyActions.ErrorToDoAction(error));
          })
        )
      )
    )
  );
}
