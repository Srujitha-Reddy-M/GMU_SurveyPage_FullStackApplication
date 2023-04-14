// Srujitha Reddy
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:8080/api/users';

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', {user});
  }

  putRecord(data: any) {
    return this.http.post(this.rootURL + '/putRecord', {data});
  }

  getStudentsID() {
    return this.http.get(this.rootURL + '/getStudentsID');
  }

  getStudentData(data: any) {
    return this.http.post(this.rootURL + '/getStudentData', {data});
  }

}
