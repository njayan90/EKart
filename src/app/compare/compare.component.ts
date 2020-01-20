import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  compareList : any = []
  constructor(private dataService : DataService , private http : HttpClient , private router : Router ,  public dialogRef: MatDialogRef<CompareComponent>) { }

  ngOnInit() {
     this.dataService.getCompareList().subscribe(data => {
      this.compareList = data
    })
  }

  removeFromCompare(index){
    this.dataService.removeFromCompare(this.compareList[index]).subscribe(data => {})
    this.compareList.splice(index,1)
    if(this.compareList.length === 0){
      this.dialogRef.close()
    }
  }

  addToCart(item){
    this.dataService.addToCart(item).subscribe(data => {
      this.router.navigate(['/cart'])
    })
    this.dialogRef.close()
  }
}
