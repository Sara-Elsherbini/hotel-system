import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/common';
import { RoutePaths } from 'src/app/common/setting/RoutePath';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.scss']
})
export class LandingNavbarComponent implements OnInit {

  isLoggedIn!: boolean;

  menu: {text: string, link: string, isActive: boolean}[] = [
    {
      text: 'Home',
      link: RoutePaths.Landing.home,
      isActive: true
    },
    {
      text: 'Explore',
      link: RoutePaths.Landing.explore,
      isActive: true
    },
    {
      text: 'Reviews',
      link: RoutePaths.Landing.reviews,
      isActive: this._tokenService.isAuthenticated()
    },
    {
      text: 'Favorites',
      link: RoutePaths.Landing.favorites,
      isActive: this._tokenService.isAuthenticated()
    }
  ]

  constructor(private _tokenService: TokenService){}

  ngOnInit(): void {
      this.isLoggedIn = this._tokenService.isAuthenticated();
  }

}
