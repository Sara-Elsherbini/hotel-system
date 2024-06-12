import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../models/review.model';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private _HttpClient: HttpClient) { }

  getReviews(roomId: string): Observable<Review.IRResponse>{
    return this._HttpClient.get<Review.IRResponse>(`${HttpEndPoints.Review.Default}/${roomId}`);
  }

  addReviews(newData: Review.IReviewProp){
    return this._HttpClient.post<Review.IRResponse>(`${HttpEndPoints.Review.Default}`, newData);
  }
}
