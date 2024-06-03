export namespace Booking{

  export interface IBookingRes {
    success: boolean;
    message: string;
    data:    IBookingData;
  }

  export interface IBookingData {
    booking:    IBooking[];
    totalCount: number;
  }

  export interface IBooking {
    _id:        string;
    startDate:  Date;
    endDate:    Date;
    totalPrice: number;
    user:       IUser;
    room:       IRoom;
    status:     string;
    createdAt:  Date;
    updatedAt:  Date;
  }

  export interface IRoom {
    _id:        string;
    roomNumber: string;
  }

  export interface IUser {
    _id:      string;
    userName: string;
  }
  export interface IParams {
    page:number;
    size:number;
    [Key:string]:any
  }

}
