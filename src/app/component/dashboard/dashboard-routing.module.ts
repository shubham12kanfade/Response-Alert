import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerQueriesComponent } from './customer-queries/customer-queries.component';
import { HomeComponent } from './home/home.component';
import { QueryDetailComponent } from './query-detail/query-detail.component';
import { ReportComponent } from './report/report.component';

 const routes: Routes = [

 {path:'',component:HomeComponent},
 {path:'customer-queries',component:CustomerQueriesComponent},
 {path:'query-detail',component:QueryDetailComponent},
 {path:'report',component:ReportComponent}

 ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
