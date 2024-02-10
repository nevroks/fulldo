import React, {FC} from 'react';
import classes from "./style.module.css";


import { useAppSelector} from "../../hooks/reduxHooks.ts";
import TodoItem from "./TodoItem.tsx";
import {ITodo} from "../../types/types.tsx";


const TodosList:FC<ITodo[]> = ({todos}) => {
    return (
        <div className={classes.content}>
            {todos.map((todo)=>
                 <TodoItem id={todo.id} description={todo.description} title={todo.title} key={todo.id}/>
            )}
        </div>
    );
};

export default TodosList;