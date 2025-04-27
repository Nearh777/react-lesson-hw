import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {UsersComponent} from "./components/users-component/UsersComponent.tsx";
import { PostsComponent } from './components/posts-component/PostsComponent.tsx';
import {CommentsComponent} from "./components/comments-component/CommentsComponent.tsx";
import {ProductsComponent} from "./components/products-component/ProductsComponent.tsx";
import App from './App.tsx';
// import { RouterProvider} from "react-router-dom";
// import {routes} from "./components/routes/routes.tsx";




// createRoot(document.getElementById('root')!)
//     .render( <RouterProvider router={routes} /> )

createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
        <Routes>

            <Route path={'/'} element={<App/>}>
                <Route path={'users'} element={<UsersComponent/>}/>
                <Route path={'posts'} element={<PostsComponent/>}/>
                <Route path={'comments'} element={<CommentsComponent/>}/>
                <Route path={'products'} element={<ProductsComponent/>}/>

            </Route>

        </Routes>


    </BrowserRouter>);
