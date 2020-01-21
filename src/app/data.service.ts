import { Injectable , OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataList ;
  data = new Subject();
  searchValue = new Subject();
  constructor(private http : HttpClient) { }
 
  getDataList(){
     return this.http.get('http://localhost:8080/dashboard')
  }
   
  addToCart(item){
    return this.http.post('http://localhost:8080/cart/insert',item)
  }

  removeFromCart(item) {
    return this.http.post('http://localhost:8080/cart/remove' , item)
  }

  addToCompare(item){
    return this.http.post('http://localhost:8080/compare/insert' , item)
  }

  getCompareList(){
    return this.http.get('http://localhost:8080/compare')
  }

  removeFromCompare(item){
    return this.http.post('http://localhost:8080/compare/remove' , item)
  }

  search(name){
    return this.http.post('http://localhost:8080/dashboard/search' , name)
  }
}
