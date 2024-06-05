import { Card } from 'src/app/shared/components/shared-card/models/shared-card';
import { Table } from 'src/app/shared/components/table/model/Table';
import { Component, HostListener } from '@angular/core';
import { Booking } from './models/booking';
import { BookingService } from './services/booking.service';
import { NotifyService } from 'src/app/common';
import { HttpErrorResponse } from '@angular/common/http';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewBookingDialogComponent } from './components/viewBookingDialog/viewBookingDialog.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  noData: Boolean = false;
  bookingList: Booking.IBookingData | any;
  bookingData: Booking.IBooking[] = [];
  pageNum: number = 1;
  pageSizing: number = 10;
  isGrid :boolean= false;
  disableTableButton  :boolean= false;
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
      isDate: true
    },
    {
      header: 'End date',
      property: 'endDate',
      isDate: true
    },
    {
      header: 'User',
      property: 'user',
    }
  ];
  cards: Card.ICard[] = [
    {
      key: 'Room number',
      property: 'room',
    },
    {
      key: 'Price',
      property: 'roomPrice',
    },

    {
      key: 'Start date',
      property: 'startDate',
      isDate:true
    },
    {
      key: 'End date',
      property: 'endDate',
      isDate:true
    },
    {
      key: 'User',
      property: 'user',
    }
  ];
  operators: Table.IOperators[] = [
    {
      icon: 'visibility',
      title: 'View',
    },
    // {
    //   icon: 'delete',
    //   title: 'Delete',
    // },
  ];

  constructor(private _BookingService: BookingService,
    private _NotifyService: NotifyService, private _dialog: MatDialog
  ) { }


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
        const tableData = res.data.booking.map((item: any) => ({
          ...item,
          room: item.room.roomNumber,
          user: item.user.userName
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
  runOp(data:any) {



    if (data.opInfo === 'Delete') {
      this.openDeleteBooking(data.row._id)
    }
    if (data.opInfo == 'View') {

      this.openViewBooking( data.row);
    }
  }

  deleteBooking(id: number) {
    this._BookingService.deleteBooking(id).subscribe({
      next: (res) => { },
      error: (error: HttpErrorResponse) => {
        this._NotifyService.ServerError(error.error.message)

      },
      complete: () => {
        this._NotifyService.Success(`Booking Deleted Successfuly`);
        this.getBooking()
      }
    })
  }

  openDeleteBooking(id: number): void {
    console.log(id);

    const dialogRef = this._dialog.open(DeleteComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBooking(id)
      }
    })
  }

  

  openViewBooking(data:Booking.IBooking) {
    const dialogRef = this._dialog.open(ViewBookingDialogComponent, {
      data: data,

      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('result', result);
    });



  }

  @HostListener('window:resize',['$event'])
  onResize(event:Event){
  this.checkBodyWidth()
  }
  private checkBodyWidth() {
    if (window.innerWidth <= 991) {
      this.isGrid = true;
      this.disableTableButton = true;
    } else {
      this.disableTableButton = false;
    }
  }


}
