import { Component, Inject } from '@angular/core';
import { FacilitiesService } from './services/facilities.service';
import { Facilities } from './models/facilites';
import { NotifyService } from 'src/app/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Table } from 'src/app/shared/components/table/model/Table.namespace';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent {
  FacilitiesList!: Facilities.IFacilitiesList | any;
  data: Facilities.IFacility[] = []
  columns: Table.IColumn[] = [
    {
      header: "Name",
      property: "name"
    },
    {
      header: "Created By",
      property: "createdBy",

    },
    {
      header: "Created at",
      property: "createdAt",
      isDate: true
    },
    {
      header: "Updated at",
      property: "updatedAt",
      isDate: true
    }
  ]
  operators: Table.IOperators[] = [
    {
      icon: "edit_square",
      title: "Edit"
    },
    {
      icon: "visibility",
      title: "View"
    },
    {
      icon: "delete",
      title: "Delete"
    }
  ]
  constructor(private _FacilitiesService: FacilitiesService,
    private _NotifyService: NotifyService,
    private dialog: MatDialog
  ) {

  }
  ngOnInit(): void {
    this.getFacilities()

  }
  getFacilities() {
    let param = {
      page: 1,
      size: 10
    }
    this._FacilitiesService.getAllFacilities(param).subscribe({
      next: (res: Facilities.IFacilitiesRes) => {
        this.FacilitiesList = res.data;
        this.data = res.data.facilities;
      },
      error: (err: HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message)
      },
      complete: () => {
      }

    })
  }

  runOp(data: any) {
    console.log(data);

    if (data.opInfo === 'Delete') {
      this.openDeleteDialog(data.row._id)
    }
  }

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteFacilities(id)
      }
    });
  }

  deleteFacilities(id: number) {
    this._FacilitiesService.deletefacilitie(id).subscribe({
      next: (res) => { },
      error: (error: HttpErrorResponse) => {
        this._NotifyService.ServerError(error.error.message)

      },
      complete: () => {
        this._NotifyService.Success(`Facilitie Deleted Successfuly`);
        this.getFacilities()
      }
    })
  }
}





