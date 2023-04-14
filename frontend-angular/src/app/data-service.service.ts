// Yaksh Shah
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private surveyServerGetRecordsUrl = 'http://localhost:8080/api/students';
  private surveyServerAddRecordsUrl = 'http://localhost:8080/api/students';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSurveyRecords(): Observable<any>{
    return this.http.get(this.surveyServerGetRecordsUrl)
      .pipe(
          tap(_=>this.log('fetched surveys')),
          catchError(this.handleError<any>('getSurveyRecords', []))
      );
  }

  addSurveyRecord(data): Observable<any>{
    return this.http.post<any>(this.surveyServerAddRecordsUrl,data,this.httpOptions).pipe(
        tap(data => this.log("added record")),
        catchError(this.handleError<any>('addSurveyRecord'))
    );
         
  }


  private log(message: string) {
    console.log(message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      
      console.error(error); 

      
      this.log(`${operation} failed: ${error.message}`);

      
      return of(result as T);
    };
  }

}
