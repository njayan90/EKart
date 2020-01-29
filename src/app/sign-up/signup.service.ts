import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http : HttpClient) { }

  addUser(email : string , password : string){
    return this.http.post('http://localhost:8080/users/signup' , {email : email , password : password})
  }
}
