import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
