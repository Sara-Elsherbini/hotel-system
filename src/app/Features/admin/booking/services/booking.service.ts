import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';
import { Booking } from '../models/booking'
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _HttpClient: HttpClient) { }


  getAllBooking(data: any): Observable<Booking.IBookingRes> {
    return this._HttpClient.get<Booking.IBookingRes>(HttpEndPoints.booking.bookingList, { params: data })
  }

  getBookingId(id: number): Observable<any> {
    return this._HttpClient.get(`/admin/booking/${id}`);
  }

  deleteBooking(id: number): Observable<any> {
    return this._HttpClient.delete(HttpEndPoints.booking.bookingdelete + id);
  }



}
