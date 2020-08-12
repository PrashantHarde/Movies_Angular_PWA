import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpEventType, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  sericeApiURL: string;


  constructor(private http: HttpClient) {
    this.sericeApiURL = "http://www.omdbapi.com?apikey=b653d0ba&";
  }


  GetMovieListById(searchText: string, pageNo = 1) {
    return this.http.get<any>(this.sericeApiURL + 's=' + searchText)
      .pipe(
        catchError(this.handleError),
      );
  }

  GetSelectedMovieListById(key: string, pageNo = 1) {
    return this.http.get<any>(this.sericeApiURL + 'i=' + key)
      .pipe(
        catchError(this.handleError),
      );
  }


  // Error handling
  handleError(error) {
    console.log(error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
