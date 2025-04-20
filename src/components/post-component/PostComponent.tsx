import {FC} from "react";
import {PostModel} from "../../model/PostModel.ts";


type PropTypePost = {
    post: PostModel
}

export const PostComponent: FC<PropTypePost>  = ({post: {userId, id, title, body}}) => {

    return (
        <div className="space-y-2 text-center sm:text-left border-4 border-purple-200 rounded-xl">
            <h2 className="text-lg font-semibold text-black">{title}</h2>
            <h3>UserID: {userId}</h3>
            <p>PostID: {id}</p>
            <p className="font-medium text-gray-500">{body.toString()}</p>


        </div>
    );
};