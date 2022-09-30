import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-modal',
  templateUrl: './cust-modal.component.html',
  styleUrls: ['./cust-modal.component.css']
})
export class CustModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  value: number = 5;

  highValue: number = 10;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 1 },
      { value: 2 },
      { value: 3},
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9},
    ],
  };

}
