
import {FC} from "react";
import { TodoDummyModel } from "../../model/TodoDummyModel";

type PropTypeDummyTodo = {
    todos: TodoDummyModel
}

export const TodoDummyComponent: FC<PropTypeDummyTodo> = ({todos: {todo, completed}}) => {
    return (
        <div className="object-contain md:object-cover text-center text-align md:text-center text-white rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
           <h3>{todo}</h3>
             <p>{completed.toString()}</p>
        </div>
    );
};