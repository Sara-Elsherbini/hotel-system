import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RoomsService } from '../../services/rooms.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss'],
})
export class AddEditRoomComponent implements OnInit {
  constructor(
    private _RoomsService: RoomsService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.roomId = _ActivatedRoute.snapshot.params['id'];
    if (this.roomId) {
      console.log(this.roomId);
      this.getRoomById(this.roomId);
    }
  }

  ngOnInit() {}
  imgSrc: any;
  files: File[] = [];
  roomId: number = 0;
  roomData: any;

  addRoomForm = new FormGroup({
    RoomNumber: new FormControl(null),
    price: new FormControl(null),
    capacity: new FormControl(null),
    discount: new FormControl(null),
    facilities: new FormControl(null),
    roomImage: new FormControl(null),
  });
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0];
  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  sendData(data: FormGroup) {
    let myData = new FormData();

    myData.append('RoomNumber', data.value.roomnumber);
    myData.append('price', data.value.price);
    myData.append('discount', data.value.discount);

    myData.append('capacity ', data.value.capacity);
    myData.append('recipeImage', this.imgSrc);
    myData.append('facilities', data.value.facilities);
    if (this.roomId) {
      this._RoomsService.editRoom(myData, this.roomId).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    } else {
      this._RoomsService.addRoom(myData).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    }
  }

  getRoomById(id: number) {
    this._RoomsService.getRoomById(id).subscribe({
      next: (res) => {
        this.roomData = res;

        console.log(this.roomData);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.addRoomForm.patchValue({
          RoomNumber: this.roomData.roomnumber,
          price: this.roomData.price,
          capacity: this.roomData.capacity,
          discount: this.roomData.discount,
          roomImage: this.roomData.imagePath,
          facilities: this.roomData.room.map((x: any) => x.id),
        });
      },
    });
  }
}
