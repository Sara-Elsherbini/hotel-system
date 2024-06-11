import { CommonModule, CurrencyPipe } from '@angular/common';
import { GuestRoutingModule } from './user-routing.module';
import { userComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ExplorComponent } from './components/explor/explor.component';
import { MatNativeDateModule } from '@angular/material/core';
import { currencyintyPipe } from './pipe/currency.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FavRoomsComponent } from './components/fav-rooms/fav-rooms.component';
import { MustLoginDialog } from './components/MustLoginDialog/MustLoginDialog';
import { LandingNavbarComponent } from './components/landing-navbar/landing-navbar.component';
import { DetailsComponent } from './components/details/details.component';
import { ReviewsComponent } from './components/details/reviews/reviews.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from './components/details/comments/comments.component';
import { NgModule } from '@angular/core';
import { BookingComponent } from './components/booking/booking.component';
import { NgxStripeModule } from 'ngx-stripe';
import { BookingdetailsComponent } from './components/booking/bookingdetails/bookingdetails.component';

@NgModule({
  declarations: [
    userComponent,
    HomeComponent,
    ExplorComponent,
    FavRoomsComponent,
    MustLoginDialog,
    currencyintyPipe,
    LandingNavbarComponent,
    DetailsComponent,
    ReviewsComponent,
    CommentsComponent,
    BookingComponent,
    BookingdetailsComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule,
    MatNativeDateModule,
    MatDatepickerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'),
  ]
})
export class UserModule { }
