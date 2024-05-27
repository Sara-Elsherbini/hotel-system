import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { RestPassComponent } from './components/rest-pass/rest-pass.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';


@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    RestPassComponent,
    ForgetPassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
