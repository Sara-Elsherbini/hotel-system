import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotifyService } from 'src/app/common/services/notify.service';

@Component({
  selector: 'app-rest-pass',
  templateUrl: './rest-pass.component.html',
  styleUrls: ['./rest-pass.component.scss']
})
export class RestPassComponent implements OnInit {
  //variables
  hide:boolean=true;

  ngOnInit() {}
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,private _NotifyService:NotifyService
  ) {}

  //  reset password form
  resetPassword = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    seed: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
      ),
    ]),

    confirmPassword: new FormControl(null, [
      Validators.required,
      this.passwordMatchValidator.bind(this),
    ]),
  });


//this is a custom validator like (pattern, required ....)
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const confirmPassword = control.value;
    const password = this.resetPassword?.get('password')?.value;
    if (password == confirmPassword) {
        return null; //return that has not errors
    }else{
       return { passwordMisMatch: true };
       //key and value
    }
    
 
  }

  onReset(resetFormData: FormGroup) {
    this._AuthService.resetPassword(resetFormData.value).subscribe({
      next: (res) => { 
        
       },
      error: (error: HttpErrorResponse) => {
        const errMes=error.error.message;
  
        this._NotifyService.ServerError(errMes);
      },
      complete:()=>{this._NotifyService.Success("Data is Sent Successfully")
      this._Router.navigate(['/auth'])

    }
    })
  }
}
