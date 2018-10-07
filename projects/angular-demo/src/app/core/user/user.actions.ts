import { Action } from '@ngrx/store';
import { Credentials } from './credentials.type';
import { User } from './user.type';

export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const LOGIN = 'LOGIN';

/**
 * Set the user data
 */
export class SetUserAction implements Action {
  readonly type = SET_USER;
  user: User;

  constructor(user: User) {
    this.user = user;
  }
}

/**
 * Logout the current user
 */
export class LogoutAction implements Action {
  readonly type = REMOVE_USER;
}

/**
 * Trigger a login from the UI with credentials
 */
export class LoginAction implements Action {
  readonly type = LOGIN;
  credentials: Credentials;

  constructor(credentials: Credentials) {
    this.credentials = credentials;
  }
}

export type UserActions = SetUserAction | LoginAction | LogoutAction;
