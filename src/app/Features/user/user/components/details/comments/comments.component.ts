import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comments } from '../../../models/comments.model';
import { NotifyService, TokenService } from 'src/app/common';
import { CommentsService } from '../../../services/comments/comments.service';
import { MatDialog } from '@angular/material/dialog';
import { NoDataComponent } from 'src/app/shared/components/no-data/no-data.component';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { Review } from '../../../models/review.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  @Input() id!: string;
  isAuth!: boolean;
  userId!: string;
  commentId!: string | null;
  head: number = 0;
  increaseBy: number = 2;
  viewComments: Comments.IComment[] = [];
  allComments: Comments.IComment[] = [];

  CommentForm: FormGroup = new FormGroup({
    comment: new FormControl(null, [Validators.required]),
  });


  constructor(private _tokenService: TokenService, private _NotifyService: NotifyService, private _CommentsService: CommentsService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.isAuth = this._tokenService.isAuthenticated();
    if (this.isAuth) {
      this.userId = this._tokenService.getID();
      this.getComments();
    }
  }

  getComments() {
    this._CommentsService.getComments(this.id).subscribe({
      next: (res) => {
        this.allComments = res.data.roomComments;
      },
      error: (err) => {
        this._NotifyService.ServerError(err.error.message)
      },
      complete: () => {
        this.viewComments = [];
        this.head = 0;
        this.showMoreComments();
      }
    })
  }

  submit() {
    if (this.isAuth) {
      if (this.commentId) this.editComment()
      else this.addComment();
    } else {
      this._dialog.open(NoDataComponent);
    }
  }

  addComment() {
    this._CommentsService.addComments({ ...this.CommentForm.value, roomId: this.id }).subscribe({
      next: (res) => {
        this._NotifyService.Success("Added Successfully")
      },
      error: (err) => {
        this._NotifyService.ServerError(err.error.message)
      },
      complete: () => {
        this.getComments();
      }
    })
  }

  editComment() { 
    this._CommentsService.editComment(this.commentId as string, this.CommentForm.value).subscribe({
      next: (res) => {
        this._NotifyService.Success("Updated Successfully")
      },
      error: (err) => {
        this._NotifyService.ServerError(err.error.message)
      },
      complete: () => {
        this.commentId = null;
        this.CommentForm.reset();
        this.getComments();
      }
    })
  }

  deleteComment(id: string) {
    if (this.isAuth) {
      this._CommentsService.deleteComment(id).subscribe({
        next: (res) => {
          this._NotifyService.Success("Deleted Successfully")
        },
        error: (err) => {
          this._NotifyService.ServerError(err.error.message)
        },
        complete: () => {
          this.getComments();
        }
      })
    } else {
      this._dialog.open(NoDataComponent);
    }
  }

  onEditComment(id: string, value: string) {
    this.commentId = id;
    this.CommentForm.patchValue({
      comment: value
    })
  }

  onDeleteComment(id: string) {
    const dialogRef = this._dialog.open(DeleteComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteComment(id);
      }
    })

  }

  showMoreComments() {
    const startIndex = this.head;
    const nextHub = (this.head + this.increaseBy);
    const endIndex = nextHub >= this.allComments.length ? this.allComments.length : nextHub;
    this.viewComments.push(...this.allComments.slice(startIndex, endIndex));
    this.head += this.increaseBy;
  }

  public get comment() {
    return this.CommentForm.controls['Comment'];
  }

}
