import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../../models/userBooking.model';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html'
})
export class BookingdetailsComponent {
  @Input() booking!: Booking.IBookingCached;
}
