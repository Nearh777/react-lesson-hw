import {CommentModel} from "../../model/CommentModel.ts";
import {FC} from "react";


type PropTypeComment = {
    comment: CommentModel,
}

export const CommentComponent: FC<PropTypeComment> = ({comment: {name, email, body}} ) => {
    return (
        <div className="space-y-2 text-center sm:text-left border-4 border-purple-200 rounded-xl">
            <h3 className="text-lg font-semibold text-black">{name}</h3>
            <p className="font-medium text-gray-700">{email}</p>
            <p className="font-medium text-gray-500">{body}</p>
        </div>
    );
};