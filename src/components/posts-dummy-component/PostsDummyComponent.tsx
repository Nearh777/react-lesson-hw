import {useEffect, useState} from "react";
import { PostDummyModel } from "../../model/PostDummyModel";
import {loadDummyPosts} from "../../service/api.service.ts";
import { PostDummyComponent } from "../post-dummy-component/PostDummyComponent.tsx";




export const PostsDummyComponent = () => {

    const [posts, setPosts] = useState<PostDummyModel[]>([]);

    useEffect(() => {
        loadDummyPosts().then(value => {setPosts(value)})
    })

    return (

        <div className='mx-auto grid grid-cols-4 gap-4 '>
            {
                posts.map((post: PostDummyModel) => <PostDummyComponent post={post} key={post.id}/>)
            }
        </div>

    );
};