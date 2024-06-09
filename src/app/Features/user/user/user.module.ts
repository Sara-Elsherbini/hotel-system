import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestRoutingModule } from './user-routing.module';
import { userComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ExplorComponent } from './components/explor/explor.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LandingNavbarComponent } from './components/landing-navbar/landing-navbar.component';
import { DetailsComponent } from './components/details/details.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

@NgModule({
  declarations: [
    userComponent,
    HomeComponent,
    ExplorComponent,
    LandingNavbarComponent,
    DetailsComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class UserModule { }
