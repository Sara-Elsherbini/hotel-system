import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HandleCellInnerValueDirective } from './directives/handle-cell-inner-value.directive';
 
@NgModule({
  declarations: [
    TableComponent,
    HandleCellInnerValueDirective
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ], 
  exports: [
    TableComponent,
  ]
})
export class TableModule { }
