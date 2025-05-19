import { FC } from "react";
import {IPostModel} from "../../model/IPost.ts";


type PostTypeProps = {
    item: IPostModel;
}

export const PostJsonplaceholderComponent: FC<PostTypeProps> = ({ item: {title, body} }) => {
    return (
        <div className="flex flex-col items-center space-y-2 text-center sm:text-left border-4 border-purple-200 rounded-xl">


            <h3 className="text-lg font-semibold text-black">{title}</h3>
            <p className="font-medium text-gray-700">{body}</p>


        </div>
    );
};





