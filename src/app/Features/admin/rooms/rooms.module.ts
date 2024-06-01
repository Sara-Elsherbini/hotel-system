import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    RoomsComponent,
    AddEditRoomComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoomsRoutingModule,NgxDropzoneModule
  ]
})
export class RoomsModule { }
