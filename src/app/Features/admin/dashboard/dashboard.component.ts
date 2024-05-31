import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SizingHelperService } from 'src/app/common';
import { Table } from 'src/app/shared/components/table/model/Table.namespace';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild("sidebar", { static: true })
  sideBar!: ElementRef;
  @ViewChild("mainSection", { static: true })
  mainSection!: ElementRef;
  @ViewChild("RouteOutlet", { static: true })
  RouteOutlet!: ElementRef;

  height!: string;

  columns: Table.IColumn[] = [
    {
      header: "Room number",
      property: "roomNumber"
    },
    {
      header: "Image",
      property: "image",
      isImage: true
    },
    {
      header: "Price",
      property: "price"
    },
    {
      header: "Discount",
      property: "discount"
    },
    {
      header: "Capacity",
      property: "capacity"
    },
    {
      header: "Facilities",
      property: "facilities"
    }
  ]


  data = []

  operators: Table.IOperators[] = [
    {
      icon: "block",
      title: "block"
    }
  ]

  constructor(private _sizingHelper: SizingHelperService, private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._sizingHelper.manageDashBoardSizing(this.sideBar, this.mainSection, this.RouteOutlet);
    // this._sizingHelper.data.subscribe({
    //   next: (newData)=>{
    //     this.height = newData.parentHeight;
    //   }
    // })
    this._httpClient.get("admin/rooms", {params: {size: 10, page:1}}).subscribe({
      next: (res: any)=>{
        let tableData = res.data.rooms.map((room: any)=>{
          let facilitiesString = "";
          room.facilities.forEach((fac: { [x: string]: string; }) => {
            facilitiesString += fac["name"] + ", ";
          });
          return {
            ...room,
            image: room.images[0],
            facilities: facilitiesString
          }
        });
        this.data = tableData;
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

  runOp(data: any){
    console.log(data);
  }

  cnLog(...messages: any) {
    console.log(...messages)
  }
}
