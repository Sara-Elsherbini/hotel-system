import { Component, ElementRef, ViewChild } from '@angular/core';
import { SizingHelperService } from 'src/app/common';

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

  constructor(private _sizingHelper: SizingHelperService) { }

  ngOnInit(): void {
    this._sizingHelper.manageDashBoardSizing(this.sideBar, this.mainSection, this.RouteOutlet);
    // this._sizingHelper.data.subscribe({
    //   next: (newData)=>{
    //     this.height = newData.parentHeight;
    //   }
    // })

    this.height = `${window.innerHeight}px`;
  }

  cnLog(...messages: any) {
    console.log(...messages)
  }
}
