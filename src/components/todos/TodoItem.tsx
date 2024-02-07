import React, {FC, useEffect, useRef, useState} from 'react';
import classes from "./style.module.css";
import {Link} from "react-router-dom";
import Button2 from "../ui/button/Button2.tsx";
import {deleteTodo, getTodoById, toggleComplete} from "../../store/todo/todoSlice.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {ITodo} from "../../types/types.tsx";

const TodoItem:FC<ITodo> = ({id,description,title}) => {
    const dispatch=useAppDispatch()

    const todo=useAppSelector(state => state.todo[id])
    let checked=todo.completed
    const handleChange=()=>{
        dispatch(toggleComplete(todo))

    }

    return (
        <div className={checked ? classes.todo_done : classes.todo} key={id}>
             <div>
                <h2>Title:{title}</h2>
                {description.length>=20 ?
                    <Link to={`/todos/${id}`}>Description:{description.substring(0,20)}...</Link> :
                    <p>Description:{description}</p>
                }
            </div>
            <div className={classes.btn__checkbox}>
                <div>
                    <Button2 onClick={()=>dispatch(deleteTodo({id}))}>Delete</Button2>
                    <Button2><Link to={`/todos/${id}`}>More</Link></Button2>
                </div>
                <div>
                    <label htmlFor={`isComp${id}`}>Is Completed?</label>
                    <input onChange={handleChange} checked={todo.completed} id={`isComp${id}`} type={"checkbox"}/>
                </div>
            </div>

        </div>
    );
};

export default TodoItem;