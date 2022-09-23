import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
{ path: '',component:ComponentComponent, loadChildren: () => import('./component/component.module').then(m => m.ComponentModule) },
{path:'login-page',component:LoginPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
