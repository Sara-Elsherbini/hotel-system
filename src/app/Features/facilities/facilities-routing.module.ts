import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitiesComponent } from './facilities.component';
import { FacilitiesListComponent } from './components/facilitiesList/facilitiesList.component';

const routes: Routes = [{ path: '', component: FacilitiesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule { }
