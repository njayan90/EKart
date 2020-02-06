import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { CartDataService } from '../cart-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CompareComponent } from '../compare/compare.component';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from "ngx-spinner";
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataList ;
  compareArray : any = [];
  indexArray = [];
  sortCategory = "new";
  searchString : any = "";
  @ViewChild('paginator' , {static : false}) paginator : PageEvent
  constructor(private data : DataService, private cart : CartDataService , private snackBar : MatSnackBar, private dialog : MatDialog , private router : Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.data.searchValue.subscribe(data => {
      this.searchString = data
    })
    this.data.getDataList(4,1,this.sortCategory,this.searchString).subscribe(data => {
      this.dataList = data
      this.spinner.hide();
    }) 
   this.data.data.subscribe(data => {
      this.dataList = data
    })

   this.data.getCompareList().subscribe(data => {
     this.compareArray = data
    if(this.compareArray.length>0){
      this.openSnackBar("Compare")
    }
   })
  }

  onClick(data , i){
    this.data.addToCart(data).subscribe((data) => {
      this.router.navigate(['/cart'])
    })
  }

  openSnackBar(message,action = null){
    if(action !== null){
    this.data.addToCompare(action).subscribe(data => {})
    }
    let snackBarRef =  this.snackBar.open(message,"Open", {
    })
    snackBarRef.onAction().subscribe(() => {
     let dialogRef = this.dialog.open(CompareComponent, {
       width : '75vw',
       height : '80vh',
     })
    })
  }

  lowToHigh(){
    this.spinner.show();
    this.paginator.pageIndex = 0
    this.sortCategory = "lowToHigh"
    this.data.getDataList(4,1,this.sortCategory,this.searchString).subscribe(data => {
      this.dataList = data
      this.spinner.hide()
    })
    // this.data.lowToHigh().subscribe(data => {
    //   this.dataList = data
    // })
  }
  
  highToLow(){
    this.spinner.show();
    this.paginator.pageIndex = 0
    this.sortCategory = "highToLow"
    this.data.getDataList(4,1,this.sortCategory,this.searchString).subscribe(data => {
      this.dataList = data
      this.spinner.hide()
    })
    // this.data.highToLow().subscribe(data => {
    //   this.dataList = data
    // })
  }

  newest(){
    this.spinner.show();
    this.paginator.pageIndex = 0
    this.sortCategory = "new"
    this.data.getDataList(4,1,this.sortCategory,this.searchString).subscribe(data => {
      this.dataList = data
      this.spinner.hide();
    }) 
  }

  onChangedPage(event : PageEvent){
    this.spinner.show();
    this.data.getDataList(4,event.pageIndex+1,this.sortCategory,this.searchString).subscribe(data => {
      this.dataList = data
      this.spinner.hide();
    }) 
  }

}
