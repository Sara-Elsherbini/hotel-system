import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: '',redirectTo:'auth',pathMatch:'full'},
{ path: 'auth', loadChildren: () => import('./Features/auth/auth.module').then(m => m.AuthModule) },
{ path: 'dashboard', loadChildren: () => import('./Features/dashboard/dashboard.module').then(m => m.DashboardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
