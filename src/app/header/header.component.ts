import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private search : DataService) { }

  ngOnInit() {
   this.search.search({name : ''}).subscribe(data => {
     this.search.data.next(data)
   }) 
  }

  onSearch(event){
    this.search.search({name : event.target.value}).subscribe(data => {
    this.search.data.next(data)
    })
}
}
