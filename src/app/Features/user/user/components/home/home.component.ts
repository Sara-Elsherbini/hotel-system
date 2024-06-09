import { AuthService } from 'src/app/Features/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {  Ads} from '../../../../admin/ads/model/Ads'
import { HttpErrorResponse } from '@angular/common/http';
import { NotifyService } from 'src/app/common';
import{Rooms} from '../../../../admin/rooms/models/rooms'
import { MatDialog } from '@angular/material/dialog';
import { FavPopComponent } from '../fav-pop/fav-pop.component';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myData:any
  data:any
  myRole:any
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
  constructor(private AuthService:AuthService,private _UserService:UserService,private router: Router,private _NotifyService:NotifyService, private dialogRef:MatDialog) {
    this.AuthService.role
    console.log(this.AuthService.role );


   }





  ngOnInit() {
    this.AuthService.getProfile()

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
        console.log(res);

        this.beautyroomList=res.data.rooms.slice(0,4);
        this.largeroomList=res.data.rooms.slice(4,8)
      },
      error: (err:HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message)
      }
    })
  }


  checkIslogged(id:string){
    debugger
    console.log(this.AuthService.role);

    if( this.AuthService.role == "user"){


      console.log("logged in user");

      this._UserService.addRoomFav(id).subscribe({
        next:(res)=>{
          console.log(res);
        this._NotifyService.Success('Room added to favorites successfully')

        },

       error:(err)=>{
        this._NotifyService.ServerError(err.error.message)
        console.log(err);


       }
      })


    }else{
      console.log('not login user');

      this.openDialog()
    }
  }
  openDialog(){
    this.dialogRef.open(FavPopComponent)
  }



}
