import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'src/app/common';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../../models/user';

@Component({
  selector: 'app-fav-rooms',
  templateUrl: './fav-rooms.component.html',
  styleUrls: ['./fav-rooms.component.scss']
})
export class FavRoomsComponent implements OnInit {
favroomList:UserModel.FavoriteRoom[]=[];
deleteFav:any
  constructor(private _UserService:UserService,private _NotifyService:NotifyService) { }


  ngOnInit() {
  this.getFavRooms();
  }

  getFavRooms() {
    this._UserService.getAllFavRooms().subscribe({
      next: (res) => {
        this.favroomList=res.data.favoriteRooms;
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
        this.deleteFav = res;

      }, error: (err: HttpErrorResponse) => {

      }, complete: () => {
        this.getFavRooms();
      }
    })
  }
}
