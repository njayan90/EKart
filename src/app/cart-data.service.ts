import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  itemsInCart : any = [];
  itemSubject = new Subject();
  costSubject = new Subject();
  cost = {
    price : 0,
    total : 0,
    gst : 0,
    delivery : 0
  };
  constructor(private http : HttpClient) { }

  getItems(){
    this.http.get('http://localhost:8080/cart').subscribe(data => {
      this.itemsInCart = data
      this.itemSubject.next(this.itemsInCart)
      this.cost = {
        price : 0,
        gst : 0,
        delivery : 0,
        total : 0
      };
      for(let i = 0 ; i<this.itemsInCart.length ; i++){
        this.cost.price = this.cost.price+this.itemsInCart[i].cost
      }
      this.cost.gst = Math.ceil(this.cost.price * 0.12)
      this.cost.delivery = 150;
      this.cost.total = this.cost.price + this.cost.gst + this.cost.delivery
      this.costSubject.next(this.cost)
    })
  }

  removeItems(index){
    this.itemsInCart.splice(index,1)
  }
}
