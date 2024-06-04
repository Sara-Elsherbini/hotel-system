import { MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersService } from './../../services/users.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { NotifyService } from 'src/app/common/services/notify.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  imgSrc:any;

  addUserForm:FormGroup =new FormGroup({ 
    userName:new FormControl(null, [Validators.required, Validators.pattern(/^[a-z]+[0-9]$/)]),
    email:new FormControl(null,[Validators.required, Validators.email]),
    country:new FormControl(null,[Validators.required]),
    phoneNumber:new FormControl(null, [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]),
    profileImage:new FormControl(null),
    password:new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|<>?]).{6,}$/)]),
    confirmPassword:new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|<>?]).{6,}$/)]),
    role:new FormControl(null)
  })

  constructor(private UsersService:UsersService, private dialogRef:DialogRef, private _NotifyService: NotifyService){}


  
files: File[] = [];

// onSelect(event:any) {
  
//   console.log(event);
//   this.files.push(...event.addedFiles);
//   console.log(this.files);
//   this.imgSrc = this.files[0];
//   console.log(this.imgSrc);
  
  
// }


onSelect(event: any) {
  this.files.push(...event.addedFiles);
  if (this.files.length > 0) {
    this.addUserForm.patchValue({
      profileImage: this.files[0]
    });
  }
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

onAddUser(data:FormGroup){
  console.log(data)
    
  let myData = new FormData();

  myData.append("userName", data.value.userName);
  myData.append("email", data.value.email);
  myData.append("phoneNumber", data.value.phoneNumber);
  myData.append("country", data.value.country);
  myData.append("password", data.value.password);
  myData.append("confirmPassword", data.value.confirmPassword);
  // myData.append("profileImage", this.imgSrc);
  if (this.addUserForm.value.profileImage) {
    myData.append("profileImage", this.addUserForm.value.profileImage);
  }
  myData.append("role", data.value.role);



  this.UsersService.addUser(myData).subscribe({
    next: (res: any) => {
      console.log(res)
      
      
      this._NotifyService.Success("User added succesfuly");
    },
    error: (error: HttpErrorResponse) => {
      const errMes = error.error.message;
  
      this._NotifyService.ServerError(errMes);
    },
    complete: () => { 
      this.dialogRef.close();

     }
  })

}





}
