import { Component, OnInit } from '@angular/core';
import { Rooms } from 'src/app/Features/admin/rooms/models/rooms';
import { UserService } from '../../services/user.service';
import { ExploreUser } from '../../models/user';

@Component({
  selector: 'app-explor',
  templateUrl: './explor.component.html',
  styleUrls: ['./explor.component.scss']
})
export class ExplorComponent implements OnInit {
  exploreList: Rooms.IRoom[] | any = [];
  data: Rooms.IRoom[] | any = [];

  constructor(private _User: UserService) {
    this.getAllRooms()

  }
  pageNum: number = 1;
  pageSizing: number = 10;
  startDate: any = '2023-01-20';
  endDate: any = '2023-01-30';

  roomsList: Rooms.IRoom[] | any = [];
  roomList: Rooms.IRoomsList = {
    rooms: [],
    totalCount: 0,
  };
  ngOnInit() {
  }
  getAllRooms() {
    let Pram = {
      page: this.pageNum,
      size: this.pageSizing,
      // startDate: this.startDate,
      // endDate: this.endDate
    }
    this._User.getAllExplorRooms(Pram).subscribe({
      next: (res) => {
        this.exploreList = res.data;
        console.log(this.exploreList);
        // this.roomList = res.data;
        let tableData = res.data.rooms.map((room: ExploreUser.IExploreRoom) => {
          return {
            ...room,
            image: room.images[0],
            facilities: room.facilities[0]
          }
        });
        this.data = tableData;
        console.log(this.data);


      }
    })
  }
}
