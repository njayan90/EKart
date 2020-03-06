import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private sign : SignupService) { }

  ngOnInit() {
  }

  signup(form : NgForm){
    console.log(form)
    if(form.value.password === form.value.cpassword){
    this.sign.addUser(form.value.email , form.value.password).subscribe(data => {})
    }
    form.reset()
  }

  reset(form : NgForm){
    form.reset()
  }

}
