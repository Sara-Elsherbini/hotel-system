import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from './models/shared-card';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss']
})
export class SharedCardComponent implements OnInit {
  pageSize = 10;
  pageIndex = 1;
  @Input() data:any;
  @Input() ICard:Card.ICard[]=[]
  @Input() totalCount:number=0;
  @Input() operators!: Card.IOperations[];
   @Output() operationData = new EventEmitter()
  @Output() pageSizeChanged = new EventEmitter<number>();
  @Output() pageIndexChanged = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  selectedOp(operator: any): (row: any)=>void{
    return this.defaultAction(operator.title);
  }

  defaultAction(opInfo: string){
    return (row: any)=>{
      this.operationData.emit({ row: row, opInfo: opInfo });
    }
  }
  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.pageSizeChanged.emit(this.pageSize);
    this.pageIndexChanged.emit(this.pageIndex);
  }
}
