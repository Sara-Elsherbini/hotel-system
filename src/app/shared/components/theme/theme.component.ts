import { Component } from '@angular/core';
import { ThemeService } from 'src/app/common';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
  constructor(public _ThemeService: ThemeService) { }

  toggleMode() {
    this._ThemeService.toggleDarkMode();
  }

}
