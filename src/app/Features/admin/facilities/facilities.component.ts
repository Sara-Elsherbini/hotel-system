import { Component } from '@angular/core';
import { FacilitiesService } from './services/facilities.service';
import {Facilities} from './models/facilites';
import { NotifyService } from 'src/app/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Table } from 'src/app/shared/components/table/model/Table.namespace';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent {
  FacilitiesList!:Facilities.IFacilitiesList|any;
  data:Facilities.IFacility[]=[]
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
      isDate:true
    },
    {
      header: "Updated at",
      property: "updatedAt",
      isDate:true
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
  constructor(private _FacilitiesService:FacilitiesService,
    private _NotifyService:NotifyService
  ){

  }
 ngOnInit(): void {
 this.getFacilities()

 }
  getFacilities(){
    let param={
      page:1,
      size:10
    }
    this._FacilitiesService.getAllFacilities(param).subscribe({
      next:(res:Facilities.IFacilitiesRes)=>{
        this.FacilitiesList=res.data;
        this.data=res.data.facilities;
      },
      error:(err:HttpErrorResponse)=>{
        this._NotifyService.ServerError(err.error.message)
      },
      complete:()=>{
      }

    })
  }
  runOp(data: any){
    console.log(data);
  }
}
