import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ThemeService, TokenService } from 'src/app/common';
import { RoutePaths } from 'src/app/common/setting/RoutePath';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.scss']
})
export class LandingNavbarComponent implements OnInit {
  languages = [
    { name: 'En', value: 'en' },
    { name: 'Ar', value: 'ar' }
  ]

  isLoggedIn!: boolean;
  lang: string | any = localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'en'
  menu: { text: string, link: string, isActive: boolean }[] = [
    {
      text: 'Home',
      link: RoutePaths.User.home,
      isActive: true
    },
    {
      text: 'Explore',
      link: RoutePaths.User.explore,
      isActive: true
    },
    // {
    //   text: 'Reviews',
    //   link: RoutePaths.User.reviews,
    //   isActive: this._tokenService.isAuthenticated()
    // },
    {
      text: 'Favorites',
      link: RoutePaths.User.favorites,
      isActive: this._tokenService.isAuthenticated()
    }
  ]

  constructor(private _tokenService: TokenService,
    private _translate: TranslateService, public _ThemeService: ThemeService) {
    _translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // console.log("myevebt",event);

    })

  }
  ngOnInit() {
    this.isLoggedIn = this._tokenService.isAuthenticated();
    this.onChangeLang(this.lang)
  }


  onChangeLang(val: string) {
    this.lang = val
    this._translate.setDefaultLang(val);
    this._translate.use(val);
    localStorage.setItem('lang', this.lang)
  }

}
