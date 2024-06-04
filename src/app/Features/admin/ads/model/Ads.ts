import { Rooms } from "../../rooms/models/rooms";

export namespace Ads {

    export interface IAdsForm{
        room?: string,
        discount: number,
        isActive: boolean
    }

    interface ICreatedBy {
        _id: string,
        userName: string
    }

    export interface IAds extends Omit<IAdsForm, "room">{
        _id?: string,
        room: Rooms.IRoom,
        createdBy: ICreatedBy,
        createdAt: string,
        updatedAt: string
    }

    export interface IAdDialog{
        row: IAds,
        mode: string,
        rooms: Rooms.IRoom[]
    }

    export interface IAdsList {
        ads: IAds[];
        totalCount: number,
    }

    export interface IParams {
        page: number;
        size: number;
        [Key: string]: any
    }

    export interface IResponse{
        success: boolean,
        message: string,
    }

    export interface IResponseSingle extends IResponse{
        data: IAds,
    }

    export interface IResponseMulti extends IResponse{
        data: IAdsList,
    }
}
export default Ads;
