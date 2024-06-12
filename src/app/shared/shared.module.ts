import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './components/table/table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { DeleteComponent } from './components/delete/delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NoDataComponent } from './components/no-data/no-data.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import { DialogModule } from '@angular/cdk/dialog';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { NavbarDropdownComponent } from './components/navbar-dropdown/navbar-dropdown.component';
import { ViewvalueComponent } from './components/viewvalue/viewvalue.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SharedCardComponent } from './components/shared-card/shared-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer/footer.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ThemeComponent } from './components/theme/theme.component';

@NgModule({

  declarations: [
    SidebarComponent,
    TableComponent,
    DeleteComponent,
    NoDataComponent,
    SharedHeaderComponent,
    ProfileComponent,
    NavbarDropdownComponent,
    ViewvalueComponent,
    SharedCardComponent,
    ChangePasswordComponent,
    FooterComponent,
    ThemeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    MatPaginatorModule,
    MatMenuModule,
    DialogModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    TranslateModule,
    MatStepperModule,

  ],
  exports: [
    NoDataComponent,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    TableComponent,
    SidebarComponent,
    RouterModule,
    MatMenuModule,
    DeleteComponent,
    MatSelectModule,
    MatPaginatorModule,
    SharedHeaderComponent,
    DialogModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    NavbarDropdownComponent,
    SharedCardComponent,
    MatDividerModule,
    ChangePasswordComponent,
    ViewvalueComponent,
    TranslateModule,
    FooterComponent,
    MatStepperModule,
    ThemeComponent

  ],
})
export class SharedModule { }
