import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { AddEditRoomComponent } from './components/add-edit-room/add-edit-room.component';
import { RoutePaths } from 'src/app/common/setting/RoutePath';
import { ViewRoomComponent } from './components/view-room/view-room.component';

const routes: Routes = [{ path: '', component: RoomsComponent },
{path:RoutePaths.Admin.Room.add, component: AddEditRoomComponent },
{ path:'edit/:id', component: AddEditRoomComponent },
{ path:'view', component: ViewRoomComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
