import React, { useMemo, useState} from 'react';
import classes from "./style.module.css";
import TodosList from "../../components/todos/TodosList.tsx";
import Button from "../../components/ui/button/Button.tsx";
import {addLoadedTodos} from "../../store/todo/todoSlice.ts";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import useLocalStorage from "../../hooks/UseLocalStorage.ts";
import CreateNewTodo from "../../components/todos/CreateNewTodo.tsx";
import Input from "../../components/ui/input/Input.tsx";
import Select from "../../components/ui/select/Select.tsx";
const TodosPage = () => {
    const dispatch=useAppDispatch()
    const todos=useAppSelector(state => state.todo)
    const [popUp,setPopUp]=useState(false)
    const [selectAction,setSelectAction]=useState('Save')
    const [searchQuery,setSearchQuery]=useState('')
    const filtredTodos=useMemo(()=>{
        return [...todos].filter(todo=>todo.title.toLowerCase().includes(searchQuery))
        }, [todos,searchQuery])
    function acceptHandler(e:React.ChangeEvent<HTMLButtonElement>) {
        e.preventDefault()
        // @ts-ignore
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
    return (
            <div className={classes.page__content}>
                <div className={classes.page__content__navigation}>
                    <form className={classes.form}>
                        <div className={classes.select__container}>
                            <Select
                                setSelectedAction={setSelectAction}
                                defaultValue={"Chose action:"}
                                options={[
                                {value:"Save",name:"Save"},
                                {value:"Delete saved todos",name:"Delete saved todos"},
                                {value:"Load saved todos",name:"Load saved todos"}]}/>
                            <IoArrowDown className={classes.select__arrow}/>
                        </div>
                        <Button onClick={()=>acceptHandler}><IoIosCheckmarkCircle/></Button>
                    </form>
                    <Button onClick={()=>{
                        setPopUp(true)
                    }}>Create new</Button>
                    <Input
                        value={searchQuery}
                        onChange={e=>setSearchQuery(e.target.value)}
                        placeholder={"Find by title"}/>
                </div>

                {popUp && <div onClick={()=>setPopUp(false)} className={classes.popUp}>
                    <div onClick={e=>e.stopPropagation()} className={classes.popUp__content}>
                        <h1>Create</h1>
                        <CreateNewTodo setPopUp={setPopUp} todos={todos}/>
                    </div>
                </div>}
                {filtredTodos.length !== 0 ? <TodosList todos={filtredTodos}/>: <p>There is no todos matching {searchQuery}</p>}
            </div>
    );
};

export default TodosPage;