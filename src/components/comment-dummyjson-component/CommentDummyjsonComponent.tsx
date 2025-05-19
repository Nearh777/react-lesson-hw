import {FC} from "react";
import {ICommentDummyjsonModel} from "../../model/ICommentDummyjsonModel.ts";




type CommentDummyTypeProps = {
    item: ICommentDummyjsonModel;
}

export const CommentDummyjsonComponent: FC<CommentDummyTypeProps> = ({ item: { body, likes, user:{fullName}} }) => {
    return (
        <div className="flex flex-col items-center space-y-2 text-center sm:text-left border-4 border-purple-200 rounded-xl">


            <h3 className="text-lg font-semibold text-black">{fullName}</h3>
            <p className="font-medium text-gray-700">{body}</p>
            <p className="font-medium text-gray-500">Likes: {likes}</p>


        </div>
    );
};