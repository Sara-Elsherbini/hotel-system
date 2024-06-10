import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifyService } from 'src/app/common';
import { UserService } from '../../services/user.service';
import { Rooms } from 'src/app/Features/admin/rooms/models/rooms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  roomId!: string;
  roomData: Rooms.IRoom = {
    _id: '',
    roomNumber: '',
    price: 0,
    capacity: 0,
    discount: 0,
    facilities: [],
    images: [],
    createdBy: {
      _id: '',
      userName: ''
    },
    createdAt: new Date(),
    updatedAt: new Date()
  };
  dummyImage: string = "assets/img/room-placeholder.png";

  constructor(private _ActivatedRoute: ActivatedRoute, private _NotifyService: NotifyService, private _GuestService: UserService) { }

  ngOnInit(): void {
    this.roomId = this._ActivatedRoute.snapshot.params['id'];
    this.getRoomById(this.roomId);
  }

  getRoomById(id: string) {
    this._GuestService.getRoomById(id).subscribe({
      next: (res: Rooms.IRoomdDetails) => {
        this.roomData = res.data.room;
      },
      error: (err) => {
        this._NotifyService.Error(err.error.message)
      }
    });
  }

}
