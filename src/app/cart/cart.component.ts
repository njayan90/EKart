import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../cart-data.service';
import { DataService } from '../data.service';
import {NgxSpinnerService} from 'ngx-spinner';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : any = [];
  totalCost;
  constructor(private cart : CartDataService , private data : DataService , private spinner : NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show()
    this.cart.getItems();
    this.cart.itemSubject.subscribe(data => {
      this.cartItems = data
      this.spinner.hide()
    })
    this.cart.costSubject.subscribe(data => {
      this.totalCost = data
    })
    
  }

  onClick(index,data){
    this.cartItems.splice(index,1)
    this.data.removeFromCart(data).subscribe(data => {})
    this.totalCost.price = this.totalCost.price - data.cost
    this.totalCost.gst = Math.ceil(0.12 * this.totalCost.price)
    this.totalCost.total = this.totalCost.price + this.totalCost.gst + this.totalCost.delivery
    this.cart.costSubject.next(this.totalCost)
  }
}
