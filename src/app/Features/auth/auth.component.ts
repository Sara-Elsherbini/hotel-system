import { Component } from '@angular/core';
import { FormGroup, Validators,FormControl } from "@angular/forms";
import { AuthService } from './services/auth.service';
import {Auth}from './models/auth'
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
 constructor(private _AuthService:AuthService){

 }
 ngOnInit(): void {


 }

 onLogin(data:FormGroup){
  this._AuthService.login(data.value).subscribe({
    next:(res:Auth.ILoginRes)=>{
      console.log(res);

    },
    error:()=>{},
    complete:()=>{}
  })
 }

 get email() {
  return this.loginForm.get('email');
}
get password() {
  return this.loginForm.get('password');
}
}
