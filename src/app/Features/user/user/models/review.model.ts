export namespace Review {

    export interface IRUser {
        _id: string,
        userName: string,
        profileImage: string
    }

    export interface IRRoom {
        _id: string,
        roomNumber: string
    }

    export interface IReview{
        _id?: number;
        review: string;
        rating: number;
        createdAt?: Date;
        updatedAt?: Date;
    }
}