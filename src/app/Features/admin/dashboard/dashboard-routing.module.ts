import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from 'src/app/core/gurds/admin.guard';
import { RoutePaths } from 'src/app/common/setting/RoutePath';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [{ path: '', component: DashboardComponent,children:[
  {path:'',redirectTo:RoutePaths.Admin.Home.HomeComponent, pathMatch:'full'},
  { path: RoutePaths.Admin.Facilities.FacilitiesList,
    loadChildren: () => import('../facilities/facilities.module').then(m => m.FacilitiesModule) },
    { path: RoutePaths.Admin.Home.HomeComponent, loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
