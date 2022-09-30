import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceCustomerRoutingModule } from './device-customer-routing.module';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustModalComponent } from './new-customer/cust-modal/cust-modal.component';
import { AddCutomerComponent } from './new-customer/add-cutomer/add-cutomer.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';



@NgModule({
  declarations: [
    CustomerDetailComponent,
    NewCustomerComponent,
    CustModalComponent,
    AddCutomerComponent,
    AddCutomerComponent
  ],
  imports: [
    CommonModule,
    DeviceCustomerRoutingModule,
    NgxSliderModule
  ]
})
export class DeviceCustomerModule { }
