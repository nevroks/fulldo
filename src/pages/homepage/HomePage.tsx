import React, {useState} from 'react';
import classes from "./style.module.css";
import TodosList from "../../components/layout/todos/TodosList.tsx";
import Button from "../../components/ui/button/Button.tsx";
import Input from "../../components/ui/input/Input.tsx";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../store/todo/todoSlice.ts";
import {addLoadedTodos} from "../../store/todo/todoSlice.ts";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";
const HomePage = () => {
    const todos=useSelector(state => state.todo)
    const [popUp,setPopUp]=useState(false)
    const [newTodo,setNewTodo]=useState({
        title:'',
        description:''
    })
    const [selectAction,setSelectAction]=useState('Save')
    function acceptHandler(e) {
        e.preventDefault()

        switch (selectAction){
            case "Save":
                localStorage.setItem("saved todos",JSON.stringify(todos))
                break
            case "Delete saved todos":
                console.log("dasdadd")
                break
            case "Load saved todos":
                const loadedTodos=JSON.parse(localStorage.getItem("saved todos"))
                dispatch(addLoadedTodos(loadedTodos))
                break
        }
    }
    const dispatch=useDispatch()
    return (
        <div className={classes.page}>
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
                        <Input
                            value={newTodo.title}
                            onChange={e=>setNewTodo({...newTodo,title:e.target.value})}
                            placeholder={"title"}/>
                        <Input
                            value={newTodo.description}
                            onChange={e=>setNewTodo({...newTodo,description:e.target.value})}
                            placeholder={"description"}/>
                        <Button onClick={()=>{
                            setNewTodo({
                                title:'',
                                description:''
                            })
                            dispatch(addTodo(newTodo))
                            setPopUp(false)
                        }}>Apply</Button>
                    </div>
                </div>}
                <TodosList/>
            </div>
        </div>
    );
};

export default HomePage;