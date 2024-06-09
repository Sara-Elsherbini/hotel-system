import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav-pop',
  templateUrl: './fav-pop.component.html',
  styleUrls: ['./fav-pop.component.scss']
})
export class FavPopComponent {
  constructor(private router: Router, private DialogRef:DialogRef){}

  navigateToLogin(){
          this.router.navigate(['/auth']);
          this.DialogRef.close()
          localStorage.removeItem('token')
          localStorage.removeItem('user')

  }

}
