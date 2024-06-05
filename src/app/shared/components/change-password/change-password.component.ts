import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { UsersService } from 'src/app/admin/users/services/users.service';
// import { ToasterService } from '../../../../shared/toaster/service/toaster.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  formData!: FormGroup;
  hideOld: boolean = true;
  hideNew: boolean = true;
  hideConfirm: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
  ) { }

  ngOnInit(): void {
    let passwordValidators = [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)];

    this.formData = new FormGroup({
      oldPassword: new FormControl(null, passwordValidators),
      newPassword: new FormControl(null, passwordValidators),
      confirmPassword: new FormControl(null, passwordValidators),
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
