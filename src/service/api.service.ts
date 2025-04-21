import {TodoModel} from "../model/TodoModel.ts";
import {PostModel} from "../model/PostModel";
import { CommentModel } from "../model/CommentModel.ts";
import { CommentDummyModel, CommentResponseDummyjson } from "../model/CommentDummyModel.ts";
import {PostDummyModel, PostResponseDummyjson} from "../model/PostDummyModel.ts";
import {TodoDummyModel, TodoResponseDummyjson} from "../model/TodoDummyModel.ts";
import {ProductModel, ProductResponseDummyjson} from "../model/ProductModel.ts";

const endpointTodos = import.meta.env.VITE_API_BACE_URL + '/todos';
const endpointPosts = import.meta.env.VITE_API_BACE_URL + '/posts';
const endpointComments = import.meta.env.VITE_API_BACE_URL + '/comments';

const endpointDummyTodos = import.meta.env.VITE_API_BACE_URL_DUMMY + '/todos';
const endpointDummyPosts = import.meta.env.VITE_API_BACE_URL_DUMMY + '/posts';
const endpointDummyComments = import.meta.env.VITE_API_BACE_URL_DUMMY + '/comments';
const endpointProducts = import.meta.env.VITE_API_BACE_URL_DUMMY + '/products';



const loadTodos = async (): Promise<TodoModel[]> => {

        return await fetch(endpointTodos)
        .then(todo => todo.json());
}


const loadPosts = async (): Promise<PostModel[]> => {

    return await fetch(endpointPosts)
    .then(post => post.json());
}


const loadComments = async (): Promise<CommentModel[]> => {
    return await fetch(endpointComments)
        .then(comment => comment.json());
}

// -------------------------------------------------------------------------------------------------- //


const loadDummyTodos = async (): Promise<TodoDummyModel[]> => {

     const response: TodoResponseDummyjson = await fetch(endpointDummyTodos)
        .then(todo => todo.json());

     return response.todos
}


const loadDummyPosts = async (): Promise<PostDummyModel[]> => {

    const response: PostResponseDummyjson = await fetch(endpointDummyPosts)
        .then(post => post.json());

    return response.posts;
}



const loadDummyComments = async (): Promise<CommentDummyModel[]> => {
     const response: CommentResponseDummyjson = await fetch(endpointDummyComments)
        .then(comment => comment.json());
     return response.comments;
}



const loadProducts = async (): Promise<ProductModel[]> => {

    const response: ProductResponseDummyjson = await fetch(endpointProducts)
    .then(product => product.json());
    return response.products;
}


export {
    loadTodos,
    loadPosts,
    loadComments,
    loadDummyTodos,
    loadDummyPosts,
    loadDummyComments,
    loadProducts
}

