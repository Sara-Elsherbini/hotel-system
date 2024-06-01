import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomsService } from '../../services/rooms.service';
import { ActivatedRoute } from '@angular/router';
import { FacilitiesService } from '../../../facilities/services/facilities.service';
import{Facilities} from '../../../facilities/models/facilites';
import { NotifyService } from 'src/app/common';

@Component({
  selector: 'app-add-edit-room',
  templateUrl: './add-edit-room.component.html',
  styleUrls: ['./add-edit-room.component.scss'],
})
export class AddEditRoomComponent implements OnInit {
  facilityList:Facilities.IFacility[]=[]
  constructor(
    private _RoomsService: RoomsService,
    private _ActivatedRoute: ActivatedRoute,
    private _FacilitiesService:FacilitiesService,
    private _NotifyService:NotifyService
  ) {
    this.roomId = _ActivatedRoute.snapshot.params['id'];
    if (this.roomId) {
      console.log(this.roomId);
      this.getRoomById(this.roomId);
    }
  }

  ngOnInit() {
    this.getFacilities();
  }
  imgSrc: any;
  files: File[] = [];
  roomId: number = 0;
  roomData: any;

  addRoomForm = new FormGroup({
    roomNumber: new FormControl('', [ Validators.required,]),
    price: new FormControl(null, [ Validators.required,]),
    capacity: new FormControl(null, [ Validators.required,]),
    discount:new FormControl(null, [ Validators.required,]),
    facilities: new FormControl([0]),
    imgs: new FormControl(null),
  });
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0];
  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  sendData(data: FormGroup) {
    console.log("data",data.value);

    let myData = new FormData();

    myData.append('roomNumber', data.value.roomNumber);
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
          roomNumber: this.roomData.roomnumber,
          price: this.roomData.price,
          capacity: this.roomData.capacity,
          discount: this.roomData.discount,
          imgs: this.roomData.imagePath,
          facilities: this.roomData.room.map((x: any) => x.id),
        });
      },
    });
  }




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
    return this.addRoomForm .get('roomNumber');
  }
  get price() {
    return this.addRoomForm.get('price');
  }
  get capacity() {
    return this.addRoomForm.get('capacity');
  }
  get discount() {
    return this.addRoomForm.get('discount');
  }
}
