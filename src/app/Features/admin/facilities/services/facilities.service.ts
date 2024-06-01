import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facilities } from '../models/facilites';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private _HttpClient: HttpClient) { }

  getAllFacilities(params: Facilities.IParams): Observable<Facilities.IFacilitiesRes> {
    return this._HttpClient.get<Facilities.IFacilitiesRes>(HttpEndPoints.Facilities.FacilitiesList, { params: params })
  }


  deletefacilitie(facilitieID: number): Observable<{ raw: [], affected: number }> {
    return this._HttpClient.delete<{ raw: [], affected: number }>(HttpEndPoints.Facilities.FacilitiesDelete + facilitieID)
  }



}