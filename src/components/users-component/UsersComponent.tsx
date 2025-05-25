import {useEffect, useState} from "react";
import {getAll} from "../../servises/general.api.service.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {

        getAll <IBaseResponseModel & {users: IUser[]}>('/users')
            .then(({users}) => {
                setUsers(users)
            })
    }, [])
    return (
        <div className='mx-auto grid grid-cols-4 gap-4 m-32'>
            {
                users.map((user: IUser) => <UserComponent key = {user.id} user = {user} />)
            }
        </div>
    );
};