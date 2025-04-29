import {Link} from "react-router";


export const CommentsComponent = () => {
    return (
        <div className="grid grid-cols-2 gap-4 justify-items-center">
            <Link to={'jsonplaceholder'}>Comments-Jsonplaceholder</Link>
            <Link to={'dummyjson'}>Comments-Dummyjson</Link>

        </div>
    );
};








// export const CommentsComponent = () => {
//     return (
//         <div>
//             Comments Component
//         </div>
//     );
// };