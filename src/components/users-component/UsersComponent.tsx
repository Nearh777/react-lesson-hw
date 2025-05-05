import {Link} from "react-router";
import {UsersJsonplaceholderComponent} from "../users-jsonplaceholder-component/UsersJsonplaceholderComponent.tsx";
import {UsersDummyjsonComponent} from "../users-dummyjson-component/UsersDummyjsonComponent.tsx";


export const UsersComponent = () => {
    return (
        <ul className="grid grid-cols-2 gap-4 justify-items-center m-50 ">
            <li className="flex text-[#fff] text-lg border-2 border-none rounded-lg justify-center items-center h-12 bg-cyan-500 w-32">
                <Link to={'jsonplaceholder'} >
                    <UsersJsonplaceholderComponent/>
                </Link>
            </li>
            <li className=" flex text-[#fff] text-lg border-2 border-none rounded-lg justify-center  items-center h-12 bg-cyan-500 w-32">
                <Link to={'dummyjson'}>
                    <UsersDummyjsonComponent/>
                </Link>
            </li>


        </ul>
    );
};








// export const UsersComponent = () => {
//     return (
//         <div>
//             Users Component
//         </div>
//     );
// };