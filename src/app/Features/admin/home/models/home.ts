export namespace Home {
  export interface IHomeRes {
    success: boolean;
    message: string;
    data: IHomeData;
  }

  export interface IHomeData {
    rooms: number;
    facilities: number;
    bookings: IBookings;
    ads: number;
    users: IUsers;
  }

  export interface IBookings {
    pending: number;
    completed: number;
  }

  export interface IUsers {
    user: number;
    admin: number;
  }
}
