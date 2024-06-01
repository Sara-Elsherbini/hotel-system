import { AddEditFacilitiesDialog } from './components/add-edit-facilities/add-edit-facilitiesDialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    FacilitiesComponent,
    AddEditFacilitiesDialog
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    SharedModule,
    MatDialogModule
  ]
})
export class FacilitiesModule { }
