import { Component } from '@angular/core';
import { FacilitiesService } from './services/facilities.service';
import { Facilities } from './models/facilites';
import { NotifyService } from 'src/app/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Table } from 'src/app/shared/components/table/model/Table.namespace';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent {
  FacilitiesList: Facilities.IFacilitiesList | any;
  pageNum: number = 1;
  pageSizing: number = 5;
  data: Facilities.IFacility[] = [];
  noData: Boolean = false;
  columns: Table.IColumn[] = [
    {
      header: 'Name',
      property: 'name',
    },
    {
      header: 'Created By',
      property: 'createdBy',
    },
    {
      header: 'Created at',
      property: 'createdAt',
      isDate: true,
    },
    {
      header: 'Updated at',
      property: 'updatedAt',
      isDate: true,
    },
  ];
  operators: Table.IOperators[] = [
    {
      icon: 'edit_square',
      title: 'Edit',
    },
    {
      icon: 'visibility',
      title: 'View',
    },
    {
      icon: 'delete',
      title: 'Delete',
    },
  ];
  constructor(
    private _FacilitiesService: FacilitiesService,
    private _NotifyService: NotifyService
  ) {}
  ngOnInit(): void {
    this.getFacilities();
  }

  pageNumber(event: number) {
    this.pageNum = event;
    this.getFacilities();
  }

  pageSize(event: number) {
    this.pageSizing = event;
    this.getFacilities();
  }
  getFacilities() {
    let param = {
      page: this.pageNum,
      size: this.pageSizing,
    };
    this._FacilitiesService.getAllFacilities(param).subscribe({
      next: (res: Facilities.IFacilitiesRes) => {
        this.FacilitiesList = res.data;
        const tableData = res.data.facilities.map((item:any)=> ({
          ...item,
          createdBy: item.createdBy.userName
        }));
        this.data=tableData;
        !this.data.length?this.noData=true:this.noData=false;
      },
      error: (err: HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message);
      },
      complete: () => {},
    });
  }
  runOp(data: any) {
    console.log(data);
  }
}
