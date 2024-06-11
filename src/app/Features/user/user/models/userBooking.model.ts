export namespace Booking {
    export interface IBookingList {
        roomBookings: IBooking[];
        totalCount: number;
    }

    export interface IBResponse {
        success: boolean;
        message: string;
    }

    export interface IBResponseSingle extends IBResponse{
        data: {booking: IBooking};
    }

    export interface IBResponseMulti extends IBResponse{
        data: IBookingList;
    }


    export interface IBUser {
        _id: string,
    }

    export interface IBookingProp {
        room: string;
        totalPrice: number;
        startDate: string;
        endDate: string;
    }

    export interface IBooking extends IBookingProp {
        _id?: string;
        status: string;
        user: IBUser;
        createdAt?: Date;
        updatedAt?: Date;
    }

    export interface IBookingCached extends Omit<IBookingProp, "room">{
        id: string;
        numberOfNights: number,
        roomPrice: number,
        roomDiscount: number,
        roomName: string,
    }
}
