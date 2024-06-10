export namespace UserModel {

 export interface IUserRoomsRes {
  success: boolean;
  message: string;
  data: IUserRoomsList;
 }
 export interface IUserRoomsList {
  rooms: IExploreRoom[];
  totalCount: number;
 }


 export interface IExploreRoom {
  _id: string;
  roomNumber: string;
  price: number;
  capacity: number;
  discount: number;
  facilities: IFacility[];
  createdBy: ICreatedBy[];
  images: any;
  createdAt: Date;
  updatedAt: Date;
 }
 export interface ICreatedBy {
  _id: string;
  userName: string;
 }
 export interface IFacility {
  _id: string;
  name: string;


 }
 export interface IParams {
  page: number;
  size: number;
  startDate?: Date|string;
  endDate?: Date|string;
  [Key: string]: any
 }
}



