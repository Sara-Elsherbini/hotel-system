import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExploreUser } from '../models/user';
import { Observable } from 'rxjs';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';
import { Ads } from '../../../admin/ads/model/Ads';
import { Rooms } from '../../../admin/rooms/models/rooms'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient: HttpClient) { }
  getAllExplorRooms(params: ExploreUser.IParams): Observable<ExploreUser.IUserRoomsRes> {
    return this._HttpClient.get<ExploreUser.IUserRoomsRes>(HttpEndPoints.ExplorRoom.UsersRoom, { params: params })

  }
  getAllAds(): Observable<Ads.IResponseMulti> {
    return this._HttpClient.get<Ads.IResponseMulti>(HttpEndPoints.User.home.GetAllads);
  }
  getAllRooms(): Observable<Rooms.IRoomsRes> {
    return this._HttpClient.get<Rooms.IRoomsRes>(HttpEndPoints.User.home.Getallroom);
  }
}