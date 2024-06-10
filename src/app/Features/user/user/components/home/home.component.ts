
import { AuthService } from 'src/app/Features/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {  Ads} from '../../../../admin/ads/model/Ads'
import { HttpErrorResponse } from '@angular/common/http';
import { NotifyService } from 'src/app/common';
import{Rooms} from '../../../../admin/rooms/models/rooms'
import { MatDialog } from '@angular/material/dialog';
import { MustLoginDialog } from '../MustLoginDialog/MustLoginDialog';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UserModel } from "../../models/user";
import { RoutePaths } from 'src/app/common/setting/RoutePath';
import { RoleEnum } from 'src/app/common/Enums/RoleEnum.enum';

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
  RoleEnum=RoleEnum
  beautyroomList:Rooms.IRoom[]=[];
  largeroomList:Rooms.IRoom[]=[];
  explorForm = new FormGroup({
    startDate: new FormControl('',[Validators.required]),
    endDate: new FormControl('',[Validators.required]),
    capacity: new FormControl(0,[Validators.required]),
})
  constructor(private _AuthService:AuthService,private _UserService:UserService,private _router: Router,private _NotifyService:NotifyService, private dialogRef:MatDialog) {
   }
  ngOnInit() {
    this._AuthService.getProfile()

    this.getAds()
    this.getRoom();
  }
  onExplor(): void {
    if (this._AuthService.role==this.RoleEnum.USER) {
      const formValues = this.explorForm.value;
      // Format the dates
      const formattedParams = {
        ...formValues,
        startDate: formValues.startDate?this.formatDateToMMDDYYYY(formValues.startDate):'',
        endDate: formValues.endDate?this.formatDateToMMDDYYYY(formValues.endDate):''
      };
      this._router.navigate(['explore'], { queryParams: formattedParams });
    }else this.openMustLoginDialog('Login to Explore room.');
  }


  formatDateToMMDDYYYY(dateString: string): string {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
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
  view(id:string){
    let url =RoutePaths.User.roomDetails;
    url=url.replace(':id',id);

  this._router.navigateByUrl(url);
  }

  getAds() {
    this._UserService.getAllAds().subscribe({
      next: (res) => {
        this.firstAds=res.data.ads[0];
        this.SecondAds=res.data.ads[1]
        this.adsList = res.data.ads.slice(2, 6);
      },
      error: (err:HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message)
      }
    })
  }

  getRoom() {
    let param = {
      page: 1,
      size: 1000,

    }
    this._UserService.getAllRooms(param).subscribe({
      next: (res) => {
        this.beautyroomList=res.data.rooms.slice(0,4);
        this.largeroomList=res.data.rooms.slice(4,8)
      },
      error: (err:HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message)
      }
    })
  }


  checkIslogged(id:string){
    if( this._AuthService.role == this.RoleEnum.USER){
      this._UserService.addRoomFav(id).subscribe({
        next:(res)=>{
        this._NotifyService.Success('Room added to favorites successfully')
        },

       error:(err:HttpErrorResponse)=>{
        this._NotifyService.ServerError(err.error.message)
       }
      })


    }else{
      this.openMustLoginDialog('Login to put this in Favorites.')
    }
  }

  openMustLoginDialog(text:string){
    this.dialogRef.open(MustLoginDialog,
      {data:text}
    )
  }

}
