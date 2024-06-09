import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { GuestRoutingModule } from './user-routing.module';
import { userComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ExplorComponent } from './components/explor/explor.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { currencyintyPipe } from './pipe/currency.pipe';
@NgModule({
  declarations: [
    userComponent,
    HomeComponent,
    ExplorComponent,
    currencyintyPipe

  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule,
    MatNativeDateModule,
    MatDatepickerModule,


  ]
})
export class UserModule { }
