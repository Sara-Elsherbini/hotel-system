import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from 'src/app/core/gurds/admin.guard';
import { RoutePaths } from 'src/app/common/setting/RoutePath';

const routes: Routes = [{ path: '', component: DashboardComponent,children:[
  { path: RoutePaths.Admin.Facilities.FacilitiesList,
    loadChildren: () => import('../facilities/facilities.module').then(m => m.FacilitiesModule) }
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
