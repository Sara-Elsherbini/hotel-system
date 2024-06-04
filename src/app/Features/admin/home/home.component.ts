import { NotifyService } from 'src/app/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { HomeService } from './services/home.service';
import { Home } from './models/home';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homeData!: Home.IHomeData;
  constructor(
    private _HomeService: HomeService,
    private _NotifyService: NotifyService
  ) {}
  ngOnInit(): void {
    this.getchart();
  }
  getchart() {
    this._HomeService.getCharts().subscribe({
      next: (res: Home.IHomeRes) => {
        this.homeData = res.data;
      },
      error: (err: HttpErrorResponse) => {
        this._NotifyService.Error(err.error.message);
      },
      complete: () => {},
    });
  }
}
