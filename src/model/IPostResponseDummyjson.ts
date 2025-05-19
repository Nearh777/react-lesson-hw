import {IPostDummyModel} from "./IPostDummyModel.ts";

export interface IPostResponseDummyjson {
    posts: IPostDummyModel[];
    total: number,
    skip: number,
    limit: number
}