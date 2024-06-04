import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ViewUserDialogComponent } from './components/view-user-dialog/view-user-dialog.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NgxDropzoneModule } from 'ngx-dropzone'


@NgModule({
  declarations: [
    UsersComponent,
    ViewUserDialogComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    NgxDropzoneModule
    
  ]
})
export class UsersModule { }
