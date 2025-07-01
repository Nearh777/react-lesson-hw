import {Outlet} from "react-router";
// import {UsersPage} from "../pages/UsersPage.tsx";


export const MainLayout = () => {
    return (
        <div className='mx-auto'>
            <Outlet/>
        </div>
    );
};