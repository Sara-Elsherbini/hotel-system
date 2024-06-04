import { Component } from '@angular/core';
import { FacilitiesService } from '../facilities/services/facilities.service';
import { BookingService } from '../booking/services/booking.service';
import { AdsService } from '../ads/services/ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 constructor(private _BookingService:BookingService,
             private _FacilitiesService:FacilitiesService,
             private _AdsService:AdsService,
              ){

 }
}
