import {useEffect, useState } from "react";
import {IPostDummyModel} from "../../model/IPostDummyModel.ts";
import {postServiceDummyJson} from "../../services/api.service.ts";
import {PostDummyjsonComponent} from "../post-dummyjson-component/PostDummyjsonComponent.tsx";






export const PostsDummyjsonComponent = () => {

    const [posts, setPosts] = useState <IPostDummyModel[]> ([])

    useEffect(() => {
        postServiceDummyJson.getPosts().then((allPosts) => {
                setPosts(allPosts)
            })

    }, [])

    return (
        <div className='mx-auto grid grid-cols-4 gap-4 m-32'>
            {
                posts.map((post: IPostDummyModel) => <PostDummyjsonComponent item={post} key={post.id} />)
            }
        </div>
    );
};