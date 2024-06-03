import { Component } from '@angular/core';
import Ads from './model/Ads.namespace';
import { AdsDialogComponent } from './components/ads-dialog/ads-dialog.component';
import { Table } from 'src/app/shared/components/table/model/Table.namespace';
import { AdsService } from './services/ads.service';
import { NotifyService } from 'src/app/common';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent {

  AdsList: Ads.IAdsList | any;
  data: Ads.IAds[] = [];
  noData: Boolean = false;

  pageNum: number = 1;
  pageSizing: number = 10;

  rooms = [];
  columns: Table.IColumn[] = [
    {
      header: 'Room Name',
      property: 'roomName',
    },
    {
      header: 'Price',
      property: 'roomPrice',
    },
    {
      header: 'Discount',
      property: 'roomDiscount',
    },
    {
      header: 'Capacity',
      property: 'roomCapacity',
    },
    {
      header: 'Created By',
      property: 'createdBy',
    },
    {
      header: 'Active',
      property: 'isActive',
      isBoolean: true
    }
  ];
  operators: Table.IOperators[] = [
    {
      icon: 'edit_square',
      title: 'Edit',
    },
    {
      icon: 'visibility',
      title: 'View',
    },
    {
      icon: 'delete',
      title: 'Delete',
    },
  ];
  constructor(
    private _AdsService: AdsService,
    private _NotifyService: NotifyService,
    private _HttpClient: HttpClient,
    public _dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.getAds();
    this.getAllRooms();
  }

  pageNumber(event: number) {
    this.pageNum = event;
    this.getAds();
  }

  pageSize(event: number) {
    this.pageSizing = event;
    this.getAds();
  }

  getAds() {
    let param = {
      page: this.pageNum,
      size: this.pageSizing,
    };

    this._AdsService.getAllAds(param).subscribe({
      next: (res: Ads.IResponseMulti) => {
        this.AdsList = res.data;
        const tableData = res.data.ads.map((item: any) => ({
          ...item,
          roomName: item.room.roomNumber,
          roomPrice: item.room.price,
          roomCapacity: item.room.capacity,
          roomDiscount: item.room.discount,
          createdBy: item.createdBy.userName,
        }));
        this.data = tableData;
        !this.data.length ? (this.noData = true) : (this.noData = false);
      },
      error: (err: HttpErrorResponse) => {
        this._NotifyService.ServerError(err.error.message);
      }
    });
  }

  runOp(data: any) {
    if (data.opInfo == 'Edit') {
      this.openAdDialog('Edit', data.row);
    }
    if (data.opInfo == 'View') {
      this.openAdDialog('View', data.row);
    }
  }

  openAdDialog(mode: string, row?: Ads.IAds) {
    const dialogRef = this._dialog.open(AdsDialogComponent, {
      data: { row, mode, rooms: this.rooms },
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (mode === 'Edit') this.editAd(result._id, result);
        else this.addAd(result);
      }
    });
  }

  addAd(data: Ads.IAdsForm) {
    this._AdsService
      .onAddAd(data)
      .subscribe({
        next: (res) => {
          this._NotifyService.Success('Data is Sent Successfully');
        },
        error: (errRes) => {
          const errMes = errRes.error.message;
          this._NotifyService.ServerError(errMes);
        },
        complete: () => {
          this.getAds();
        },
      });
  }

  editAd(_id: string, data: Ads.IAdsForm) {
    this._AdsService
      .onEditAd(_id, {discount: data.discount, isActive: data.isActive})
      .subscribe({
        next: (res) => {
          this._NotifyService.Success('Data is Sent Successfully');
        },
        error: (errRes) => {
          const errMes = errRes.error.message;
          this._NotifyService.ServerError(errMes);
        },
        complete: () => {
          this.getAds();
        },
      });
  }

  
  getAllRooms() {
    let params = {
      size: 100000,
      page: 1
    }
    this._HttpClient.get(HttpEndPoints.Rooms.RoomsList, { params: params }).subscribe({
      next: (res: any) => {
        this.rooms = res.data.rooms;
      }
    })
  }

}
