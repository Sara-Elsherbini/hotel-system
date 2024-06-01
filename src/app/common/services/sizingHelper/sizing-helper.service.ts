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
    // RouteOutlet = RouteOutlet;

    let sidebar_width = sideBar.nativeElement.offsetWidth;
    let sidebar_height = sideBar.nativeElement.offsetHeight;

    let calcWidth = () => {
      mainSection.nativeElement.style.width = ` ${window.innerWidth - (sidebar_width)}px`;
    }

    const sideBarObserver = new ResizeObserver(entries => {
      sidebar_width = entries[0].contentRect.width + ((entries[0].devicePixelContentBoxSize[0].inlineSize - entries[0].contentRect.width) / 4);
      sidebar_height = entries[0].contentRect.height;

      calcWidth();
    });

    sideBarObserver.observe(sideBar.nativeElement);

  }
}
