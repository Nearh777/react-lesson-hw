import {useEffect, useState} from "react";
import { TodoModel } from "../../model/TodoModel";
import { loadTodos } from "../../service/api.service";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";

export const TodosComponent = () => {
const [todos, setTodos] = useState<TodoModel[]>([])

    useEffect(() => {
        loadTodos().then(value => setTodos(value))
    }, [])

    return (

        <div className='mx-auto grid grid-cols-4 gap-4' >
            {todos.map((todo) => <TodoComponent todo={todo} key={todo.id}/>)}
        </div>
    );
};