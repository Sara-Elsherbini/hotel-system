import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './components/table/table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { NoDataComponent } from './components/no-data/no-data.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import {DialogModule} from '@angular/cdk/dialog';
import {FormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
@NgModule({

  declarations: [
    SidebarComponent,
    NavbarComponent,
    TableComponent,
    NoDataComponent,
    SharedHeaderComponent,
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
    MatSelectModule,
    MatPaginatorModule,
    MatMenuModule,
    DialogModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule
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
    NavbarComponent,
    RouterModule,
    MatMenuModule,
    MatSelectModule,
    MatPaginatorModule,
    SharedHeaderComponent,
    DialogModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule
  ],
})
export class SharedModule { }
