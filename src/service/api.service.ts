import {TodoModel} from "../model/TodoModel.ts";
import {PostModel} from "../model/PostModel";

const endpointTodos = import.meta.env.VITE_API_BACE_URL + '/todos';


const loadTodos = async (): Promise<TodoModel[]> => {

        return await fetch(endpointTodos)
        .then(value => value.json());
}


const endpointPost = import.meta.env.VITE_API_BACE_URL + '/posts';

const loadPosts = async (): Promise<PostModel[]> => {

    return await fetch(endpointPost)
    .then(value => value.json());
}

export {
    loadTodos,
    loadPosts

}

