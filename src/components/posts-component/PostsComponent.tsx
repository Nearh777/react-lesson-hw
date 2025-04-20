import {useEffect, useState} from "react";
import {PostModel} from "../../model/PostModel.ts";
import { loadPosts } from "../../service/api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";


export const PostsComponent = () => {

    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        loadPosts().then(value => {setPosts(value)});
    })

    return (
        <div className='mx-auto grid grid-cols-4 gap-4 '>
            {
                posts.map((post: PostModel) => <PostComponent post={post} key={post.id}/>)
            }
        </div>
    );
};