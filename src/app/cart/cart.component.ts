import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../cart-data.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = []
  constructor(private cart : CartDataService , private data : DataService) { }

  ngOnInit() {
    this.cartItems = this.cart.getItems()
  }

  onClick(index,data){
    data.addedToCart = false
    this.cart.removeItems(index)
  }
}
