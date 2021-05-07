import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl: string;
  public accessflag: boolean;
  errorData: {};

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:9091';
    
   }

   getOrderDetails() {
    return this.http.get(this.baseUrl + '/orders').pipe(
        catchError(this.handleError)
      );
   }

   getPriceDetails() {
    return this.http.get(this.baseUrl + '/prices').pipe(
      catchError(this.handleError)
    );
 }

   getPaymentDetails() {
    return this.http.get(this.baseUrl + '/paid').pipe(
      catchError(this.handleError)
    );
 }

   private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong,

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}

