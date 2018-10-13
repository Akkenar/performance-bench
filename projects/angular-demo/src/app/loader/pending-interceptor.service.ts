/*
 * src: https://github.com/mpalourdio/ng-http-loader
 */

import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { ExistingProvider, Injectable } from '@angular/core';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PendingInterceptorService implements HttpInterceptor {
  private _pendingRequests = 0;
  private _pendingRequestsStatus: ReplaySubject<boolean> = new ReplaySubject<
    boolean
  >(1);

  get pendingRequestsStatus$(): Observable<boolean> {
    return this._pendingRequestsStatus.asObservable();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._pendingRequests++;

    if (1 === this._pendingRequests) {
      this._pendingRequestsStatus.next(true);
    }

    return next.handle(req).pipe(
      map(event => {
        return event;
      }),
      catchError(error => {
        return throwError(error);
      }),
      finalize(() => {
        this._pendingRequests--;

        if (0 === this._pendingRequests) {
          this._pendingRequestsStatus.next(false);
        }
      })
    );
  }
}

export const PendingInterceptorServiceInterceptor: ExistingProvider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useExisting: PendingInterceptorService,
    multi: true,
  },
];
