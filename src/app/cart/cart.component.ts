import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = []
  constructor(private cart : CartDataService) { }

  ngOnInit() {
    this.cartItems = this.cart.getItems()
    console.log(this.cartItems)
  }

}
