import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facilities } from '../../facilities/models/facilites';
import { Observable } from 'rxjs';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }

  getAllUsers(params:Users.IParams):Observable<Users.IUserResponse>{
    return this._HttpClient.get<Users.IUserResponse>(HttpEndPoints.Users.usersList,{params:params})
   }
}
