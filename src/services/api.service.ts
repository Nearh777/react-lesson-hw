import {IUser} from "../model/IUser.ts";
import {IUserDummyModel} from "../model/IUserDummyModel.ts";
import {IUserDummyResp} from "../model/IUserDummyResp.ts";
import {IPostModel} from "../model/IPost.ts";
import {IPostResponseDummyjson} from "../model/IPostResponseDummyjson.ts";
import {IPostDummyModel} from "../model/IPostDummyModel.ts";
import {ICommentJsonPlaceholderModel} from "../model/ICommentJsonPlaceholderModel.ts";
import {ICommentDummyjsonModel} from "../model/ICommentDummyjsonModel.ts";
import {ICommentResponseDummyjson} from "../model/ICommentResponseDummyjson.ts";

export const userServiceJsonPlaceholder = {
    getUsers: async (): Promise<IUser[]> => {
       return  await fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
    }
}


export const userServiceDummyjson = {
    getUsers: async (): Promise<IUserDummyModel[]> => {
        const response: IUserDummyResp = await fetch('https://dummyjson.com/users?limit=0')
            .then(user => user.json());
        return response.users;
    }
}


export const postServiceJsonPlaceholder = {
    getPosts: async (): Promise<IPostModel[]> => {
        return  await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
    }
}


export const postServiceDummyJson = {
    getPosts: async (): Promise<IPostDummyModel []> => {
        const response: IPostResponseDummyjson = await fetch('https://dummyjson.com/posts?limit=0')
            .then(user => user.json());
        return response.posts;
    }
}


export const commentServiceJsonPlaceholder = {
    getComments: async (): Promise<ICommentJsonPlaceholderModel[]> => {
        return  await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
    }
}


export const commentServiceDummyJson = {
    getComments: async (): Promise<ICommentDummyjsonModel[]> => {
        const response: ICommentResponseDummyjson = await fetch('https://dummyjson.com/comments?limit=0')
            .then(comment => comment.json());
        return response.comments;
    }
}


