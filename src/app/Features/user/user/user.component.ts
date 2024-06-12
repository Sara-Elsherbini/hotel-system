import { Component } from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import { ThemeService } from 'src/app/common';

@Component({
  selector: 'app-guest',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class userComponent {
  lang:String=''

constructor( _translate:TranslateService , public themeService:ThemeService){
  _translate.onLangChange.subscribe((event:LangChangeEvent)=>{
        this.lang=event.lang;
        // console.log('lang',this.lang);

  })
}
}
