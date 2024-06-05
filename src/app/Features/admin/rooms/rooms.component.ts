import { Card } from 'src/app/shared/components/shared-card/models/shared-card';
import { Component, HostListener } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { Rooms } from './models/rooms'
import { HttpErrorResponse } from '@angular/common/http';
import { NotifyService } from 'src/app/common';
import { Table } from 'src/app/shared/components/table/model/Table';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/common/setting/RoutePath';
import { ViewRoomComponent } from './components/view-room/view-room.component';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  roomList: Rooms.IRoomsList = {
    rooms: [],
    totalCount: 0,
  };

  // data: Rooms.IRoom[] = [];
  // noData: boolean = false
  data: Rooms.IRoom[] | any = [];
  noData: boolean = false
  pageNum: number = 1;
  pageSizing: number = 10;
  isGrid :boolean= false;
  disableTableButton  :boolean= false;
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
  cards: Card.ICard[] = [

    {
      key: "Image",
      property: "image",
      isImage: true
    },
    {
      key: "Room number",
      property: "roomNumber"
    },
    {
      key: "Price",
      property: "price"
    },
    {
      key: "Discount",
      property: "discount"
    },
    {
      key: "Capacity",
      property: "capacity"
    },
    {
      key: "Facilities",
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

  constructor(private _RoomsService: RoomsService, private _NotifyService: NotifyService, private _Router: Router, private _dialog: MatDialog) {


  }
  ngOnInit(): void {
    this.geAllRooms()

  }
  geAllRooms() {
    let param = {
      page: this.pageNum,
      size: this.pageSizing
    }
    this._RoomsService.getAllRooms(param).subscribe({

      next:(res:Rooms.IRoomsRes)=>{
        this.data=res.data.rooms;
        console.log(this.data);
        this.roomList=res.data;
        console.log(this.roomList);
        // let tableData = res.data.rooms.map((room: any)=>{
        //   let facilitiesString = "";
        //   room.facilities.forEach((fac: { [x: string]: string; }) => {
        //     facilitiesString += fac["name"] + ", ";
        //   });

        let tableData = res.data.rooms.map((room: any) => {
          let facilitiesString = "";
          room.facilities.forEach((fac: { [x: string]: string; }) => {
            facilitiesString += fac["name"] + ", ";
          });

          this.roomList = res.data;
          let tableData = res.data.rooms.map((room: Rooms.IRoom) => {
            const facilities = room.facilities.map((fac: Rooms.IFacility) => fac.name);
            const facilitiesString = facilities.join(", ");

            return {
              ...room,
              image: room.images[0],
              facilities: facilitiesString,
            };
          });
          this.data = tableData;
          !this.data.length ? this.noData = true : this.noData = false;
        })

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
    let id = data.row._id
    console.log("id", id);

    if (data.opInfo == 'Edit') {
      this._Router.navigateByUrl(`dashboard/rooms/edit/${id}`);
    }
    if (data.opInfo == 'View') {
    this.openViewUser(data);
    }
    if (data.opInfo === 'Delete') {
      this.openDeleteRoom(data.row._id);
    }
  }





  openViewUser(data:any) {
    // row ? (this.FacilityId = row._id) : null;
    const dialogRef = this._dialog.open(ViewRoomComponent, {
      data: data,
      minWidth: "50%",
    });
    console.log(data.row)


}
 pageNumber(event: number) {
    this.pageNum = event;
    this.geAllRooms();
  }

  pageSize(event: number) {
    this.pageSizing = event;
    this.geAllRooms();
  }


  openDeleteRoom(id: number): void {

    const dialogRef = this._dialog.open(DeleteComponent, {
      data: { id: id },
      width: '30%',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteRoom(id)
        // console.log(result);
      }
    })
  }

  deleteRoom(id: number) {
    this._RoomsService.deleteRoom(id).subscribe({
      next: (res) => { },
      error: (error: HttpErrorResponse) => {
        this._NotifyService.ServerError(error.error.message)

      },
      complete: () => {
        this._NotifyService.Success(`Room Deleted Successfuly`);
        this.geAllRooms()
      }
    })
  }

  @HostListener('window:resize',['$event'])
  onResize(event:Event){
  this.checkBodyWidth()
  }
  private checkBodyWidth() {
    if (window.innerWidth <= 991) {
      this.isGrid = true;
      this.disableTableButton = true;
    } else {
      this.disableTableButton = false;
    }
  }
}




