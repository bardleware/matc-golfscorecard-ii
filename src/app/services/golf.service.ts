// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { mock } from './mock';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class GolfService {
  constructor(
    private http: Http) { };

  private baseUrl = 'http://golf-courses-api.herokuapp.com'

  getCourseOptions(): Observable<Response> {
    let body = JSON.stringify(mock.location); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(`${this.baseUrl}/courses`, body, options) // ...using post request
      .map((response: Response) => response.json())
      .map(({ courses }) => courses)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  getCourseInfo(id): Observable<Response> {
    return this.http.get(`${this.baseUrl}/courses/${id}`)
      .map((response: Response) => response.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
}
