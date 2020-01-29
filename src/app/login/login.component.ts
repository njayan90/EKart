import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : FormGroup
  constructor(private router : Router) { }

  ngOnInit() {
    this.login = new FormGroup({
      'email' :  new FormControl(null, [Validators.required , Validators.email]),
      'password' : new FormControl(null, [Validators.required , Validators.minLength(4)])
    })
  }
  onLogin(){
   this.router.navigate(['/dashboard'])
  }

}
