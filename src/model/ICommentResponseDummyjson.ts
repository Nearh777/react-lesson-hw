import {ICommentDummyjsonModel} from "./ICommentDummyjsonModel.ts";

export interface ICommentResponseDummyjson {
    comments: ICommentDummyjsonModel[],
    total: number,
    skip: number,
    limit: number
}