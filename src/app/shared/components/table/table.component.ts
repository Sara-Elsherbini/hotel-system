import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Table } from './model/Table.namespace';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],

})
export class TableComponent {
  pageSize = 5;
  pageIndex = 1;
  @Input() columns!: Table.IColumn[];
  @Input() data!: any[];
  @Input() operators!: Table.IOperators[];
  @Input() totalCount:number=0;
  @Output() operationData = new EventEmitter()
  @Output() pageSizeChanged = new EventEmitter<number>();
  @Output() pageIndexChanged = new EventEmitter<number>();
  constructor() {
  }

  selectedOp(operator: any): (row: any)=>void{
    return this.defaultAction(operator.title);
  }

  defaultAction(opInfo: string){
    return (row: any)=>{
      this.operationData.emit({ row: row, opInfo: opInfo });
    }
  }

  getLength(obj: object) {
    return Object.keys(obj).length;
  }

  isDate(value: any) {
    return !Number.isNaN(Date.parse(value));
  }
  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.pageSizeChanged.emit(this.pageSize);
    this.pageIndexChanged.emit(this.pageIndex);
  }

}
