import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';


@NgModule({
  declarations: [
    FacilitiesComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule
  ]
})
export class FacilitiesModule { }
