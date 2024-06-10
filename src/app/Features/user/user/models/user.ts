
import { Rooms } from "src/app/Features/admin/rooms/models/rooms";

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
  
   export interface IFavResponse {
        success: boolean
        message: string
        data: IFavListRooms
      }
      
      export interface IFavListRooms {
        favoriteRooms: FavoriteRoom[]
        totalCount: number
      }
      
      export interface FavoriteRoom {
        _id: string
        rooms: Rooms.IRoom[]
        user: Rooms.IUser
        createdAt: string
        updatedAt: string
      }
      
  
}




