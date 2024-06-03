import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Booking } from '../../models/booking';
@Component({
  selector: 'app-viewBookingDialog',
  templateUrl: './viewBookingDialog.component.html',
  styleUrls: ['./viewBookingDialog.component.scss']
})
export class ViewBookingDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ViewBookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Booking.IBooking
  ) {

  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
