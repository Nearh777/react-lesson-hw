import {CommentDummyModel} from "../../model/CommentDummyModel.ts";
import {FC} from "react";


type PropTypeDummyComment = {
    comment: CommentDummyModel
}


export const CommentDummyComponent: FC<PropTypeDummyComment> = ({comment: {body, likes, user:{fullName}}}) => {
    return (
        <div className="space-y-2 text-center sm:text-left border-4 border-purple-200 rounded-xl">
            <h3 className="text-lg font-semibold text-black">{fullName}</h3>
            <p className="font-medium text-gray-500">{body}</p>
            <p className="font-medium text-gray-700">Likes: {likes}</p>

        </div>
    );
};