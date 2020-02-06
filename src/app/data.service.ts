import { Injectable , OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataList ;
  queryParam ;
  data = new Subject();
  searchValue = new Subject();
  constructor(private http : HttpClient) { }
 
  getDataList(pageSize : number , currentPage : number, sortCategory : string , name : string){
     this.queryParam = `?pageSize=${pageSize}&currentPage=${currentPage}&sortCategory=${sortCategory}&name=${name}`
     return this.http.get('http://localhost:8080/dashboard' + this.queryParam)
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
}
