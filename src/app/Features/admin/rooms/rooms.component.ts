import { Component } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import {Rooms} from './models/rooms'
import { HttpErrorResponse } from '@angular/common/http';
import { NotifyService } from 'src/app/common';
import { Table } from 'src/app/shared/components/table/model/Table.namespace';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/common/setting/RoutePath';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  roomList:Rooms.IRoomsList={
    rooms:[],
    totalCount: 0,
  };
  data:Rooms.IRoom[]|any=[];
  noData:boolean=false
  pageNum: number = 1;
  pageSizing: number = 10;
  columns: Table.IColumn[] = [
    {
      header: "Room number",
      property: "roomNumber"
    },
    {
      header: "Image",
      property: "image",
      isImage: true
    },
    {
      header: "Price",
      property: "price"
    },
    {
      header: "Discount",
      property: "discount"
    },
    {
      header: "Capacity",
      property: "capacity"
    },
    {
      header: "Facilities",
      property: "facilities"
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
constructor(private _RoomsService:RoomsService,private _NotifyService:NotifyService, private _Router:Router ){

}
ngOnInit(): void {
  this.geAllRooms()

}
  geAllRooms(){
    let param={
      page:this.pageNum,
      size:this.pageSizing
    }
    this._RoomsService.getAllRooms(param).subscribe({
      next:(res:Rooms.IRoomsRes)=>{

        this.roomList=res.data;
        let tableData = res.data.rooms.map((room: Rooms.IRoom) => {
          const facilities = room.facilities.map((fac: Rooms.IFacility) => fac.name);
          const facilitiesString = facilities.join(", ");
          return {
            ...room,
            image: room.images[0],
            facilities: facilitiesString,
          };
        });
        this.data=tableData;
        !this.data.length?this.noData=true:this.noData=false;
      },
      error:(err:HttpErrorResponse)=>{
        this._NotifyService.ServerError(err.error.message)
      },
      complete:()=>{
      }

    })
  }



  runOp(data: any) {
    console.log(data);
    let id=data.row._id
    console.log("id",id);

    if (data.opInfo == 'Edit') {
      this._Router.navigateByUrl(`dashboard/rooms/edit/${id}`);
    }
    if (data.opInfo == 'View') {
      // this.openAddEditFacility('View', data.row);
    }
  }

  pageNumber(event: number) {
    this.pageNum = event;
    this.geAllRooms();
  }

  pageSize(event: number) {
    this.pageSizing = event;
    this.geAllRooms();
  }
}
