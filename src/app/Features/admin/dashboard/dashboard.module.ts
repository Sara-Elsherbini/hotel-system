import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../auth/services/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeService } from 'src/app/shared/services/theme.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [AuthService]
})
export class DashboardModule {
  constructor(public _ThemeService: ThemeService) { }
}
