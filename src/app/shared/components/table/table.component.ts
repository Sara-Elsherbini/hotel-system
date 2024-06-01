import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Table } from './model/Table.namespace';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  
})
export class TableComponent {

  @Input() columns!: Table.IColumn[];
  @Input() data!: any[];
  @Input() operators!: Table.IOperators[];
  @Output() operationData = new EventEmitter()

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

}
