import {IReactions} from "./IReactionDummyPost.ts";

export interface IPostDummyModel {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReactions;
    views: number;
    userId: number;
}




