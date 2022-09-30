import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { ComponentComponent } from './component.component';
import { AlarmReceviedComponent } from './alarm-recevied/alarm-recevied.component';
import { DevicesCustomerComponent } from './device-customer/devices-customer/devices-customer.component';
import { FrontComponent } from './front/front.component';
import { HeaderComponent } from './header/header.component';
import { InventoryManagmentComponent } from './inventory-managment/inventory-managment.component';
import { ProductsComponent } from './products/products.component';
import { RolesPermissionComponent } from './roles-permission/roles-permission.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StaffManagementComponent } from './staff-managment/staff-management/staff-management.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateNewRoleComponent } from './create-new-role/create-new-role.component';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [
    ComponentComponent,
    FrontComponent,
    HeaderComponent,
    SidebarComponent,
    DevicesCustomerComponent,
    AlarmReceviedComponent,
    RolesPermissionComponent,
    StaffManagementComponent,
    ProductsComponent,
    InventoryManagmentComponent,
    CreateNewRoleComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
      // MATERIAL IMPORTS
      MatSidenavModule,
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      MatDividerModule,
      MatListModule,
      MatSelectModule,
      MatTabsModule,
  ],exports:[HeaderComponent]
})
export class ComponentModule { }
