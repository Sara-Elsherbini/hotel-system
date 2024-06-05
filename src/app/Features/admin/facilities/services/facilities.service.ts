import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facilities } from '../models/facilites';
// import { Facilities } from '../../../../../app/common/setting/RoutePath'
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private _HttpClient: HttpClient) { }

  getAllFacilities(params: Facilities.IParams): Observable<Facilities.IFacilitiesRes> {
    return this._HttpClient.get<Facilities.IFacilitiesRes>(HttpEndPoints.Facilities.FacilitiesList, { params: params })
  }

  onaddFacility(itemName: string): Observable<any> {
    return this._HttpClient.post(HttpEndPoints.Facilities.addFacilities, { name: itemName })
  }

  onEditFacility(facilityId: string, itemName: string): Observable<any> {
    let endPoint = HttpEndPoints.Facilities.editFacilities
    console.log("end", endPoint);

    return this._HttpClient.put(`admin/room-facilities/${facilityId}`, { name: itemName })
  }

  deleteFacility(facilitieID: number): Observable<{ raw: [], affected: number }> {
    return this._HttpClient.delete<{ raw: [], affected: number }>(HttpEndPoints.Facilities.deleteFacilities + facilitieID)
  }

}





