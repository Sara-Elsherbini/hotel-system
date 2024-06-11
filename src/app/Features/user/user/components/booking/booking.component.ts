import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeCardElementOptions, StripeElementsOptions, Token } from '@stripe/stripe-js';
import { StripeCardComponent, injectStripe } from 'ngx-stripe';
import { BookingService } from '../../services/booking/booking.service';
import { Booking } from '../../models/userBooking.model';
import { NotifyService } from 'src/app/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  @ViewChild(StripeCardComponent) card!: StripeCardComponent;

  // Force to Not Reload Before accepting data loss
  @HostListener("window:beforeunload", ["$event"])
  showMessage($event: any) {
    $event.returnValue = "Your data will be lost!";
  }

  stripe = injectStripe('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8');

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

  bookingId!: string;
  booking!: Booking.IBookingCached;

  token: FormControl = new FormControl(null, [Validators.required]);
  validToGo: FormControl = new FormControl(null, [Validators.required]);

  constructor(private _router: Router, private _activeRoute: ActivatedRoute, private _userBookingService: BookingService, private _NotifyService: NotifyService) { }

  ngOnInit(): void {
    this.bookingId = this._activeRoute.snapshot.queryParams["id"];
    this._userBookingService.latestBooking.subscribe({
      next: (booking) => {
        this.booking = booking;
      }
    })
    if (this.bookingId !== this.booking.id) this._router.navigate(["/"])
  }

  createToken(stepper: any) {
    this.stripe
      .createToken(this.card.element)
      .subscribe((result) => {
        if (result.token) {
          this.token.patchValue(result.token.id);
          stepper.next();
        } else if (result.error) {
          this._NotifyService.Error(result.error.message as string)
        }
      });
  }

  confirmBooking(stepper: any) {
    this._userBookingService.payBooking(this.bookingId, { token: this.token.value}).subscribe({
      error: (err) => {
        this._NotifyService.Error(err.error.message)
      },
      complete: ()=>{
        this.validToGo.patchValue(true);
        stepper.next();
      }
    })
  }

}
