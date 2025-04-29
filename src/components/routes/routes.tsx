import {createBrowserRouter} from "react-router-dom";
import App from "../../App.tsx";
import {UsersComponent} from "../users-component/UsersComponent.tsx";
import {PostsComponent} from "../posts-component/PostsComponent.tsx";
import {CommentsComponent} from "../comments-component/CommentsComponent.tsx";
// import {ProductsComponent} from "../products-component/ProductsComponent.tsx";
import {UsersJsonplaceholderComponent} from "../users-jsonplaceholder-component/UsersJsonplaceholderComponent.tsx";
import {UsersDummyjsonComponent} from "../users-dummyjson-component/UsersDummyjsonComponent.tsx";
import { PostsJsonplaceholderComponent } from "../../posts-jsonplaceholder-component/PostsJsonplaceholderComponent.tsx";
import { PostsDummyjsonComponent } from "../../posts-dummyjson-component/PostsDummyjsonComponent.tsx";
import { CommentsJsonplaceholderComponent } from "../comments-jsonplaceholder-component/CommentsJsonplaceholderComponent.tsx";
import {CommentsDummyjsonComponent} from "../comments-dummyjson-component/CommentsDummyjsonComponent.tsx";


// export const routes = createBrowserRouter([
//     {
//         path: "/", element: <App/>, children: [
//             {path: "users", element: <UsersComponent/>},
//             {path: "posts", element: <PostsComponent/>},
//             {path: "comments", element: <CommentsComponent/>},
//             {path: "products", element: <ProductsComponent/>}
//         ]
//     }
// ])



export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: "users", element: <UsersComponent/>},
            {path: "users/jsonplaceholder", element: <UsersJsonplaceholderComponent/>},
            {path: "users/dummyjson", element: <UsersDummyjsonComponent/>},
            {path: "posts", element: <PostsComponent/>},
            {path: "posts/jsonplaceholder", element: <PostsJsonplaceholderComponent/>},
            {path: "posts/dummyjson", element: <PostsDummyjsonComponent/>},
            {path: "comments", element: <CommentsComponent/>},
            {path: "comments/jsonplaceholder", element: <CommentsJsonplaceholderComponent/>},
            {path: "comments/dummyjson", element: <CommentsDummyjsonComponent/>},
        ]
    }
])