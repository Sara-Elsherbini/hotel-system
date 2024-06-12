import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifyService, TokenService } from 'src/app/common';
import { UserService } from '../../services/user.service';
import { Rooms } from 'src/app/Features/admin/rooms/models/rooms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MustLoginDialog } from '../MustLoginDialog/MustLoginDialog';
import { BookingService } from '../../services/booking/booking.service';
import { Booking } from '../../models/userBooking.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  roomId!: string;
  roomData: Rooms.IRoom = {
    _id: '',
    roomNumber: '',
    price: 0,
    capacity: 0,
    discount: 0,
    facilities: [],
    images: [],
    createdBy: {
      _id: '',
      userName: ''
    },
    createdAt: new Date(),
    updatedAt: new Date()
  };
  dummyImage: string = "assets/img/room-placeholder.png";

  bookingForm: FormGroup = new FormGroup({
    startDate: new FormControl(null, [Validators.required]),
    endDate: new FormControl(null, [Validators.required]),
  })

  constructor(
    private _router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private _NotifyService: NotifyService,
    private _GuestService: UserService,
    private _tokenService: TokenService,
    private _userBookingService: BookingService,
    private _TranslateService:TranslateService,
    private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.roomId = this._ActivatedRoute.snapshot.params['id'];
    this.getRoomById(this.roomId);
  }

  getRoomById(id: string) {
    this._GuestService.getRoomById(id).subscribe({
      next: (res: Rooms.IRoomdDetails) => {
        this.roomData = res.data.room;
      },
      error: (err) => {
        this._NotifyService.Error(err.error.message)
      }
    });
  }

  startBooking() {
    if (this.bookingForm.valid) {
      if (this._tokenService.isAuthenticated()) {
        let numberOfNights = this.calculateDiff(this.bookingForm.value["startDate"], this.bookingForm.value["endDate"]) + 1;
        let totalPrice = this.roomData.discount ? (this.roomData.price - this.roomData.discount) * numberOfNights : this.roomData.price * numberOfNights;
        let bookingId: string;
        let bookingData: Booking.IBookingCached;
        this._userBookingService.addBooking({ room: this.roomId, totalPrice, ...this.bookingForm.value }).subscribe({
          next: (res) => {
            bookingId = res.data.booking._id as string
            bookingData = {
              id: bookingId,
              numberOfNights: numberOfNights,
              roomPrice: this.roomData.price,
              roomDiscount: this.roomData.discount,
              roomName: this.roomData.roomNumber,
              startDate: res.data.booking.startDate,
              endDate: res.data.booking.endDate,
              totalPrice: res.data.booking.totalPrice
            };
          },
          error: (err) => {
            this._NotifyService.Error(err.error.message)
          },
          complete: () => {
            this._userBookingService.continueBooking(bookingId, bookingData);
          }
        })
       } else{
          this._NotifyService.Warning2(
            this._TranslateService.instant('home.LoginPutFavorites'),
            this._TranslateService.instant('layout.navbar.buttons.Login'),
            this._TranslateService.instant('home.Cancel'),
          )
            .then(result => {
              if (result) {
                setTimeout(() => {
                  this._tokenService.logout()
                }, 300);
              }
            });
        }
    }
  }



  calculateDiff(startDate: string, endDate: string) {
    let start = new Date(startDate);
    let end = new Date(endDate);

    return Math.floor((Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) - Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) / (1000 * 60 * 60 * 24));
  }

  public get StartDate() {
    return this.bookingForm.controls["startDate"];
  }
  public get EndDate() {
    return this.bookingForm.controls["endDate"];
  }

}
