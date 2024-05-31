import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SizingHelperService {

  data = new BehaviorSubject<any>({
    paddingBot: 0,
    parentHeight: null
  });

  constructor() { }

  newData(paddingBot: number, parentHeight: number) {
    this.data.next({
      paddingBot: paddingBot,
      parentHeight: parentHeight
    });
  }

  manageDashBoardSizing(sideBar: ElementRef, mainSection: ElementRef, RouteOutlet: ElementRef) {

    sideBar = sideBar;
    mainSection = mainSection;
    RouteOutlet = RouteOutlet;

    let sidebar_width = sideBar.nativeElement.offsetWidth;
    let sidebar_height = sideBar.nativeElement.offsetHeight;
    console.log("sidebar_height",sidebar_height);

    // let latestHeight = window.innerHeight;
    // let calcPadding!: number;

    // let RouteOutlet_width = RouteOutlet.nativeElement.offsetWidth;
    // let RouteOutlet_height = RouteOutlet.nativeElement.offsetHeight;
    // let RouteOutlet_latest_height = RouteOutlet_height;
    // let current_height_dif = RouteOutlet_latest_height - RouteOutlet_height;
    // let latest_height_dif = current_height_dif;


    let calcWidth = () => {
      //this.mainSection.nativeElement.classList.toggle("slowmotion");
      mainSection.nativeElement.style.width = ` ${window.innerWidth - (sidebar_width)}px`;
    }

    // let calcHeight = () => {
    //   calcPadding = (latestHeight - sidebar_height);
    //   if (calcPadding > 0) this.newData(calcPadding, latestHeight);
    //   else if (calcPadding <= 0) this.newData(0, latestHeight);
    // }



    // let isShrinking = () => {
    //   return (RouteOutlet_latest_height > RouteOutlet_height);
    // }

    const sideBarObserver = new ResizeObserver(entries => {
      sidebar_width = entries[0].contentRect.width + ((entries[0].devicePixelContentBoxSize[0].inlineSize - entries[0].contentRect.width) / 4);
      sidebar_height = entries[0].contentRect.height;

      //console.log(entries[0])

      //calcHeight();
      calcWidth();
    });

    sideBarObserver.observe(sideBar.nativeElement);

    // const RouteOutletObserver = new ResizeObserver(entries => {
    //   RouteOutlet_width = entries[0].contentRect.width;
    //   RouteOutlet_height = Math.round(entries[0].contentRect.height);

    //   current_height_dif = RouteOutlet_latest_height - RouteOutlet_height;

    //   if(isShrinking() /*&& (current_height_dif + latest_height_dif !== 0)*/){
    //     window.scrollTo(0,0);
    //     latestHeight = sidebar_height;
    //     calcHeight();
    //   }

    //   latest_height_dif = current_height_dif;
    //   RouteOutlet_latest_height = RouteOutlet_height;
    // });

    //RouteOutletObserver.observe(RouteOutlet.nativeElement);
  }
}
