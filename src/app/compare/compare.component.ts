import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  compareList : any = []
  constructor(private dataService : DataService , private http : HttpClient , private router : Router) { }

  ngOnInit() {
     this.dataService.getCompareList().subscribe(data => {
      this.compareList = data
    })
  }

  removeFromCompare(index){
    this.dataService.removeFromCompare(this.compareList[index]).subscribe(data => {})
    this.compareList.splice(index,1)
  }

  addToCart(item){
    this.dataService.addToCart(item).subscribe(data => {})
  }
}
