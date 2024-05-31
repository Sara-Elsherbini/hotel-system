export namespace Rooms {

  export interface IRoomsRes {
    success: boolean;
    message: string;
    data:    IRoomsList;
}
  export interface IRoomsList {
    rooms:      IRoom[];
    totalCount: number;
}

export interface IRoom {
    _id:        string;
    roomNumber: string;
    price:      number;
    capacity:   number;
    discount:   number;
    facilities: IFacility[];
    createdBy:  IUser;
    images:     string[];
    createdAt:  Date;
    updatedAt:  Date;
}

export interface IUser {
    _id:      string;
    userName: string;
}

export interface IFacility {
    _id:  string;
    name: string;
}

export interface IParams {
  page:number;
  size:number;
  [Key:string]:any
}

}
