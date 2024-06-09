import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { GuestRoutingModule } from './user-routing.module';
import { userComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ExplorComponent } from './components/explor/explor.component';
import { MatNativeDateModule } from '@angular/material/core';
import { currencyintyPipe } from './pipe/currency.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FavPopComponent } from './components/fav-pop/fav-pop.component';
import { LandingNavbarComponent } from './components/landing-navbar/landing-navbar.component';
import { DetailsComponent } from './components/details/details.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    userComponent,
    HomeComponent,
    ExplorComponent,
    favPopUp
    FavPopComponent,

    currencyintyPipe,
    LandingNavbarComponent,
    DetailsComponent,
    ReviewsComponent


  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule


  ]
})
export class UserModule { }
