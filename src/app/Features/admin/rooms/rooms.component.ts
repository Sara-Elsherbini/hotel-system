import { Component } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import {Rooms} from './models/rooms'
import { HttpErrorResponse } from '@angular/common/http';
import { NotifyService } from 'src/app/common';
import { Table } from 'src/app/shared/components/table/model/Table.namespace';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  roomList!:Rooms.IRoomsList;
  data:Rooms.IRoom[]=[];
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
constructor(private _RoomsService:RoomsService,private _NotifyService:NotifyService){

}
ngOnInit(): void {
  this.geAllRooms()

}
  geAllRooms(){
    let param={
      page:1,
      size:10
    }
    this._RoomsService.getAllRooms(param).subscribe({
      next:(res:Rooms.IRoomsRes)=>{
        this.roomList=res.data;
        let tableData = res.data.rooms.map((room: any)=>{
          let facilitiesString = "";
          room.facilities.forEach((fac: { [x: string]: string; }) => {
            facilitiesString += fac["name"] + ", ";
          });
          return {
            ...room,
            image: room.images[0],
            facilities: facilitiesString
          }
        });
        this.data=tableData;
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
