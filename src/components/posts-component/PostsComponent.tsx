import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import { IBaseResponseModel } from "../../models/IBaseResponseModel.ts";
import {getAll} from "../../servises/general.api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAll<IBaseResponseModel & {posts: IPost[]}>('/posts')
            .then(({posts}) => {
            setPosts(posts);
        })
    }, [])


    return (
        <div className='my-40 grid grid-cols-4 gap-4 '>
            {posts.map((post: IPost) => <PostComponent key = {post.id} post = {post} />)}
        </div>
    );
};