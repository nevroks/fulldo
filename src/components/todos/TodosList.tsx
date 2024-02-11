import {FC} from 'react';
import classes from "./style.module.css";

import TodoItem from "./TodoItem.tsx";
import {ITodo} from "../../types/types.tsx";

interface TodoListProps{
    todos:Array<ITodo>
}

const TodosList:FC<TodoListProps> = ({todos}) => {
    return (
        <div className={classes.content}>
            {todos.map((todo)=>
                 <TodoItem id={todo.id} description={todo.description} title={todo.title} key={todo.id}/>
            )}
        </div>
    );
};

export default TodosList;