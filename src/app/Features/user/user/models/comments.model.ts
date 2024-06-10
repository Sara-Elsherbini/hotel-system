export namespace Comments {

    export interface ICommentsList {
        roomComments: IComment[];
        totalCount: number;
    }

    export interface ICResponse {
        success: boolean;
        message: string;
        data: ICommentsList;
    }
    export interface ICUser {
        _id: string,
        userName: string,
        profileImage: string
    }

    export interface ICRoom {
        _id: string,
        roomNumber: string;
    }

    export interface ICommentsProp {
        comment: string;
        roomId: string;
    }

    export interface IComment extends Omit<ICommentsProp, "roomId"> {
        _id: string;
        room: ICRoom;
        user: ICUser;
        createdAt?: Date;
        updatedAt?: Date;
    }
}