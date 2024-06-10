export namespace Review {

    export interface IReviewList {
        roomReviews: IReview[];
        totalCount: number;
    }

    export interface IRResponse {
        success: boolean;
        message: string;
        data: IReviewList;
    }
    export interface IRUser {
        _id: string,
        userName: string,
        profileImage: string
    }

    export interface IRRoom {
        _id: string,
        roomNumber: string
    }

    export interface IReviewProp {
        review: string;
        rating: number;
        roomId: string;
    }

    export interface IReview extends Omit<IReviewProp, "roomId"> {
        _id?: string;
        room: IRRoom;
        user: IRUser;
        createdAt?: Date;
        updatedAt?: Date;
    }
}