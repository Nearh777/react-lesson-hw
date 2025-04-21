import {useEffect, useState} from "react";
import { TodoDummyModel } from "../../model/TodoDummyModel";
import { loadDummyTodos } from "../../service/api.service";
import { TodoDummyComponent } from "../todo-dummy-component/TodoDummyComponent";

export const TodosDummyComponent = () => {
    const [todos, setTodos] = useState<TodoDummyModel[]>([])

    useEffect(() => {
        loadDummyTodos().then(value => setTodos(value))
    }, [])

    return (

        <div className='mx-auto grid grid-cols-4 gap-4' >
            {todos.map((todo) => <TodoDummyComponent todos={todo} key={todo.id}/>)}
        </div>
    );
};