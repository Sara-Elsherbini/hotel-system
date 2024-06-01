import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Ads from '../../model/Ads.namespace';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';

@Component({
  selector: 'app-ads-dialog',
  templateUrl: './ads-dialog.component.html',
  styleUrls: ['./ads-dialog.component.scss']
})
export class AdsDialogComponent {

  isViewMode: boolean = false;
  isEdit: boolean = false;
  formGroup!: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<AdsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ads.IAdDialog
  ) {

  }

  ngOnInit() {
    if (this.data.mode == 'View') {
      this.isViewMode = true
    }
    if (this.data.mode == 'Edit') {
      this.isEdit = true;
    }
    this.formGroup = new FormGroup({
      room: new FormControl({value: null, disabled: this.isViewMode || this.isEdit}, [Validators.required]),
      isActive: new FormControl({value: null, disabled: this.isViewMode}, [Validators.required]),
      discount: new FormControl({value: null, disabled: this.isViewMode}, [Validators.required])
    })

    if(this.isEdit || this.isViewMode) this.formGroup.addControl("_id",new FormControl(null))

    if (this.data.row) this.formGroup.patchValue(
      (({ _id, room, isActive, ...rest }) => {
        return { _id: _id, discount: room.discount, isActive: isActive, room: room._id }
      })(this.data.row))

    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get room() {
    return this.formGroup.get("room");
  }

  get isActive() {
    return this.formGroup.get("isActive");
  }

  get discount() {
    return this.formGroup.get("discount");
  }
}
