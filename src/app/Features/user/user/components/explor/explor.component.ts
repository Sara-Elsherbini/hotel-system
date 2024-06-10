import { Component, OnInit } from '@angular/core';
import { Rooms } from 'src/app/Features/admin/rooms/models/rooms';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifyService } from 'src/app/common';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
interface IParame{
capacity:number,
endDate:Date|string,
startDate:Date|string
}
@Component({
  selector: 'app-explor',
  templateUrl: './explor.component.html',
  styleUrls: ['./explor.component.scss']
})
export class ExplorComponent implements OnInit {
  exploreList: Rooms.IRoomsList={
    rooms: [],
    totalCount: 0,
  }
  data: Rooms.IRoom[] | any = [];
  pageSizeOptions = [5,10, 25];
  pageSize = 10;
  pageIndex = 1;
  params:IParame={
    capacity:0,
    startDate:'',
    endDate:''
  }
  paramRequired:any
  constructor(private _UserService: UserService,private _NotifyService:NotifyService,
    private _ActivatedRoute:ActivatedRoute
  ) {

  }

  roomsList!: Rooms.IRoomsList
  ngOnInit() {
    this._ActivatedRoute.queryParams.subscribe((params:any) => {
      this.params=params
    });
    this.getExplorRoom();
  }

  getExplorRoom() {
    if (this.params && Object.keys(this.params).length !== 0) {
      console.log(this.params);


      this.paramRequired = {
        page: this.pageIndex,
        size: this.pageSize,
        startDate:this.params.startDate,
        endDate:this.params.endDate,
        capacity:this.params.capacity
      }
    }else{
      this.paramRequired={
        page: this.pageIndex,
        size: this.pageSize,
      }

    }




    this._UserService.getAllRooms(this.paramRequired).subscribe({
      next: (res:Rooms.IRoomsRes) => {
        this.roomsList=res.data
        let tableData = res.data.rooms.map((room: Rooms.IRoom) => {
          return {
            ...room,
            image: room.images[0],
            facilities: room.facilities[0]
          }
        });
        this.data = tableData;
      },
      error: (err:HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message)
      }
    })
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex + 1;
    this.getExplorRoom();
  }
}
