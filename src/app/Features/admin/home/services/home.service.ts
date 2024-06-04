import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Home } from '../models/home';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor(private _HttpClient:HttpClient) { }


getCharts():Observable<Home.IHomeRes>{
  return this._HttpClient.get<Home.IHomeRes>(HttpEndPoints.Home.Dashboard)
 }

}
