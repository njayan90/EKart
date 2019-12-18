import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataList ;
  constructor(private data : DataService, private cart : CartDataService) { }

  ngOnInit() {
    this.dataList = this.data.getDataList()
  }

  onClick(data , i){
    this.cart.addItems(data)
    this.data.addToCart(i)
  }

}
