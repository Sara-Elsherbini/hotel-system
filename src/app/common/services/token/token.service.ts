import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoleEnum } from '../../Enums/RoleEnum.enum';
import { HttpClient } from '@angular/common/http';
import { HttpEndPoints } from '../../setting/HttpEndPoients';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { jwtDecode } from 'jwt-decode';

interface IUser{
  _id: string,
  userName: string
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor( private router: Router, private _httpClient: HttpClient) { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
    // return !this.jwtHelper.isTokenExpired(token);
  }

  isAdmin():boolean {
    return this.getRole() === RoleEnum.ADMIN;
  }

  isUser():boolean{
    return this.getRole() === RoleEnum.USER;
  }

  setUserData(data: any) {
    this.setToken((({ token }) => token)(data))
    this.setUser((({ user }) => user)(data))
  }
  
  setToken(token: string){
    localStorage.setItem("token", token);
  }

  setUser(user:IUser){
    localStorage.setItem("user", JSON.stringify(user));
  }

  getToken(): string {
    return localStorage.getItem('token') || "";
  }

  getUser(): any{
    let user = localStorage.getItem("user") || ""
    return JSON.parse(user);
  }

  getID() {
    let user = this.getUser();
    return user["_id"];
  }

  getName() {
    let user = this.getUser();
    return user["userName"];
  }

  getRole() {
    let user = this.getUser();
    return user["role"];
  }

  getCurrentUser(){
    let id = this.getID();
    let endpoint = `${this.isAdmin() ? "admin": "portal"}/users/${id}`
    return this._httpClient.get(endpoint);
  }

  logout() {
    localStorage.removeItem("token");
    this.routeTologin();
  }

  routeTologin() {
    this.router.navigate(["/auth"]);
  }
}
