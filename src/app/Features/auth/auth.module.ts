import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { RestPassComponent } from './components/rest-pass/rest-pass.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    RestPassComponent,
    ForgetPassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[AuthService]
})
export class AuthModule { }
