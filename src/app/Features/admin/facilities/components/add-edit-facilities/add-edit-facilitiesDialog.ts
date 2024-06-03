import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Facilities } from '../../../facilities/models/facilites';
@Component({
  selector: 'app-facilitiesList',
  templateUrl: './add-edit-facilitiesDialog.html',
  styleUrls: ['./add-edit-facilitiesDialog.scss']
})
export class AddEditFacilitiesDialog implements OnInit {
  facilityId: string='';
  facilityName: string = '';
  isViewMode: boolean = false;
  constructor(
    private dialogRef: MatDialogRef<AddEditFacilitiesDialog>,
    @Inject(MAT_DIALOG_DATA) public data:Facilities.IDataMode
  ) {

  }

  ngOnInit() {
    console.log();

    if (this.data.row) {
      this.facilityName = this.data.row.name;
      this.facilityId=this.data.row._id
    }
    if (this.data.mode=='View') {
      this.isViewMode=true
    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
