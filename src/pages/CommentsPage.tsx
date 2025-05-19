import {Link, Outlet} from "react-router";




export const CommentsPage = () => {
    return (
        <>
            <ul className="grid grid-cols-2 gap-4 justify-items-center m-50 ">
        <li className="flex text-[#fff] text-lg border-2 border-none rounded-lg justify-center items-center h-15 bg-cyan-500 w-45">

            <Link to={'jsonplaceholder'}>Comments-Jsonplaceholder</Link>

        </li>
        <li className="flex text-[#fff] text-lg border-2 border-none rounded-lg justify-center items-center h-15 bg-cyan-500 w-45">
            <Link to={'dummyjson'}>Comments-Dummyjson</Link>
        </li>
        </ul>
        <Outlet/>
        </>
);
};