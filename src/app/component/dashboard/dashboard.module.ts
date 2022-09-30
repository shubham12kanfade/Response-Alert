import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomerQueriesComponent } from './customer-queries/customer-queries.component';
import { QueryDetailComponent } from './query-detail/query-detail.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    CustomerQueriesComponent,
    HomeComponent,
    QueryDetailComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
