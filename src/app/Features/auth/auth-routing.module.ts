import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { RestPassComponent } from './components/rest-pass/rest-pass.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';

const routes: Routes = [{ path: '', component: AuthComponent },
                         {path:'register',component:RegisterComponent},
                         {path:'reset-pass',component:RestPassComponent},
                         {path:'forget-pass',component:ForgetPassComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
