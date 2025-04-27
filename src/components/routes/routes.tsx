import {createBrowserRouter} from "react-router-dom";
import App from "../../App.tsx";
import {UsersComponent} from "../users-component/UsersComponent.tsx";
import {PostsComponent} from "../posts-component/PostsComponent.tsx";
import {CommentsComponent} from "../comments-component/CommentsComponent.tsx";
import {ProductsComponent} from "../products-component/ProductsComponent.tsx";


export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: "users", element: <UsersComponent/>},
            {path: "posts", element: <PostsComponent/>},
            {path: "comments", element: <CommentsComponent/>},
            {path: "products", element: <ProductsComponent/>}
        ]
    }
])