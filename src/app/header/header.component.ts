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
  }

  onKeyUp(event){
    this.search.search.next(event.target.value)
  }

}
