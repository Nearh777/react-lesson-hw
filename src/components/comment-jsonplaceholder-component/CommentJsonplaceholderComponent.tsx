import {ICommentJsonPlaceholderModel} from "../../model/ICommentJsonPlaceholderModel.ts";
import {FC} from "react";




type CommentTypeProps = {
    item: ICommentJsonPlaceholderModel;
}

export const CommentJsonplaceholderComponent: FC<CommentTypeProps> = ({ item: {name, email, body} }) => {
    return (
        <div className="flex flex-col items-center space-y-2 text-center sm:text-left border-4 border-purple-200 rounded-xl">


            <h3 className="text-lg font-semibold text-black">{name}</h3>
            <p className="font-medium text-gray-700">{body}</p>
            <p>{email}</p>


        </div>
    );
};