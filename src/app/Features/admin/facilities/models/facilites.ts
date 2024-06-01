export namespace Facilities {
  export interface IFacilitiesRes {
    success: boolean;
    message: string;
    data:    IFacilitiesList;
}

  export interface IFacilitiesList {
    facilities: IFacility[];
    totalCount: number;
  }

  export interface IFacility {
    _id: string;
    name: string;
    createdBy: IUser;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface IUser {
    _id: string;
    userName: string;
  }
  export interface IParams {
    page:number;
    size:number;
    [Key:string]:any
  }
  export interface IDataMode {
    mode: string;
    row: IFacility
  }
}
