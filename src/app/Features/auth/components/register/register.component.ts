import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NotifyService } from 'src/app/common/services/notify.service';
import { Auth } from '../../models/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  hide: boolean = true;
  hideConfirm: boolean = true;

  image!: File;
  url!: any;

  registerForm!: FormGroup;
  constructor(private _AuthService: AuthService, private _NotifyService: NotifyService, private _router: Router) {

  }
  ngOnInit(): void {
    const DEFAULT_VALIDATORS = [Validators.required];
    const EMAIL_VALIDATORS = [...DEFAULT_VALIDATORS, Validators.email]
    const PASSWORD_VALIDATORS = [...DEFAULT_VALIDATORS, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)];
    // const ROLE_VALIDATORS = [...DEFAULT_VALIDATORS, Validators.pattern(/^(admin|user)$/)];
    const PHONE_VALIDATORS = [...DEFAULT_VALIDATORS, Validators.pattern(/^01[0125][0-9]{8}$/gm)];

    this.registerForm = new FormGroup({
      userName: new FormControl(null, DEFAULT_VALIDATORS),
      email: new FormControl(null, EMAIL_VALIDATORS),
      password: new FormControl(null, PASSWORD_VALIDATORS),
      confirmPassword: new FormControl(null, PASSWORD_VALIDATORS),
      phoneNumber: new FormControl(null, PHONE_VALIDATORS),
      country: new FormControl(null, DEFAULT_VALIDATORS),
      role: new FormControl("user"),
      profileImage: new FormControl(null)
    })
  }

  onRegister(registerForm: FormGroup) {
    const data = new FormData();

    for (let key in registerForm.value) {
      if (key === "profileImage") continue;
      data.append(key, registerForm.value[key]);
    }

    if (this.image) data.append("profileImage", this.image);

    if (this.registerForm.valid) {
      this._AuthService.register(data).subscribe({
        next: (res: any) => {
          this._NotifyService.Success("Registered Successfully");
        },
        error: (error: HttpErrorResponse) => {
          const errMes = error.error.message;

          this._NotifyService.ServerError(errMes);
        },
        complete: () => { this._router.navigate(["../"]) }
      })
    }

  }

  onSelect(event: any) {
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    this.image = files[0];
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }
}
