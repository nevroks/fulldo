import React from 'react';
import classes from "./style.module.css";


import { useAppSelector} from "../../hooks/reduxHooks.ts";
import TodoItem from "./TodoItem.tsx";


const TodosList = () => {
    const todos = useAppSelector(state => state.todo)

    return (
        <div className={classes.content}>
            {todos.map((todo)=>{
                return <TodoItem id={todo.id} description={todo.description} title={todo.title} key={todo.id}/>
            })}
        </div>
    );
};

export default TodosList;