import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'src/app/common';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../../models/user';
import { PageEvent } from '@angular/material/paginator';
import { RoutePaths } from 'src/app/common/setting/RoutePath';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav-rooms',
  templateUrl: './fav-rooms.component.html',
  styleUrls: ['./fav-rooms.component.scss']
})
export class FavRoomsComponent implements OnInit {
favroomList:UserModel.IFavListRooms={
  favoriteRooms:[],
  totalCount: 0
}
pageSizeOptions = [5,10, 25];
pageSize = 10;
pageIndex = 1;
  constructor(private _UserService:UserService,
    private _Router:Router,
    private _NotifyService:NotifyService) { }


  ngOnInit() {
  this.getFavRooms();
  }

  getFavRooms() {
    this._UserService.getAllFavRooms().subscribe({
      next: (res) => {
        this.favroomList=res.data;
     console.log(res);
      },
      error: (err:HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message)
      }
    })
  }


  DeleteFavRoom(roomId: string) {
    this._UserService.deleteFavRoom(roomId).subscribe({
      next: (res) => {

      },
      error: (err:HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message)
      },
       complete: () => {
        this.getFavRooms();
      }
    })
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex + 1;
    this.getFavRooms();
  }
  checkIslogged(id:string){}
  view(id:string){
    let url =RoutePaths.User.roomDetails;
    url=url.replace(':id',id);

  this._Router.navigateByUrl(url);
  }
}
