import { NotifyService } from 'src/app/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { HomeService } from './services/home.service';
import { Home } from './models/home';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homeData!: Home.IHomeData;
  rooms:number=0;
  facilities:number=0;
  ads:number=0;
  users:number=0;
  admins:number=0;
  pendingBooking:number=0;
  completeBooking:number=0;
  zeroCount: number = 0;
  constructor(
    private _HomeService: HomeService,
    private _NotifyService: NotifyService
  ) {}
  ngOnInit(): void {
    this.getAllcharts();

  }
  getAllcharts() {
    this._HomeService.getCharts().subscribe({
      next: (res: Home.IHomeRes) => {
        this.homeData = res.data;
        this.facilities=this.homeData.facilities;
        this.rooms=this.homeData.rooms;
        this.ads=this.homeData.ads;
        this.users=this.homeData.users.user;
        this.admins=this.homeData.users.admin;
        this.pendingBooking=this.homeData.bookings.pending;
        this.completeBooking=this.homeData.bookings.completed;
      },
      error: (err: HttpErrorResponse) => {
        this._NotifyService.Error(err.error.message);
      },
      complete: () => {
        this.renderHotelChart()
      },
    });
  }
  renderHotelChart(){
    if (this.rooms==0) {
      this.zeroCount++
    }
    if (this.facilities==0) {
      this.zeroCount++
    }
    if (this.ads==0) {
      this.zeroCount++
    }
    if (this.pendingBooking==0) {
      this.zeroCount++
    }
    if (this.completeBooking==0) {
      this.zeroCount++
    }
    if (this.zeroCount>=4) {
      return
    }
 const data ={
  labels: ['Facilities','Rooms','Ads','Pendding','completed'],
  datasets: [
    {
      data: [this.facilities,this.rooms,this.ads, this.pendingBooking, this.completeBooking],
      backgroundColor: ['#ba4574','#eb147e','#30cf72','#3063cf','#af1fe0'],
      hoverOffset: 4,
    }
  ]
 }
 const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'hotel chart',
    },
  },
};

const ctx = document.getElementById('hotelChart') as HTMLCanvasElement;
if (ctx) {
  new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options,
  });
}
  }
}
