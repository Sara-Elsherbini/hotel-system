import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from './common/setting/RoutePath';
import { adminGuard } from './core/gurds/admin.guard';

const routes: Routes = [
{path: '',redirectTo:'auth',pathMatch:'full'},
{ path: 'auth', loadChildren: () => import('./Features/auth/auth.module').then(m => m.AuthModule) },
{ path: RoutePaths.Dashboard.Dashboard, loadChildren: () => import('./Features/admin/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[adminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
