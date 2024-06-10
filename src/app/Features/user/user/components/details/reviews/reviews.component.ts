import { Component, Input, OnInit } from '@angular/core';
import { NotifyService, TokenService } from 'src/app/common';
import { Review } from '../../../models/review.model';
import { ReviewsService } from '../../../services/reviews/reviews.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NoDataComponent } from 'src/app/shared/components/no-data/no-data.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  @Input() id!: string;
  isAuth!: boolean;
  head: number = 0;
  increaseBy: number = 2;
  viewReviews: Review.IReview[] = [];
  allReviews: Review.IReview[] = [];
  starsIndex: number[] = [1, 2, 3, 4, 5];

  reviewForm: FormGroup = new FormGroup({
    rating: new FormControl(-1, [Validators.required]),
    review: new FormControl(null, [Validators.required]),
  });

  hoverStar: number = -1;

  constructor(private _tokenService: TokenService, private _NotifyService: NotifyService, private _ReviewsService: ReviewsService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.isAuth = this._tokenService.isAuthenticated();
    if (this.isAuth) this.getReviews();
  }

  getReviews() {
    this._ReviewsService.getReviews(this.id).subscribe({
      next: (res) => {
        this.allReviews = res.data.roomReviews;
      },
      error: (err) => {
        this._NotifyService.ServerError(err.error.message)
      },
      complete: () => {
        this.viewReviews = [];
        this.head = 0;
        this.showMoreReviews();
      }
    })
  }

  addReview() {
    if(this.isAuth){
      this._ReviewsService.addReviews({ ...this.reviewForm.value, roomId: this.id }).subscribe({
        next: (res) => {
          this._NotifyService.Success("Added Successfully")
        },
        error: (err) => {
          this._NotifyService.ServerError(err.error.message)
        },
        complete: () => {
          this.getReviews();
        }
      })
    }else{
      this._dialog.open(NoDataComponent);
    }
    
  }

  setHover(index: number) {
    this.hoverStar = index;
  }

  resetHover() {
    this.hoverStar = -1;
  }

  showMoreReviews() {
    const startIndex = this.head;
    const nextHub = (this.head + this.increaseBy);
    const endIndex = nextHub >= this.allReviews.length ? this.allReviews.length : nextHub;
    this.viewReviews.push(...this.allReviews.slice(startIndex, endIndex));
    this.head += this.increaseBy;

  }

  sayHi(id: number) {
    console.log(id);
  }

  public get starValue() {
    return this.reviewForm.controls['rating'].value;
  }

  public get review() {
    return this.reviewForm.controls['review'];
  }

}
