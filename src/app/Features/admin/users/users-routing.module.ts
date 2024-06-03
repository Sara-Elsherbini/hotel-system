import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { RoutePaths } from 'src/app/common/setting/RoutePath';

const routes: Routes = [{ path: '', component: UsersComponent },
                        { path: RoutePaths.Admin.Users.ViewUsers, component: ViewUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
