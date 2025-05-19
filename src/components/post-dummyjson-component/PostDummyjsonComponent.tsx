import {IPostDummyModel} from "../../model/IPostDummyModel.ts";
import {FC} from "react";


type PostTypeProps = {
    item: IPostDummyModel;
}

export const PostDummyjsonComponent: FC<PostTypeProps> = ({ item: {title, body, views} }) => {
    return (
        <div className="flex flex-col items-center space-y-2 text-center sm:text-left border-4 border-purple-200 rounded-xl">


            <h3 className="text-lg font-semibold text-black">{title}</h3>
            <p className="font-medium text-gray-700">{body}</p>
             <p className="font-medium text-gray-500">Views: {views}</p>


        </div>
    );
};