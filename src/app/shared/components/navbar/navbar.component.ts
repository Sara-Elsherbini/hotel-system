import { Component, OnInit} from '@angular/core';
import { NotifyService } from 'src/app/common';
// import { AuthService } from 'src/app/auth/service/auth.service';
import { TokenService } from 'src/app/common/services/token/token.service';
// import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  UserName: string = "";
  userData!:any;
  imgUrl: string = "";

  constructor(
    private _tokenService: TokenService,
    private _NotifyService: NotifyService,
    ) {
  }

  ngOnInit(): void {
    this.UserName = this._tokenService.getName();
    this.getImageUrl()
  }

  getImageUrl() {
    this._tokenService.getCurrentUser().subscribe({
      next: (res: any) => {
        this.userData = res.data.user;
        this.imgUrl =  this.userData.profileImage;
      },
      error: (err) => {
        const errMes=err.error.message;
        this._NotifyService.ServerError(errMes);
      }
    })
  }

  profileDialog() {
    // const dialogRef = this.dialog.open(ProfileComponent, {
    //   data: this.userData
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //   }
    // });
  }


  changePasswordDialog() {
    // const dialogRef = this.dialog.open(ChangePasswordComponent);
  }

<<<<<<< HEAD


  onclick(){
    let elms = document.querySelector(".cdk-overlay-container");
    console.log(elms?.innerHTML);
  }


=======
>>>>>>> 03b595f557947413d254ce437fb9a3976b901a60
  logout() {
    this._tokenService.logout()
  }


}
