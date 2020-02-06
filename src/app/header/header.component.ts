import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthorized : boolean = false
  cartItems : any = [];
  constructor(private cart : CartDataService, private search : DataService , private spinner : NgxSpinnerService , private login : LoginService , private router : Router) { }

  ngOnInit() {
    this.search.searchValue.next("")
    this.login.isAuthorized.subscribe(data => {
      this.isAuthorized = data
    })
    this.cart.getItems();
    this.cart.itemSubject.subscribe(data => {
      this.cartItems = data
    })
   }
   

  onSearch(event){
    this.search.searchValue.next(event.target.value)
    this.spinner.show()
    this.search.getDataList(4,1,"new",event.target.value).subscribe(data => {
    this.search.data.next(data)
    this.spinner.hide()
    })
}

  onLogout(){
    this.router.navigate(['/login'])
    this.login.isAuthorized.next(false)
  }
}
