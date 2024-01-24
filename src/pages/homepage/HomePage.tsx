import React, {useState} from 'react';
import classes from "./style.module.css";
import TodosList from "../../components/layout/todos/TodosList.tsx";
import Button from "../../components/ui/button/Button.tsx";
import Input from "../../components/ui/input/Input.tsx";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/todo/todoSlice.ts";
const HomePage = () => {
    const [popUp,setPopUp]=useState(false)
    const [newTodo,setNewTodo]=useState({
        title:'',
        description:''
    })
    const dispatch=useDispatch()
    return (
        <div className={classes.page}>
            <div className={classes.page__content}>
                <div><Button onClick={()=>{
                    setPopUp(true)
                }}>Create new</Button></div>
                {popUp && <div className={classes.popUp}>
                    <div className={classes.popUp__content}>
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