import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEndPoints } from 'src/app/common/setting/HttpEndPoients';
import { Comments } from '../../models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _HttpClient: HttpClient) { }

  getComments(roomId: string): Observable<Comments.ICResponse>{
    return this._HttpClient.get<Comments.ICResponse>(`${HttpEndPoints.Comment.Default}/${roomId}`);
  }

  addComments(newData: Comments.ICommentsProp){
    return this._HttpClient.post<Comments.ICResponse>(`${HttpEndPoints.Comment.Default}`, newData);
  }

  editComment(commentId:string, newData: Comments.ICommentsProp){
    return this._HttpClient.patch<Comments.ICResponse>(`${HttpEndPoints.Comment.Default}/${commentId}`, newData);
  }

  deleteComment(commentId: string): Observable<Comments.ICResponse>{
    return this._HttpClient.delete<Comments.ICResponse>(`${HttpEndPoints.Comment.Default}/${commentId}`);
  }
}
