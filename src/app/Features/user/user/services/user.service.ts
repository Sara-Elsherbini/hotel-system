import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExploreUser } from '../models/user';
import { Observable } from 'rxjs';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';
import { Rooms } from 'src/app/Features/admin/rooms/models/rooms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient: HttpClient) { }
  getAllExplorRooms(params: ExploreUser.IParams): Observable<ExploreUser.IUserRoomsRes> {
    return this._HttpClient.get<ExploreUser.IUserRoomsRes>(HttpEndPoints.ExplorRoom.UsersRoom, { params: params })
  }
}
