import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';
import { Ads } from '../../../admin/ads/model/Ads';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient: HttpClient) { }
  getAllAds(): Observable<Ads.IResponseMulti> {
    return this._HttpClient.get<Ads.IResponseMulti>(HttpEndPoints.User.home.GetAllads)
  }
}
