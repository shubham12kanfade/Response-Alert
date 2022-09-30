import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddCutomerComponent } from './add-cutomer/add-cutomer.component';
import { CustModalComponent } from './cust-modal/cust-modal.component';


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  constructor(public dialog: MatDialog,public custom: MatDialog) { }

 

  ngOnInit(): void {

    
  }


  open(){

    const dialog =this.dialog.open(CustModalComponent)
    dialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

   add(){

    const custom = this.custom.open(AddCutomerComponent)
    custom.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
   }
  }

