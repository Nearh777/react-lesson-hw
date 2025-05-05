import {useEffect, useState} from "react";
import {IUser} from "../../model/IUser.ts";
import {UserJsonplaceholderComponent} from "../user-jsonplaceholder-component/UserJsonplaceholderComponent.tsx";
import {userService} from "../../services/api.service.ts";

export const UsersJsonplaceholderComponent = () => {

    const [users, setUsers] = useState <IUser[]> ([])

    useEffect(() => {
            userService.getUsers().then((allUsers) => {
                setUsers(allUsers)
            })

    }, [])

    return (
        <div>
            {
                users.map((user: IUser) => <UserJsonplaceholderComponent item={user}/>)
            }
        </div>
    );
};