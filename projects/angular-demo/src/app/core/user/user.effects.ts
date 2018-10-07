import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { AppState } from '../app.state';

import {
  LOGIN,
  LoginAction,
  REMOVE_USER,
  SET_USER,
  SetUserAction,
} from './user.actions';
import { UserService } from './user.service';

const ON_LOGIN_ROUTE = '/';
const ON_LOGOUT_ROUTE = '/login';

@Injectable()
export class UserEffects {
  /**
   * Authenticate the user when the `LOGIN` action is dispatched.
   * @type {Observable<SetUserAction>}
   */
  @Effect()
  login$: Observable<Action | string> = this.actions$.pipe(
    ofType(LOGIN),
    // We're only interested in the credentials from the action
    map(action => (action as LoginAction).credentials),
    mergeMap(credentials =>
      this.userService.login(credentials).pipe(
        // Dispatch the success actions if there's no error
        map(() => new SetUserAction({ email: credentials.email }))
      )
    )
  );

  /**
   * Navigate to the login page when the user is removed.
   */
  @Effect({ dispatch: false })
  afterLogout$: Observable<Action> = this.actions$.pipe(
    ofType(REMOVE_USER),
    tap(() => this.router.navigateByUrl(ON_LOGOUT_ROUTE))
  );

  /**
   * Navigate to the default route once the user is set.
   */
  @Effect({ dispatch: false })
  afterLogin$: Observable<Action> = this.actions$.pipe(
    ofType(SET_USER),
    tap(() => this.router.navigateByUrl(ON_LOGIN_ROUTE))
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store$: Store<AppState>,
    private router: Router
  ) {}
}
