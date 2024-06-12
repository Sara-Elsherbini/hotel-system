import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  isDarkMode = this.darkMode.asObservable();
  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.darkMode.next(savedTheme === 'dark');
  }
  toggleDarkMode() {
    const currentMode = this.darkMode.getValue();
    const nextMode = !currentMode;
    this.darkMode.next(nextMode);
    localStorage.setItem('theme', nextMode ? 'dark' : 'light');
  }

}
