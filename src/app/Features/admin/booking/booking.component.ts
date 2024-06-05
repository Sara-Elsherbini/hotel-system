import { Table } from 'src/app/shared/components/table/model/Table.namespace';
import { Component } from '@angular/core';
import { Booking } from './models/booking';
import { BookingService } from './services/booking.service';
import { NotifyService } from 'src/app/common';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  noData: Boolean = false;
  bookingList:Booking.IBookingData|any;
  bookingData:Booking.IBooking[]=[];
  pageNum: number = 1;
  pageSizing: number = 10;
  columns: Table.IColumn[] = [
    {
      header: 'Room number',
      property: 'room',
    },
    {
      header: 'Price',
      property: 'roomPrice',
    },

    {
      header: 'Start date',
      property: 'startDate',
      isDate:true
    },
    {
      header: 'End date',
      property: 'endDate',
      isDate:true
    },
    {
      header: 'User',
      property: 'user',
    }
  ];
  operators: Table.IOperators[] = [
    {
      icon: 'visibility',
      title: 'View',
    },
    {
      icon: 'delete',
      title: 'Delete',
    },
  ];
 constructor(private _BookingService:BookingService,
  private _NotifyService: NotifyService,
  ){}

  ngOnInit(): void {
    this.getBooking();
  }
  pageNumber(event: number) {
    this.pageNum = event;
    this.getBooking();
  }

  pageSize(event: number) {
    this.pageSizing = event;
    this.getBooking();
  }
  getBooking() {
    let param = {
      page: this.pageNum,
      size: this.pageSizing,
    };
    this._BookingService.getAllBooking(param).subscribe({
      next: (res: Booking.IBookingRes) => {
        console.log(res);

        this.bookingList = res.data;
        const tableData = res.data.booking.map((item:any) => ({
          ...item,
          room: item.room.roomNumber,
          user:item.user.userName
        }));
        this.bookingData = tableData;
// //
//         console.log(this.data)
//         !this.data.length ? (this.noData = true) : (this.noData = false);
      },
      error: (err: HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message);
      },
      complete: () => { },
    });
  }
  runOp(data: any) {

    // console.log(data);
    // if (data.opInfo == 'Edit') {
    //   this.openAddEditFacility('Edit', data.row);
    //   console.log('1', data.row._id);
    // }
    // if (data.opInfo == 'View') {

    //   this.openAddEditFacility('View', data.row);
    // }
    // if (data.opInfo === 'Delete') {
    //   this.openDeleteDialog(data.row._id)
    // }
  }
}
