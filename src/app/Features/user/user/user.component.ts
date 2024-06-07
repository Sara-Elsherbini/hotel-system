import { Component } from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-guest',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class userComponent {
  lang:String=''

constructor( _translate:TranslateService){
  _translate.onLangChange.subscribe((event:LangChangeEvent)=>{
        this.lang=event.lang;
        console.log('lang',this.lang);

  })
}
}
