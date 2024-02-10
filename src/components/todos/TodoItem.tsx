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
             <div className={classes.todo__text__container}>
                <h2>{title}</h2>
                {description.length>=30 ?
                    <Link to={`/todos/${id}`}>{description.substring(0,30)}...</Link> :
                    <p>{description}</p>
                }
            </div>
            <div className={classes.btn__checkbox}>
                <div className={classes.btns}>
                    <Button2 variant={"red"} onClick={()=>dispatch(deleteTodo({id}))}>Delete</Button2>
                    <Button2 variant={"blue"}><Link style={{color:"white"}} to={`/todos/${id}`}>More</Link></Button2>
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