import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  itemsInCart = [];
  constructor() { }

  addItems(item){
    this.itemsInCart.push(item)
  }

  getItems(){
    return this.itemsInCart
  }

  removeItems(index){
    this.itemsInCart.splice(index,1)
  }
}
