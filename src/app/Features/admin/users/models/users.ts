// import { IUser } from './../../rooms/models/rooms';
export namespace Users {
    export interface IUserResponse {
        success: boolean;
        message: string;
        data:
            IUsersList;

    }

    export interface IUsersList {
        users: IUser[];
        totalCount: number;
      }

    export interface IUser {
        _id: string;
        userName: string;
        email: string;
        phoneNumber: number;
        country: string;
        role: string;
        profileImage: string;
        verified: boolean;
        createdAt: string; // Alternatively, you can use Date if you plan to convert it
        updatedAt: string; // Alternatively, you can use Date if you plan to convert it
      totalCount: number;

    }

    export interface IAddUser{
      userName: string;
      email: string;
      phoneNumber: number;
      country: string;
      role: string;
      profileImage: string;
      password:number;
      confirmPassword:number;

    }

    export interface IDataMode {
      mode: string;
      row: IUser
    }
    export interface IParams {
        page:number;
        size:number;
        [Key:string]:any
      }

   

      // export interface CreateUserResponse {
      //   success: boolean;
      //   message: string;
      //   // data:IUserRes
      // }

       }
