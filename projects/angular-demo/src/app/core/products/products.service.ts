import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { urls } from '../../api-urls';
import { Product } from './products.type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<{ data: Product[] }>(urls.products).pipe(
      // No further error handling as the service only returns an error if the
      // password is missing, which we validate client-side.
      catchError(this.handleError()),
      map(result => result.data)
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   */
  private handleError() {
    return (error: any): Observable<{ data: Product[] }> => {
      console.error(`Getting products failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(null);
    };
  }
}
