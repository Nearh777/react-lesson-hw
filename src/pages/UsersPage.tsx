import { UsersComponent } from "../components/users-component/UsersComponent";
import {Outlet} from "react-router";

export const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <UsersComponent/>

        </div>
    );
};