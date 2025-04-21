import {FC} from "react";
import { PostDummyModel } from "../../model/PostDummyModel";





type PropTypeDummyPost = {
    post: PostDummyModel
}


export const PostDummyComponent: FC<PropTypeDummyPost> = ({post: {body, title, reactions:{likes, dislikes}, views}}) => {



    return (
        <div className="space-y-2 text-center sm:text-left border-4 border-purple-200 rounded-xl">
            <h3 className="text-lg font-semibold text-black">{title}</h3>
            <p className="font-medium text-gray-500">{body}</p>
            <p className="font-medium text-gray-700">Views: {views}</p>
            <div>
                <p>Likes: {likes}</p>
                <p>Dislikes: {dislikes}</p>
            </div>

        </div>
    );
};