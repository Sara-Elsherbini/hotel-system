import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomsService } from '../../services/rooms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilitiesService } from '../../../facilities/services/facilities.service';
import { Facilities } from '../../../facilities/models/facilites';
import { NotifyService } from 'src/app/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Rooms } from '../../models/rooms';
@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss'],
})
export class AddEditRoomComponent implements OnInit {
  facilityList: Facilities.IFacility[] = [];
  imgSrc: any;
  files: any[] = [];
  roomId: number = 0;
  roomData!: Rooms.IRoomdDetails;
  constructor(
    private _RoomsService: RoomsService,
    private _ActivatedRoute: ActivatedRoute,
    private _FacilitiesService: FacilitiesService,
    private _NotifyService: NotifyService,
    private _Router: Router
  ) {}

  ngOnInit() {
    this.getFacilities();
    this.roomId = this._ActivatedRoute.snapshot.params['id'];
    if (this.roomId) {
      this.getRoomById(this.roomId);
    }
  }

  RoomForm = new FormGroup({
    roomNumber: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    capacity: new FormControl(0, [Validators.required]),
    discount: new FormControl(0, [Validators.required]),
    facilities: new FormControl([{}]),
    imgs: new FormControl(['']),
  });

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0]

  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  sendData(data: FormGroup) {
    console.log(data.value);
console.log(this.imgSrc);

    let myData = new FormData();
    let facilities: any = this.RoomForm.get('facilities')?.value;
    for (let i = 0; i < facilities!.length; i++) {
      myData.append(`facilities`, facilities[i]);
    }
    myData.append('roomNumber', data.value.roomNumber);
    myData.append('price', data.value.price);
    myData.append('discount', data.value.discount);
    myData.append('capacity', data.value.capacity);
    myData.append('imgs', this.imgSrc);

    if (this.roomId) {
      this._RoomsService.editRoom(myData, this.roomId).subscribe({
        next: (res: Rooms.IRoom) => {},
        error: (errRes) => {
          const errMes = errRes.error.message;
          this._NotifyService.ServerError(errMes);
        },
        complete: () => {
          this._NotifyService.Success('Data is Updated Successfully');
          setTimeout(() => {
            this._Router.navigateByUrl(`dashboard/rooms`);
          }, 1500);
        },
      });
    } else {
      this._RoomsService.addRoom(myData).subscribe({
        next: (res) => {
          console.log(res);
          this._NotifyService.Success('Data is Sent Successfully');
        },
        error: (errRes) => {
          const errMes = errRes.error.message;
          this._NotifyService.ServerError(errMes);
        },
        complete: () => {
          this._NotifyService.Success('Data is Sent Successfully');
          setTimeout(() => {
            this._Router.navigateByUrl(`dashboard/rooms`);
          }, 1500);
        },
      });
    }
  }

  getRoomById(id: number) {
    this._RoomsService.getRoomById(id).subscribe({
      next: async (res: Rooms.IRoomdDetails) => {
        this.roomData = res;
        console.log("images",this.roomData.data.room.images);
        for (const el of this.roomData.data.room.images) {
           const val =await this.fetchImage(el)
            this.files.push(val)
            this.imgSrc=this.files[0]
        }
        console.log("files",this.files);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        let allFacilities = this.roomData.data.room.facilities?.map(
          (Facility: Rooms.IFacility) => Facility._id
        );

        this.RoomForm.patchValue({
          roomNumber: this.roomData.data.room.roomNumber,
          price: this.roomData.data.room.price,
          capacity: this.roomData.data.room.capacity,
          discount: this.roomData.data.room.discount,
          imgs: this.roomData.data.room.images,
          facilities: allFacilities,
        });
      },
    });
  }
  async fetchImage(url: string) {
    var res = await fetch(url);
    var blob = await res.blob();
    return blob;
  };

  getFacilities() {
    let param = {
      page: 1,
      size: 1000,
    };
    this._FacilitiesService.getAllFacilities(param).subscribe({
      next: (res: Facilities.IFacilitiesRes) => {
        this.facilityList = res.data.facilities;
      },
      error: (errRes) => {
        const errMes = errRes.error.message;
        this._NotifyService.ServerError(errMes);
      },
      complete: () => {},
    });
  }

  get roomNumber() {
    return this.RoomForm.get('roomNumber');
  }
  get price() {
    return this.RoomForm.get('price');
  }
  get capacity() {
    return this.RoomForm.get('capacity');
  }
  get discount() {
    return this.RoomForm.get('discount');
  }
}
