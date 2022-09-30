import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmReceviedComponent } from './alarm-recevied/alarm-recevied.component';
import { ComponentComponent } from './component.component';
import { CreateNewRoleComponent } from './create-new-role/create-new-role.component';
import { InventoryManagmentComponent } from './inventory-managment/inventory-managment.component';
import { RolesPermissionComponent } from './roles-permission/roles-permission.component';

const routes: Routes = [
   {path:'',component:ComponentComponent,children:[ 
   { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
   { path: 'device-customer', loadChildren: () => import('./device-customer/device-customer.module').then(m => m.DeviceCustomerModule) },
   { path: 'staff-managment', loadChildren: () => import('./staff-managment/staff-managment.module').then(m => m.StaffManagmentModule) },
  ]},
 
  { path: 'alarm-recevied', component: AlarmReceviedComponent },
  { path: 'roles-permission', component: RolesPermissionComponent },
  { path: 'inventory-managment', component: InventoryManagmentComponent },
  { path: 'create-new-role', component: CreateNewRoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
