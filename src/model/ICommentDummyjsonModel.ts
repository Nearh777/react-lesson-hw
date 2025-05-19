import {IUserDummyjson} from "./IUserDummyjson.ts";

export interface ICommentDummyjsonModel {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: IUserDummyjson;
}
