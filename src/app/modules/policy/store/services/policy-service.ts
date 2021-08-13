import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Policy from '../models/policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private ApiURL: string = 'http://demo3530412.mockable.io/policy'; 
  private ApiPOSTURL: string = 'http://demo3530412.mockable.io/toDoPost'; 
  constructor(private httpclient: HttpClient) {}

  getToDos(): Observable<Policy[]> {
    return this.httpclient.get<Policy[]>(this.ApiURL);
  }

  createToDos(payload: Policy): Observable<Policy> {
    return this.httpclient.post<Policy>(this.ApiPOSTURL, JSON.stringify(payload), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
