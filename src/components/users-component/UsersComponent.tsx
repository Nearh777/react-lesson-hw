import {Link} from "react-router";


export const UsersComponent = () => {
    return (
        <div className="grid grid-cols-2 gap-4 justify-items-center">
            <Link to={'jsonplaceholder'}>Users-Jsonplaceholder</Link>
            <Link to={'dummyjson'}>Users-Dummyjson</Link>

        </div>
    );
};








// export const UsersComponent = () => {
//     return (
//         <div>
//             Users Component
//         </div>
//     );
// };