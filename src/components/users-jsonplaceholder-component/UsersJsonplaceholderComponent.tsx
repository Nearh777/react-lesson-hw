import {useEffect, useState} from "react";
import {IUser} from "../../model/IUser.ts";
import {UserJsonplaceholderComponent} from "../user-jsonplaceholder-component/UserJsonplaceholderComponent.tsx";
import {userServiceJsonPlaceholder} from "../../services/api.service.ts";

export const UsersJsonplaceholderComponent = () => {

    const [users, setUsers] = useState <IUser[]> ([])

    useEffect(() => {
        userServiceJsonPlaceholder.getUsers().then((allUsers) => {
                setUsers(allUsers)
            })

    }, [])

    return (
        <div className='mx-auto grid grid-cols-4 gap-4 m-32'>
            {
                users.map((user: IUser) => <UserJsonplaceholderComponent item={user} key={user.id} />)
            }
        </div>
    );
};