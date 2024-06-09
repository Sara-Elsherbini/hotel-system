import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExploreUser } from '../models/user';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';
import { Rooms } from 'src/app/Features/admin/rooms/models/rooms';
import { Observable } from 'rxjs';
import { Ads } from '../../../admin/ads/model/Ads';

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

  addRoomFav(roomId:string){
    return this._HttpClient.post(HttpEndPoints.User.home.addToFav, {roomId})

  getRoomById(id: number): Observable<Rooms.IRoomdDetails>{
    return this._HttpClient.get<Rooms.IRoomdDetails>(`${HttpEndPoints.User.home.GetRoomById}/${id}`);


  }
}
