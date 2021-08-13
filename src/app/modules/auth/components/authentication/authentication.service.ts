import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  /**
   * @returns {boolean}
   * @memberOf AuthenticationService
   * @desc Returns true if the user is authenticated
   */
  signin(username: string, password: string) {}

  signout() {}
}
