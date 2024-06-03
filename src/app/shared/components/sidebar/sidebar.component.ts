
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IMenu } from './model/IMenu.model';
import { TokenService } from 'src/app/common';
import { RoutePaths } from 'src/app/common/setting/RoutePath';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  RoutePaths=RoutePaths
  opened: boolean = true;
  @ViewChild("parElm", { static: true }) parElm!: ElementRef;
  @ViewChild("sect", { static: true }) sect!: ElementRef;
  @Input() height!:string;

  menu: IMenu[] = [
    {
      text: 'Home',
      icon: 'fa-thin fa-house',
      link: this.RoutePaths.Admin.Home.HomeComponent,
    },
    {
      text: 'Facilities',
      icon:  'fa-regular fa-window-restore',
      link: this.RoutePaths.Admin.Facilities.FacilitiesList,
    },
    {
      text: 'Rooms',
      icon: 'fa-solid fa-person-shelter',
      link: this.RoutePaths.Admin.Room.RoomList,
    },
    {
      text: 'Ads',
      icon: 'fa-solid fa-wand-magic-sparkles',
      link: this.RoutePaths.Admin.Ads.AdsList,
    },

    {
      text: 'Booking',
      icon: 'fa-solid fa-ticket',
      link: this.RoutePaths.Admin.Booking.bookingList,
    },
    {
      text: 'Users',
      icon: 'fa-solid fa-users',
      link: this.RoutePaths.Admin.Users.usersList,
    }

  ]

  constructor(private _TokenService:TokenService){}

  toggleSidebar() {
    this.parElm.nativeElement.classList.toggle("active-sidebar")
    this.opened = !this.opened;
  }

}
