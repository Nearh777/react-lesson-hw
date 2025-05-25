import {Link} from "react-router";


export const MenuComponent = () => {
    return (
        <div className="grid grid-cols-2 gap-4">

<ul  className='grid gap-4'>
    <li className="flex text-[#fff] text-2xl border-2 border-none rounded-lg justify-center items-center h-12 bg-cyan-500 w-42">
        <Link to={'/users'}>Users</Link>
    </li>
    <li className=" flex text-[#fff] text-2xl border-2 border-none rounded-lg justify-center  items-center h-12 bg-cyan-500 w-42">
        <Link to={'/posts'}>Posts</Link>
    </li>
</ul>

        </div>
    );
};