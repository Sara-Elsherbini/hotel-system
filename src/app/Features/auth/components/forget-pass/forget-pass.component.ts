import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotifyService } from 'src/app/common/services/notify.service';
import { Auth } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent {
  hide:boolean=true;
  forgetPassForm:FormGroup=new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  })

  constructor(private _AuthService:AuthService,private _NotifyService:NotifyService, private _Router:Router){

  }
  ngOnInit(): void {


  }

  onForgetPass(data:FormGroup){
    console.log(data);

    this._AuthService.forgetPass(data.value).subscribe({
      next:(res:Auth.IForgetPassRes)=>{
        console.log(res);
      },
      error:(error:HttpErrorResponse)=>{
      const errMes=error.error.message;
      this._NotifyService.ServerError(errMes);
      },
      complete:()=>{
      this._NotifyService.Success("Password reset token sent successfully")
      this._Router.navigateByUrl('auth/reset-pass')
      }
    })
  }
}
