import {FC} from "react";
import {IUser} from "../../model/IUser.ts";


type UserTypeProps = {
    item: IUser;
}

export const UserJsonplaceholderComponent: FC<UserTypeProps> = ({item}) => {
    return (
        <div>
            {
                item.username
            }
        </div>
    );
};