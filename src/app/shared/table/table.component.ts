import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Table from './model/table.model';
import { TableOperator } from './model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() table!: Table;
  @Output() operationData = new EventEmitter()
  BaseUrl = "https://upskilling-egypt.com:3006/";

  constructor() {
  }


  getValue(row: any, col: any) {
    let value = row[col.field];
    if(col?.valueGetter) 
      value = col?.valueGetter(row);

    if(col?.valueFormatter)
      value = col?.valueFormatter(row[col.field]);

    return value
  }

  selectedOp(operator: TableOperator): (row: any)=>void{
    if(operator.action)
      return operator.action;

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

}
