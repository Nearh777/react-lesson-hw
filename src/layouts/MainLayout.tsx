import {Menu} from "../components/menu/Menu.tsx";
import {Outlet} from "react-router";
import "./mainLayout.css"


export const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>

        </div>
    );
};