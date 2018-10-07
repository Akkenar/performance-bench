import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { urls } from '../../api-urls';
import { Credentials } from './credentials.type';
import { User } from './user.type';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<User> {
    return this.http.post<User>(urls.login, credentials).pipe(
      // No further error handling as the service only returns an error if the
      // password is missing, which we validate client-side.
      catchError(this.handleError())
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   */
  private handleError() {
    return (error: any): Observable<User> => {
      console.error(`Login failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(null);
    };
  }
}
