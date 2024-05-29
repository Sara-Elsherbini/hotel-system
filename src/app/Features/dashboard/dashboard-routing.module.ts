import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from 'src/app/core/gurds/admin.guard';

const routes: Routes = [{ path: '', component: DashboardComponent },
{ path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),canActivate:[adminGuard] },
{ path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
