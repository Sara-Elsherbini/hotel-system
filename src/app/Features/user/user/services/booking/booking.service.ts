import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';
import { Booking } from '../../models/userBooking.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  latestBooking: BehaviorSubject<Booking.IBookingCached> = new BehaviorSubject({} as Booking.IBookingCached);

  constructor(private _HttpClient: HttpClient, private _router: Router) { }

  getUserBooking(roomId: string): Observable<Booking.IBResponseMulti>{
    return this._HttpClient.get<Booking.IBResponseMulti>(`${HttpEndPoints.UserBooking.GetForUser}`);
  }

  addBooking(newData: Booking.IBookingProp): Observable<Booking.IBResponseSingle>{
    return this._HttpClient.post<Booking.IBResponseSingle>(`${HttpEndPoints.UserBooking.Default}`, newData);
  }

  payBooking(bookingId:string, tokenData: {token: string}): Observable<Booking.IBResponseSingle>{
    return this._HttpClient.post<Booking.IBResponseSingle>(`${HttpEndPoints.UserBooking.Default}/${bookingId}/pay`, tokenData);
  }

  continueBooking(bookingId: string, data: Booking.IBookingCached){
    this.latestBooking.next({
      id: bookingId,
      numberOfNights: data.numberOfNights,
      roomPrice: data.roomPrice,
      roomDiscount: data.roomDiscount,
      roomName: data.roomName,
      startDate: data.startDate,
      endDate: data.endDate,
      totalPrice: data.totalPrice
    })
    this._router.navigate(["/booking"], {queryParams: {id: bookingId}})

  }
}
