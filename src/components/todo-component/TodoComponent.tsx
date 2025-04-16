import {FC} from "react";
import {TodoModel} from "../../model/TodoModel.ts";


type PropTypeTodo = {
    todo: TodoModel
}

export const TodoComponent: FC<PropTypeTodo> = ({todo: {id, title, userId, completed}}) => {
    return (
        <div className="object-contain md:object-cover text-center text-align md:text-center text-white rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            {id} {title} {userId} {completed.toString()}
        </div>
    );
};