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
    this.search.searchValue.next("")
   }
   

  onSearch(event){
    this.spinner.show()
    this.search.getDataList(4,1,"new",event.target.value).subscribe(data => {
    this.search.data.next(data)
    this.search.searchValue.next(event.target.value)
    this.spinner.hide()
    })
}
}
