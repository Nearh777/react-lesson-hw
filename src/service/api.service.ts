import {TodoModel} from "../model/TodoModel.ts";

const endpointTodos = import.meta.env.VITE_API_BACE_URL + '/todos'


const loadTodos = async (): Promise<TodoModel[]> => {

        return await fetch(endpointTodos)
        .then(value => value.json());
}

export {
    loadTodos

}