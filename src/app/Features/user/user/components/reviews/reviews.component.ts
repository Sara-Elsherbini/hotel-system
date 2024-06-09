import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/common';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  isAuth!: boolean;

  constructor(private _tokenService: TokenService){}

  ngOnInit(): void {
      this.isAuth = this._tokenService.isAuthenticated();
  }

}
