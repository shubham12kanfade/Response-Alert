import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmReceviedComponent } from './alarm-recevied/alarm-recevied.component';
import { CreateNewRoleComponent } from './create-new-role/create-new-role.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevicesCustomerComponent } from './devices-customer/devices-customer.component';
import { HomeComponent } from './home/home.component';
import { InventoryManagmentComponent } from './inventory-managment/inventory-managment.component';
import { RolesPermissionComponent } from './roles-permission/roles-permission.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'devices-customer', component: DevicesCustomerComponent },
  { path: 'alarm-recevied', component: AlarmReceviedComponent },
  { path: 'roles-permission', component: RolesPermissionComponent },
  { path: 'staff-management', component: StaffManagementComponent },
  { path: 'inventory-managment', component: InventoryManagmentComponent },
  { path: 'create-new-role', component: CreateNewRoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
