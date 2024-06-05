import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ViewUserDialogComponent } from './components/view-user-dialog/view-user-dialog.component';


@NgModule({
  declarations: [
    UsersComponent,
    ViewUserDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,SharedModule
  ]
})
export class UsersModule { }
