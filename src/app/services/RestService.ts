import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../userdata/user';
import { Observable, throwError } from 'rxjs';
import { catchError, } from 'rxjs/operators';

@Injectable()
export class RestService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]>{
        return this.http.get<any>('api/user/GetUsers')
        .pipe(catchError(this.handleError));
    }

    putUser(user: User, id):Observable<User>{
        return this.http.put<User>('api/user/PutUser/' + id, user)
        .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }
}