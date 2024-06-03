import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Ads from '../model/Ads.namespace';
import { Observable } from 'rxjs';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private _HttpClient: HttpClient) { }

  getAllAds(params: Ads.IParams): Observable<Ads.IResponseMulti> {
    return this._HttpClient.get<Ads.IResponseMulti>(HttpEndPoints.Ads.AdsGeneral, { params: params })
  }

  getAdById(_id: string): Observable<Ads.IResponseSingle>{
    return this._HttpClient.get<Ads.IResponseSingle>(`${HttpEndPoints.Ads.AdsGeneral}/${_id}`)
  }

  onAddAd(data: Ads.IAdsForm): Observable<any> {
    return this._HttpClient.post(HttpEndPoints.Ads.AdsGeneral, data)
  }

  onEditAd(_id: string, newData: Ads.IAdsForm): Observable<any> {
    return this._HttpClient.put(`${HttpEndPoints.Ads.AdsGeneral}/${_id}`, newData)
  }

  onDeleteAd(_id: string){
    return this._HttpClient.delete<Ads.IResponse>(`${HttpEndPoints.Ads.AdsGeneral}/${_id}`)
  }
}
