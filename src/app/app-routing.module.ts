import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PasswordSuccessfulComponent } from './password-successful/password-successful.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
{ path: '',component:ComponentComponent, loadChildren: () => import('./component/component.module').then(m => m.ComponentModule) },
{path:'sign-up', component:SignUpComponent},
{path:'login-page',component:LoginPageComponent},
{path:'password-recovery',component:PasswordRecoveryComponent},
{path:'password-successful',component:PasswordSuccessfulComponent},
{path:'reset-password',component:ResetPasswordComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
