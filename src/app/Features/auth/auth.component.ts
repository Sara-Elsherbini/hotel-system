import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService } from './services/auth.service';
import {Auth}from './models/auth'
import { NotifyService, TokenService } from 'src/app/common';
import { HttpErrorResponse } from '@angular/common/http';
import { RoutePaths } from 'src/app/common/setting/RoutePath';
import { Router } from '@angular/router';
import { RoleEnum } from 'src/app/common/Enums/RoleEnum.enum';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  userName:string='';
  RoleEnum=RoleEnum;
  role:string='';
  hide:boolean=true
  RoutePaths=RoutePaths
  loginForm:FormGroup=new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
      ),
    ]),
  })
 constructor(
  private _AuthService:AuthService,
  private _NotifyService:NotifyService,
  private _tokenService: TokenService,
  private _Router:Router
){

 }
 ngOnInit(): void {


 }

 onLogin(data:FormGroup){
  this._AuthService.login(data.value).subscribe({
    next:(res:Auth.ILoginRes)=>{
      this.role=res.data.user.role
      this._tokenService.setUserData(res.data);

    },
    error:(error:HttpErrorResponse)=>{
      const errMes=error.error.message;
      console.log("error",error);

      this._NotifyService.ServerError(errMes);
    },
    complete:()=>{this._NotifyService.Success("Data is Sent Successfully");
    if (this.role==RoleEnum.ADMIN) {
      this._Router.navigateByUrl(this.RoutePaths.Dashboard.Dashboard)
    }else if (this.role==RoleEnum.USER) {
      this._Router.navigateByUrl(this.RoutePaths.User.home)
    }

    }
  })
 }

 get email() {
  return this.loginForm.get('email');
}
get password() {
  return this.loginForm.get('password');
}
}
