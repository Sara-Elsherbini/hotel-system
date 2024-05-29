import { HttpEndPoints } from './../../../common/setting/HttpEndPoients';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Auth } from '../models/auth'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user!:Auth.User
 role: string = '';
constructor(private _HttpClient:HttpClient) {
  if (localStorage.getItem('token')!==null) {
     this.getProfile()
  }
}
getProfile(){
if(localStorage.getItem('token')!==null&&localStorage.getItem('user')!==null) {
  let myUser=localStorage.getItem('user')?localStorage.getItem('user'):''
  myUser?this.user=JSON.parse(myUser):'';
  this.role=this.user.role;
}
}

login(loginData:Auth.ILoginReq):Observable<Auth.ILoginRes>{
 return this._HttpClient.post<Auth.ILoginRes>(HttpEndPoints.Auth.login,loginData)
}
}
