import {Link} from "react-router";




export const PostsComponent = () => {
    return (
        <div className="grid grid-cols-2 gap-4 justify-items-center">
            <Link to={'jsonplaceholder'}>Posts-Jsonplaceholder</Link>
            <Link to={'dummyjson'}>Posts-Dummyjson</Link>

        </div>
    );
};


// export const PostsComponent = () => {
//     return (
//         <div>
//             Posts Component
//         </div>
//     );
// };