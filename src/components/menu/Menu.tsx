import { Link } from "react-router";

export const Menu = () => {
    return (
        <ul  className="grid grid-cols-4 gap-4 justify-items-center ">
            <li className="flex text-[#fff] text-2xl border-2 border-none rounded-lg justify-center items-center h-12 bg-cyan-500 w-32">
                <Link to={'/users'}>Users</Link>
            </li>
            <li className=" flex text-[#fff] text-2xl border-2 border-none rounded-lg justify-center  items-center h-12 bg-cyan-500 w-32">
                <Link to={'/posts'}>Posts</Link>
            </li>
            <li className=" flex text-[#fff] text-2xl border-2 border-none rounded-lg justify-center  items-center h-12 bg-cyan-500 w-32">
                <Link to={'/comments'}>Comments</Link>
            </li>
            <li className=" flex text-[#fff] text-2xl border-2 border-none rounded-lg justify-center  items-center h-12 bg-cyan-500 w-32">
                <Link to={'/products'}>Products</Link>
            </li>
        </ul>
    );
};