import React, {useState} from 'react';
import Input from "../ui/input/Input.tsx";
import Button from "../ui/button/Button.tsx";
import {addTodo} from "../../store/todo/todoSlice.ts";
import {ITodo} from "../../types/types.tsx";
import {useAppDispatch} from "../../hooks/reduxHooks.ts";

const CreateNewTodo = ({todos,setPopUp}) => {
    const dispatch=useAppDispatch()
    const [newTodo,setNewTodo]=useState<ITodo>({
        title:'',
        description:'',
        id:todos.length,
        completed:false,
        createdAt:Date.now()
    })
    return (
        <>
            <Input
                value={newTodo.title}
                onChange={e=>setNewTodo({...newTodo,title:e.target.value})}
                placeholder={"title"}/>
            <Input
                value={newTodo.description}
                onChange={e=>setNewTodo({...newTodo,description:e.target.value})}
                placeholder={"description"}/>
            <Button onClick={()=>{
                setNewTodo({...newTodo,id:todos.length,createdAt:Date.now()})
                dispatch(addTodo(newTodo))
                setNewTodo({
                    title:'',
                    description:'',
                    id:0,
                    completed:false,
                    createdAt:0
                })
                setPopUp(false)
            }}>Apply</Button>
        </>
    );
};

export default CreateNewTodo;