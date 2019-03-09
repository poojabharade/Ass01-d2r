import { Component, OnInit } from '@angular/core';
import { dec2Roman } from "dec2roman";

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {

  meraNamDecimals: number;
  teraNamRoman: string = '';
  errorMsg: string;

  constructor() {

  }

  convertDec2Rom(meraNamDecimal) {


    try {
      this.errorMsg = ""
      meraNamDecimal = + meraNamDecimal;

      if (meraNamDecimal != '' || typeof (meraNamDecimal) === typeof (this.meraNamDecimals)) {
        this.teraNamRoman = dec2Roman(meraNamDecimal);

      }
      else
        if (typeof (meraNamDecimal) !== typeof (this.meraNamDecimals)) {
          this.teraNamRoman = ' ';
        }
    }
    catch (error) {
      this.errorMsg = error;
    }


  }
  ngOnInit() {
  }

}
