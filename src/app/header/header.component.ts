import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private search : DataService , private spinner : NgxSpinnerService) { }

  ngOnInit() {
   }

  onSearch(event){
    this.spinner.show()
    this.search.search({name : event.target.value}).subscribe(data => {
    this.search.data.next(data)
    this.spinner.hide()
    })
}
}
