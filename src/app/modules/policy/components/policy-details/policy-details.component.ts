import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as PolicyActions from '../../store/actions/policy.actions';
import Policy from '../../store/models/policy';
import PolicyState from '../../store/state/policy-state';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.scss']
})
export class PolicyDetailsComponent implements OnInit {

  constructor(private store: Store<{ todos: PolicyState }>) {
    this.todo$ = store.pipe(select('todos'));
  }

  ngOnInit() {
    this.ToDoSubscription = this.todo$
      .subscribe(x => {
        if(x) {
        this.ToDoList = x.ToDos;
        this.todoError = x.ToDoError;
        }
        console.log('shdjsdfsdsgdvsd hvh')
      });

    this.store.dispatch(PolicyActions.BeginGetToDoAction());
  }

  todo$: Observable<PolicyState>;
  ToDoSubscription: Subscription;
  ToDoList: Policy[] = [];

  policyNumber: string = '';
  isHealthPolicy: boolean = false;

  todoError: Error = null;

  createToDo() {
    const todo: Policy = { policyNumber: this.policyNumber, isHealthPolicy: this.isHealthPolicy };
    this.store.dispatch(PolicyActions.BeginCreateToDoAction({ payload: todo }));
    this.policyNumber = '';
    this.isHealthPolicy = false;
  }

  ngOnDestroy() {
    if (this.ToDoSubscription) {
      this.ToDoSubscription.unsubscribe();
    }
  }
}