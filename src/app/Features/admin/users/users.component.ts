import { UsersService } from './services/users.service';
import { Component } from '@angular/core';
import { Users } from './models/users';
import { Table } from 'src/app/shared/components/table/model/Table.namespace';
import { HttpErrorResponse } from '@angular/common/http';
import { ViewUserDialogComponent } from './components/view-user-dialog/view-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  UsersList: Users.IUsersList | any;
  pageNum: number = 1;
  pageSizing: number = 10;
  noData: Boolean = false;
  data: Users.IUser[] = [];

  // totalCount:number=0


  columns: Table.IColumn[] = [
    {
      header: 'Name',
      property: 'userName',
    },
    {
      header: 'Email',
      property: 'email',
    },
    {
      header: 'Phone number',
      property: 'phoneNumber',
      // isDate: true,
    },
    {
      header: 'Country',
      property: 'country',
      // isDate: true,
    },
  ];
  operators: Table.IOperators[] = [

    {
      icon: 'visibility',
      title: 'View',
    }

  ];

  constructor( private UsersService: UsersService,
    public _dialog: MatDialog

    ){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    let param = {
      page: this.pageNum,
      size: this.pageSizing,
    };
    this.UsersService.getAllUsers(param).subscribe({
      next: (res: Users.IUserResponse) => {
        console.log(res.data)
        this.UsersList= res.data
        this.data = res.data.users



        // this.UsersList = res.data.users;
        // console.log(this.UsersList);

        // const tableData = res.data.facilities.map((item: any) => ({
        //   ...item,
        //   createdBy: item.createdBy.userName,
        // }));
        // this.data = tableData;



        // console.log(this.data)
        // !this.data.length ? (this.noData = true) : (this.noData = false);
      },
      error: (err: HttpErrorResponse) => {
        // this._NotifyService.ServerError(err.error.message);
        console.log(err);

      },
      complete: () => {},
    });
  }

  runOp(data: any) {

    console.log(data);
    this.openViewUser(data);

  }
  openViewUser(data:any) {
    // row ? (this.FacilityId = row._id) : null;
    const dialogRef = this._dialog.open(ViewUserDialogComponent, {
      data: data,

      width: '30%',
    });
    console.log(data.row)


    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('result', result);
      // if (result) {
      //   if (!this.FacilityId) {
      //     this.addFacility(result);
      //   } else this.editFacility(result);
      // }
    });
  }

  pageNumber(event: number) {
    this.pageNum = event;
    this.getUsers();
  }

  pageSize(event: number) {
    this.pageSizing = event;
    this.getUsers();
  }
}
