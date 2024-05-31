import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FacilitiesComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    SharedModule
  ]
})
export class FacilitiesModule { }
