import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{path: '',redirectTo:'facilities',pathMatch:'full'},
{ path: 'facilities', loadChildren: () => import('../../Features/facilities/facilities.module').then(m => m.FacilitiesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
