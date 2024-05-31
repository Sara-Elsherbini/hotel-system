import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor( private router: Router) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
    // return !this.jwtHelper.isTokenExpired(token);
  }

  public isAdmin():boolean {
    return this.getRole() === "admin";
  }

  public isUser():boolean{
    return this.getRole() === "user";
  }

  public setUserData(data: any) {
    localStorage.setItem("token", (({ token }) => token)(data));
    // localStorage.setItem("_id", )
  }

  public getToken(): string {
    return localStorage.getItem('token') || "";
  }

  public deserilizeToken(token: string): any {
    // return jwtDecode(token);
  }

  public getID() {
    let token = this.getToken();
    return this.deserilizeToken(token)["userId"];
  }

  public getName() {
    let token = this.getToken();
    return this.deserilizeToken(token)["userName"];
  }

  public getEmail() {
    let token = this.getToken();
    return this.deserilizeToken(token)["userEmail"];
  }

  public getRole() {
    let token = this.getToken();
    return this.deserilizeToken(token)["userGroup"];
  }

  public logout() {
    localStorage.removeItem("token");
    this.routeTologin();
  }

  public routeTologin() {
    this.router.navigate(["/auth"]);
    //window.location.reload();
  }
}
