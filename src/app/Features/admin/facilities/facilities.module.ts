import { AddEditFacilitiesDialog } from './components/add-edit-facilities/add-edit-facilitiesDialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FacilitiesComponent,
    AddEditFacilitiesDialog
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    SharedModule
  ],
  exports: [
    FacilitiesComponent

  ]
})
export class FacilitiesModule { }
