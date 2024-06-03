import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _HttpClient: HttpClient) { }


  getAllBooking(data: any): Observable<any> {
    return this._HttpClient.get(HttpEndPoints.booking.bookingList, {params :data})
  }

  getBookingId(id: number): Observable<any> {
    return this._HttpClient.get(`/admin/booking/${id}`);
  }

  deleteBooking(id: number, name: string): Observable<any> {
    return this._HttpClient.delete(`/admin/booking/${id}`, { body: { name } });
  }



}
