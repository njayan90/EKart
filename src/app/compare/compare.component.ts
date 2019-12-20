import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, } from '@angular/material/dialog';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
  }

}
