import { Injectable } from '@angular/core';
import {Rooms} from '../models/rooms'
import { Observable } from 'rxjs';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

constructor( private _HttpClient:HttpClient) { }

getAllRooms(params:Rooms.IParams):Observable<Rooms.IRoomsRes>{
  return this._HttpClient.get<Rooms.IRoomsRes>(HttpEndPoints.Rooms.RoomsList,{params:params})
 }

}
