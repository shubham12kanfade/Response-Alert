import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { DevicesCustomerComponent } from './devices-customer/devices-customer.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';

const routes: Routes = [
  {path:'devices-customer',component:DevicesCustomerComponent},
  {path:'customer-detail',component:CustomerDetailComponent},
  {path:'new-customer',component:NewCustomerComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceCustomerRoutingModule { }
