import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './login/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private baseUrl = "http://localhost:8080/users/login"
  constructor(private http:HttpClient) { }


  getUserData(user: Users):Observable<object>
  {
    return this.http.post(`${this.baseUrl}`,user);
  }
}
 