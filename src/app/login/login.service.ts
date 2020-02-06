import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuthorized = new Subject<boolean>();
  authorizedBoolean = false  
  constructor(private http : HttpClient) { }

  onLogin(userCredentials){
    return this.http.post('http://localhost:8080/users/login' , userCredentials)
  }
}
