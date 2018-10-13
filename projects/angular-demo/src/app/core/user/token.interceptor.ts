import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { ExistingProvider, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { selectUser } from './user.selector';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  private token: string;

  constructor(public store$: Store<AppState>) {
    store$.pipe(select(selectUser)).subscribe(user => {
      if (user) {
        this.token = user.token;
      } else {
        // User not authenticated.
        this.token = null;
      }
    });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.token) {
      // Add the token as a Bearer token. Let's hope the backend
      // handles this correctly.
      const requestWithToken = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      return next.handle(requestWithToken);
    }

    return next.handle(request);
  }
}

export const TokenInterceptorProvider: ExistingProvider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useExisting: TokenInterceptor,
    multi: true,
  },
];
