import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';
import { RoutePaths } from 'src/app/common/setting/RoutePath';

const routes: Routes = [{ path: '', component: RoomsComponent },
{path:RoutePaths.Admin.Room.add, component: AddEditRoomComponent },
{ path:RoutePaths.Admin.Room.edit, component: AddEditRoomComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
