import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartDataService } from '../cart-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CompareComponent } from '../compare/compare.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataList ;
  compareArray = [];
  indexArray = [];
  constructor(private data : DataService, private cart : CartDataService , private snackBar : MatSnackBar, private dialog : MatDialog) { }

  ngOnInit() {
    this.dataList = this.data.getDataList()
  }

  onClick(data , i){
    this.cart.addItems(data)
    this.data.addToCart(i)
  }

  openSnackBar(message,action,index){
    if(!this.indexArray.includes(index)){
      this.indexArray.push(index)
      this.compareArray.push(action);
    }
    else {
      this.compareArray.splice(this.indexArray.indexOf(index),1)
      this.indexArray.splice(this.indexArray.indexOf(index),1)
    }
    let snackBarRef =  this.snackBar.open(message,this.compareArray.length.toString(), {
     
    })
    snackBarRef.onAction().subscribe(() => {
     let dialogRef = this.dialog.open(CompareComponent, {
       width : '75vw',
       height : '80vh',
       data : this.compareArray
     })
    })
  }
  

}
