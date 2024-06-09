import { Rooms } from "src/app/Features/admin/rooms/models/rooms"

export namespace User {

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


