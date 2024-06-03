import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RoutePaths } from 'src/app/common/setting/RoutePath';

const routes: Routes = [{
  path: '', component: DashboardComponent, children: [
    { path: '', redirectTo: RoutePaths.Admin.Home.HomeComponent, pathMatch: 'full' },
    {
      path: RoutePaths.Admin.Facilities.FacilitiesList,
      loadChildren: () => import('../facilities/facilities.module').then(m => m.FacilitiesModule)
    },
    { path: RoutePaths.Admin.Home.HomeComponent, loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
    { path: RoutePaths.Admin.Room.RoomList, loadChildren: () => import('../rooms/rooms.module').then(m => m.RoomsModule) },
    { path: RoutePaths.Admin.Ads.AdsList, loadChildren: () => import('../ads/ads.module').then(m => m.AdsModule) },
    { path: RoutePaths.Admin.Users.usersList, loadChildren: () => import('../users/users.module').then(m => m.UsersModule) },

  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
