import {useEffect, useState} from "react";

import {userServiceDummyjson} from "../../services/api.service.ts";
import {UserDummyComponent} from "../user-dummy-component/UserDummyComponent.tsx";
import {IUserDummyModel} from "../../model/IUserDummyModel.ts";



export const UsersDummyjsonComponent = () => {

    const [users, setUsers] = useState <IUserDummyModel[]>([])

    useEffect(() => {
        userServiceDummyjson.getUsers().then((allUsers) => {
            setUsers(allUsers)
        })

    }, [])

    return (
        <div className='mx-auto grid grid-cols-4 gap-4 m-32'>
            {
                users.map((user: IUserDummyModel) => <UserDummyComponent user={user} key={user.id} />)
            }
        </div>
    );
};