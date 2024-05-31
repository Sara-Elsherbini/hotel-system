import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facilities } from '../models/facilites';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

constructor( private _HttpClient:HttpClient) { }

getAllFacilities(params:Facilities.IParams):Observable<Facilities.IFacilitiesList>{
 return this._HttpClient.get<Facilities.IFacilitiesList>(HttpEndPoints.Facilities.FacilitiesList,{params:params})
}


}
