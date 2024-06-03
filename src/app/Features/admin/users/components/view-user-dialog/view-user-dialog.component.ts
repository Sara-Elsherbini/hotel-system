import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEditFacilitiesDialog } from '../../../facilities/components/add-edit-facilities/add-edit-facilitiesDialog';
import { Facilities } from '../../../facilities/models/facilites';

@Component({
  selector: 'app-view-user-dialog',
  templateUrl: './view-user-dialog.component.html',
  styleUrls: ['./view-user-dialog.component.scss']
})
export class ViewUserDialogComponent {
  userName:string='';
  userCountry:string='';
  userPhoneNumber:number=0;

  constructor(
    private dialogRef: MatDialogRef<ViewUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    console.log(data)


  }

  ngOnInit() {
    console.log();

      this.userName = this.data.row.userName;
      this.userCountry=this.data.row.country;
      this.userPhoneNumber=this.data.row.phoneNumber;

    }
    }

  
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }


