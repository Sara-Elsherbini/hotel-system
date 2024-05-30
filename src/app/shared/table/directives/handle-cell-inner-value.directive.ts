import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { iCellColRow } from '../model/iCellColRow.model';
import { TableColDef } from '../model';

@Directive({
  selector: '[appHandleCellInnerValue]'
})
export class HandleCellInnerValueDirective implements OnInit {

  @Input("cell") cell!: iCellColRow;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.valueGetter()
      .then(this.valueManipulator)
      .then(this.viewManiplator)
      .then((result: any) => {
        if(result.func) this.BuildView(result.func, result.value);
        else this.BindValue(result.value);
      })
  }

  valueGetter() {
    const { row, col } = this.cell;
    let value:any;

    // Value Getters
    if (col?.field) value = row[col.field];

    if (col?.valueGetter)
      value = col?.valueGetter(row);

    return new Promise<{value: any, col: TableColDef}>((resolve)=>{resolve({value, col})});
  }

  valueManipulator(obj: {value: any, col: TableColDef}) {
    let {value, col} = obj;

    if (col?.valueFormatter)
      value = col?.valueFormatter(value);

    return new Promise<{value: any, col: TableColDef}>((resolve)=>{resolve({value, col})});
  }

  viewManiplator(obj: {value: any, col: TableColDef}) {
    let {value, col} = obj;
    let func = col?.useTemplate ?? undefined;

    return new Promise((resolve)=>{resolve({func, value})});
  }

  BuildView(func: Function, value: any){
    let elem = func(value);

    this.elementRef.nativeElement.appendChild(elem);
  }

  BindValue(value: any){
    this.elementRef.nativeElement.innerText = `${value}`
  }

  

}


