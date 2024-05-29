import { Component } from '@angular/core';
import { FormGroup, Validators,FormControl } from "@angular/forms";
import { AuthService } from './services/auth.service';
import {Auth}from './models/auth'
import { NotifyService } from 'src/app/common/services/notify.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  userName:string='';
  hide:boolean=true

  loginForm:FormGroup=new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
      ),
    ]),
  })
 constructor(private _AuthService:AuthService,private _NotifyService:NotifyService){

 }
 ngOnInit(): void {


 }

 onLogin(data:FormGroup){
  this._AuthService.login(data.value).subscribe({
    next:(res:Auth.ILoginRes)=>{
      localStorage.setItem('token',res.data.token);
      let user=JSON.stringify(res.data.user)
      localStorage.setItem('user',user);

    },
    error:(error:HttpErrorResponse)=>{
      const errMes=error.error.message;
      console.log("error",error);

      this._NotifyService.ServerError(errMes);
    },
    complete:()=>{this._NotifyService.Success("Data is Sent Successfully");}
  })
 }

 get email() {
  return this.loginForm.get('email');
}
get password() {
  return this.loginForm.get('password');
}
}
