import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { FacilitiesService } from './services/facilities.service';
import { Facilities } from './models/facilites';
import { NotifyService } from 'src/app/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Table } from 'src/app/shared/components/table/model/Table.namespace';
import { AddEditFacilitiesDialog } from './components/add-edit-facilities/add-edit-facilitiesDialog';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent {
  FacilitiesList: Facilities.IFacilitiesList | any;
  FacilityId: string = '';
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
    private _NotifyService: NotifyService,
    public _dialog: MatDialog
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
        const tableData = res.data.facilities.map((item: any) => ({
          ...item,
          createdBy: item.createdBy.userName,
        }));
        this.data = tableData;
        !this.data.length ? (this.noData = true) : (this.noData = false);
      },
      error: (err: HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message);
      },
      complete: () => {},
    });
  }
  runOp(data: any) {
    console.log(data);
    if (data.opInfo == 'Edit') {
      this.openAddEditFacility('Edit', data.row);
      console.log('1', data.row._id);
    }
    if (data.opInfo == 'View') {
      this.openAddEditFacility('View', data.row);
    }
  }
  openAddEditFacility(mode: string, row?: Facilities.IFacility) {
    row ? (this.FacilityId = row._id) : null;
    const dialogRef = this._dialog.open(AddEditFacilitiesDialog, {
      data: { row, mode },
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('result', result);
      if (result) {
        if (!this.FacilityId) {
          this.addFacility(result);
        } else this.editFacility(result);
      }
    });
  }

  addFacility(CategoryName: string) {
    this._FacilitiesService.onaddFacility(CategoryName).subscribe({
      next: (res) => {
        console.log('res', res);
      },
      error: (errRes) => {
        const errMes = errRes.error.message;
        this._NotifyService.ServerError(errMes);
      },
      complete: () => {
        this._NotifyService.Success('Data is Sent Successfully');

        this.getFacilities();
      },
    });
  }
  editFacility(CategoryName: string) {
    console.log('this.FacilityId', this.FacilityId);

    this._FacilitiesService
      .onEditFacility(this.FacilityId, CategoryName)
      .subscribe({
        next: (res) => {
          console.log('res', res);
        },
        error: (errRes) => {
          const errMes = errRes.error.message;
          this._NotifyService.ServerError(errMes);
        },
        complete: () => {
          this._NotifyService.Success('Data is Sent Successfully');
          this.getFacilities();
        },
      });
  }
}
