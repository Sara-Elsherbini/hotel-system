import { Component } from '@angular/core';
import { FacilitiesService } from './services/facilities.service';
import {Facilities} from './models/facilites';
import { NotifyService } from 'src/app/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent {
  FacilitiesList!:Facilities.IFacilitiesList
  constructor(private _FacilitiesService:FacilitiesService,
    private _NotifyService:NotifyService
  ){

  }
 ngOnInit(): void {
 this.getFacilities()

 }
  getFacilities(){
    let param={
      page:1,
      size:5
    }
    this._FacilitiesService.getAllFacilities(param).subscribe({
      next:(res:Facilities.IFacilitiesList)=>{
        this.FacilitiesList=res
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);

        this._NotifyService.ServerError(err.error.message)
      },
      complete:()=>{

      }

    })
  }
}
