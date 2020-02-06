import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : FormGroup
  constructor(private router : Router , private loginService : LoginService) { }

  ngOnInit() {
    this.login = new FormGroup({
      'email' :  new FormControl(null, [Validators.required , Validators.email]),
      'password' : new FormControl(null, [Validators.required , Validators.minLength(4)])
    })
  }
  onLogin(){
   this.loginService.onLogin(this.login.value).subscribe(data => {
    this.loginService.isAuthorized.next(true)
    this.router.navigate(['/dashboard'])
   }) 
  }



}
