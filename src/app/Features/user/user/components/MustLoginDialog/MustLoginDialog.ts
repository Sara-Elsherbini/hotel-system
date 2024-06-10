import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/common';

@Component({
  selector: 'app-fav-pop',
  templateUrl: './MustLoginDialog.html',
  styleUrls: ['./MustLoginDialog.scss']
})
export class MustLoginDialog {
  constructor(public dialogRef: MatDialogRef<MustLoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, public _MatDialog: MatDialog, private _Router: Router,private _TokenService:TokenService
  ) {
    console.log(data);

   }
  navigateToLogin(){
         this._TokenService.logout()
         this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
