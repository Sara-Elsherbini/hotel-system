import { Component } from '@angular/core';
import { TokenService } from 'src/app/common/services/token/token.service';
import { NotifyService } from 'src/app/common';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { IChangePassword, UserService } from 'src/app/common/services/user/user.service';

@Component({
  selector: 'app-navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.scss']
})
export class NavbarDropdownComponent {

  UserName: string = "";
  userData!: any;
  imgUrl: string = "";

  constructor(
    private _tokenService: TokenService,
    private _userservice: UserService,
    private _NotifyService: NotifyService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.UserName = this._tokenService.getName();
    this.getImageUrl()
  }

  getImageUrl() {
    this._userservice.getCurrentUser().subscribe({
      next: (res: any) => {
        this.userData = res.data.user;
        this.imgUrl = this.userData.profileImage;
      },
      error: (err) => {
        const errMes = err.error.message;
        this._NotifyService.ServerError(errMes);
      }
    })
  }

  profileDialog() {
    this.dialog.open(ProfileComponent, {
      data: this.userData
    });
  }

  changePasswordDialog() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {width:"30%"});

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.onChangePassword(result);
    })
  }

  onChangePassword(data: IChangePassword) {

    this._userservice.onChangePassword(data).subscribe({
      next: (res: any) => {
        this._NotifyService.Success("Password Changed Successfully");
      },
      error: (err) => {
        const errMes = err.error.message;
        this._NotifyService.ServerError(errMes);
      }
    })

  }

  logout() {
    this._tokenService.logout()
  }

}
