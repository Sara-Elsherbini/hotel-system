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
import { NoDataComponent } from './components/no-data/no-data.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({

  declarations: [
    SidebarComponent,
    NavbarComponent,
    TableComponent,
    NoDataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatPaginatorModule,
    MatMenuModule
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
    MatPaginatorModule
  ],
})
export class SharedModule { }
