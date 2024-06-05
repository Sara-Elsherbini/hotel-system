import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';

export interface IChangePassword{
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient, private _tokenService: TokenService) { }

  getCurrentUser(){
    let id = this._tokenService.getID();
    let endpoint = `${this._tokenService.isAdmin() ? "admin": "portal"}/users/${id}`
    return this._httpClient.get(endpoint);
  }

  onChangePassword(data: IChangePassword){
    let endpoint = `${this._tokenService.isAdmin() ? "admin": "portal"}/users/change-password`
    return this._httpClient.put(endpoint, data);
  }
}
