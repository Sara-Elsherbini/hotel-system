import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {  Ads} from '../../../../admin/ads/model/Ads'
import { HttpErrorResponse } from '@angular/common/http';
import { NotifyService } from 'src/app/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  capacity:number=0;
  adsList: Ads.IAds[]=[];
  firstAds!:Ads.IAds
  constructor(private _UserService:UserService,private _NotifyService:NotifyService) { }

  ngOnInit() {
    this.getAds()
  }

  increment(){
    this.capacity++;
  }
  decrement(){
    if (this.capacity>0) {
      this.capacity--;
    }

  }

  getAds() {
    this._UserService.getAllAds().subscribe({
      next: (res) => {
        this.firstAds=res.data.ads[0];
        this.adsList = res.data.ads.slice(1, 5);
        console.log('adsList',this.adsList);

      },
      error: (err:HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message)
      }
    })
  }

}
