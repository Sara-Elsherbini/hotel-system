import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from './common/setting/RoutePath';
import { adminGuard } from './core/gurds/admin.guard';

const routes: Routes = [
{ path: '', loadChildren: () => import('./Features/user/user/user.module').then(m => m.UserModule) },
{ path: 'auth', loadChildren: () => import('./Features/auth/auth.module').then(m => m.AuthModule) },
{ path: RoutePaths.Dashboard.Dashboard, loadChildren: () => import('./Features/admin/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[adminGuard] },

// { path: 'users', loadChildren: () => import('./Features/admin/users/users/users.module').then(m => m.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
