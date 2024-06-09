import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';
import { Ads } from '../../../admin/ads/model/Ads';
import{Rooms} from '../../../admin/rooms/models/rooms';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient: HttpClient) { }
  getAllAds(): Observable<Ads.IResponseMulti> {
    return this._HttpClient.get<Ads.IResponseMulti>(HttpEndPoints.User.home.GetAllads);
  }
  getAllRooms(): Observable<Rooms.IRoomsRes> {
    return this._HttpClient.get<Rooms.IRoomsRes>(HttpEndPoints.User.home.Getallroom);
  }


  getAllFavRooms(): Observable<User.IFavResponse> {
    return this._HttpClient.get
    <User.IFavResponse>(HttpEndPoints.User.fav.favoriteRooms);
  }

  deleteFavRoom(id: string): Observable<User.IFavResponse>{
    return this._HttpClient.delete<User.IFavResponse>(HttpEndPoints.User.fav.deleteFavoriteRooms + id);
  }
}
