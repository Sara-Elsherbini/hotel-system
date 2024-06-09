import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userComponent } from './user.component';
import { HomeComponent } from './components/home/home.component';
import { RoutePaths } from 'src/app/common/setting/RoutePath';
import { ExplorComponent } from './components/explor/explor.component';
import { FavRoomsComponent } from './components/fav-rooms/fav-rooms.component';


const routes: Routes = [{ path: '', component: userComponent ,children:[
  {path:'',redirectTo:RoutePaths.User.home,pathMatch: 'full'},
  {path:RoutePaths.User.home,component:HomeComponent},
  {path:RoutePaths.User.explore,component:ExplorComponent},
  {path:RoutePaths.User.favorites,component:FavRoomsComponent},

  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
