
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IMenu } from './model/IMenu.model';
import { TokenService } from 'src/app/common';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  opened: boolean = false;
  @ViewChild("parElm", { static: true }) parElm!: ElementRef;
  @ViewChild("sect", { static: true }) sect!: ElementRef;
  @Input() height!:string;
  
  menu: IMenu[] = [
    {
      text: 'Home',
      icon: 'fa-thin fa-house',
      link: '/dashboard/home',
    },
    {
      text: 'Users',
      icon: 'fa-thin fa-user-group',
      link: '/dashboard/manager/users',
    },
    {
      text: 'Projects',
      icon: 'fa-thin fa-objects-column',
      link: '/dashboard/manager/projects',
    },
    {
      text: 'Tasks',
      icon: 'fa-thin fa-list-check',
      link: '/dashboard/manager/tasks',
    },
    {
      text: 'Projects',
      icon: 'fa-thin fa-objects-column',
      link: '/dashboard/employee/projects',
    },
    {
      text: 'Tasks',
      icon: 'fa-thin fa-list-check',
      link: '/dashboard/employee/task-board',
    },
  ]

  constructor(private _TokenService:TokenService){}

  toggleSidebar() {
    this.parElm.nativeElement.classList.toggle("active-sidebar")
    this.opened = !this.opened;
  }

}
