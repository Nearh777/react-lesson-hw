import {useEffect, useState} from "react";
import {postServiceJsonPlaceholder} from "../../services/api.service.ts";
import {IPostModel} from "../../model/IPost.ts";
import {PostJsonplaceholderComponent} from "../post-jsonplaceholder-component/PostJsonplaceholderComponent.tsx";



export const PostsJsonplaceholderComponent = () => {

    const [posts, setPosts] = useState <IPostModel[]> ([])

    useEffect(() => {
        postServiceJsonPlaceholder.getPosts().then((allPosts) => {
                setPosts(allPosts)
            })

    }, [])

    return (
        <div className='mx-auto grid grid-cols-4 gap-4 m-32'>
            {
                posts.map((post: IPostModel) => <PostJsonplaceholderComponent item={post} key={post.id} />)
            }
        </div>
    );
};



