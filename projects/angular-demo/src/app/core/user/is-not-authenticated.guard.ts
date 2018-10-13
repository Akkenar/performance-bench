import { NgModule } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppState } from '../app.state';

import { selectUserEmail } from './user.selector';

@NgModule({
  exports: [],
})
export class IsNotAuthenticatedGuard implements CanActivate {
  state$: Observable<boolean>;

  constructor(private router: Router, private store$: Store<AppState>) {
    this.state$ = store$.pipe(
      select(selectUserEmail),
      map(email => !email),
      tap(isNotAuthenticated => {
        if (!isNotAuthenticated) {
          this.redirect();
        }
      })
    );
  }

  canActivate() {
    return this.state$;
  }

  redirect() {
    console.warn('User authenticated, redirecting');
    this.router.navigateByUrl('/', { skipLocationChange: true });
  }
}
