import { Injectable } from '@angular/core';
import { Rooms } from '../models/rooms'
import { Observable } from 'rxjs';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private _HttpClient: HttpClient) { }

  getAllRooms(params: Rooms.IParams): Observable<Rooms.IRoomsRes> {
    return this._HttpClient.get<Rooms.IRoomsRes>(HttpEndPoints.Rooms.RoomsList, { params: params })
  }

  addRoom(data: FormData): Observable<Rooms.IRoom> {
    return this._HttpClient.post<Rooms.IRoom>(HttpEndPoints.Rooms.RoomsList, data)
  }
  editRoom(data: FormData, id: number): Observable<Rooms.IRoom> {
    return this._HttpClient.put<Rooms.IRoom>(`${HttpEndPoints.Rooms.RoomsList}/${id}`, data)
  }

  getRoomById(id: number): Observable<Rooms.IRoomdDetails> {

    return this._HttpClient.get<Rooms.IRoomdDetails>(`${HttpEndPoints.Rooms.editRoom}/${id}`)
  }
  deleteRoom(facilitieID: number): Observable<{ raw: [], affected: number }> {
    return this._HttpClient.delete<{ raw: [], affected: number }>(HttpEndPoints.Rooms.deleteRoom + facilitieID)
  }

}
