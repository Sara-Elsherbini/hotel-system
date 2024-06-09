import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {  Ads} from '../../../../admin/ads/model/Ads'
import { HttpErrorResponse } from '@angular/common/http';
import { NotifyService } from 'src/app/common';
import{Rooms} from '../../../../admin/rooms/models/rooms';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  capacity:number=0;
  adsList: Ads.IAds[]=[];
  firstAds!:Ads.IAds;
  SecondAds!:Ads.IAds;
  beautyroomList:Rooms.IRoom[]=[];
  largeroomList:Rooms.IRoom[]=[];
  explorForm = new FormGroup({
    startDate: new FormControl('',[Validators.required]),
    endDate: new FormControl('',[Validators.required]),
    capacity: new FormControl(0,[Validators.required]),
})

  constructor(private _UserService:UserService,private _NotifyService:NotifyService) { }

  ngOnInit() {
    this.getAds()
    this.getRoom()
  }
  onExplor(data:FormGroup){
   console.log("data",data.value);

  }
  getCapacity(){
    this.capacity = this.explorForm.get('capacity')?.value as number ||0
  }

  increment(){
    this.explorForm.get('capacity')?.setValue(++this.capacity);
  }
  decrement(){
    if (this.capacity>0) {
      this.explorForm.get('capacity')?.setValue(--this.capacity)
    }

  }

  getAds() {
    this._UserService.getAllAds().subscribe({
      next: (res) => {
        this.firstAds=res.data.ads[0];
        this.SecondAds=res.data.ads[1]
        this.adsList = res.data.ads.slice(2, 6);
        console.log('adsList',this.adsList);

      },
      error: (err:HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message)
      }
    })
  }

  getRoom() {
    this._UserService.getAllRooms().subscribe({
      next: (res) => {
        this.beautyroomList=res.data.rooms.slice(0,4);
        this.largeroomList=res.data.rooms.slice(4,8)
      },
      error: (err:HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message)
      }
    })
  }

}
