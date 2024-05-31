import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RoomsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
