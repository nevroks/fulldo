import React, {EventHandler, useState} from 'react';
import classes from "./style.module.css";
import TodosList from "../../components/todos/TodosList.tsx";
import Button from "../../components/ui/button/Button.tsx";
import Input from "../../components/ui/input/Input.tsx";
import {addTodo} from "../../store/todo/todoSlice.ts";
import {addLoadedTodos} from "../../store/todo/todoSlice.ts";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {ITodo} from "../../types/types.tsx";
import useLocalStorage from "../../hooks/UseLocalStorage.tsx";
import CreateNewTodo from "../../components/todos/CreateNewTodo.tsx";
const TodosPage = () => {
    const todos=useAppSelector(state => state.todo)
    const [popUp,setPopUp]=useState(false)
    const [selectAction,setSelectAction]=useState('Save')
    function acceptHandler(e:React.ChangeEvent<HTMLButtonElement>) {
        e.preventDefault()

        switch (selectAction){
            case "Save":
                localStorage.setItem("saved todos",JSON.stringify(todos))
                break
            case "Delete saved todos":
                localStorage.removeItem("saved todos")
                break
            case "Load saved todos":
                const loadedTodos=useLocalStorage({method:"get",key:"saved todos"})
                if (loadedTodos===null){
                    alert("There is no saved todos")
                    return
                }
                dispatch(addLoadedTodos(loadedTodos))
                break
        }
    }
    const dispatch=useAppDispatch()
    return (
            <div className={classes.page__content}>
                <div className={classes.page__content__navigation}>
                    <form className={classes.form}>
                        <div className={classes.select__container}>
                            <select
                                className={classes.select}
                                onChange={e=>setSelectAction(e.target.value)}
                            >
                                <option disabled>Chose action:</option>
                                <option value="Save">Save</option>
                                <option value="Delete saved todos">Delete saved todos</option>
                                <option value="Load saved todos">Load saved todos</option>
                            </select>
                            <IoArrowDown className={classes.select__arrow}/>
                        </div>
                        <Button onClick={acceptHandler}><IoIosCheckmarkCircle/></Button>
                    </form>
                    <Button onClick={()=>{
                        setPopUp(true)
                    }}>Create new</Button>
                </div>

                {popUp && <div onClick={()=>setPopUp(false)} className={classes.popUp}>
                    <div onClick={e=>e.stopPropagation()} className={classes.popUp__content}>
                        <h1>Create</h1>
                        <CreateNewTodo setPopUp={setPopUp} todos={todos}/>
                    </div>
                </div>}
                <TodosList/>
            </div>
    );
};

export default TodosPage;