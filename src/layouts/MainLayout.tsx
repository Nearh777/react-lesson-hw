import {Outlet} from "react-router";
import {MenuComponent} from "../menu/MenuComponent.tsx";
import "./MainLayout.css"

export const MainLayout = () => {
    return (
        <div className='mx-auto'>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};