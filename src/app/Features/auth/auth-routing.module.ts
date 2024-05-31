import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { RestPassComponent } from './components/rest-pass/rest-pass.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { RoutePaths } from 'src/app/common/setting/RoutePath';
RoutePaths
const routes: Routes = [{ path: '', component: AuthComponent },
                         {path:RoutePaths.Auth.Register,component:RegisterComponent},
                         {path:RoutePaths.Auth.ResetPass,component:RestPassComponent},
                         {path:RoutePaths.Auth.forgetPass,component:ForgetPassComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
