import { HttpEndPoints } from './../../../common/setting/HttpEndPoients';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Auth } from '../models/auth'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 userToken: string = '';
 role: string = '';
constructor(private _HttpClient:HttpClient) { }


login(loginData:Auth.ILoginReq):Observable<Auth.ILoginRes>{
 return this._HttpClient.post<Auth.ILoginRes>(HttpEndPoints.Auth.login,loginData)
}
}
