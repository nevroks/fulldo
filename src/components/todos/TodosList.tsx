import React, {useState} from 'react';
import classes from "./style.module.css";
import {useDispatch, useSelector} from "react-redux";

import {deleteTodo} from "../../store/todo/todoSlice.ts";
import Button2 from "../ui/button/Button2.tsx";

const TodosList = () => {
    const todos = useSelector(state => state.todo)
    const dispatch=useDispatch()

    return (
        <div className={classes.content}>
            {todos.map((todo)=>{
                return <div className={classes.todo} key={todo.id}>
                    <div>
                        <h2>Title:{todo.title}</h2>
                        <p>Description:{todo.description}</p>
                    </div>
                    <div>
                        <Button2 onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</Button2>
                        <Button2 onClick={()=>dispatch(deleteTodo(todo.id))}>More</Button2>
                    </div>
                </div>
            })}
        </div>
    );
};

export default TodosList;