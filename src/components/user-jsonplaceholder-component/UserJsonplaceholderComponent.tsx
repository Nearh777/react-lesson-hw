import {FC} from "react";
import {IUser} from "../../model/IUser.ts";


type UserTypeProps = {
    item: IUser;
}

export const UserJsonplaceholderComponent: FC<UserTypeProps> = ({item}) => {
    return (
        <div className="space-y-2 text-center sm:text-left border-4 border-purple-200 rounded-xl">


                <h3 className="text-lg font-semibold text-black">{item.name}</h3>
                <p className="font-medium text-gray-500">{item.email}</p>
                <p className="font-medium text-gray-700">{item.website}</p>


        </div>
    );
};