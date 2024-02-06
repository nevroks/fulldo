import React, {useState} from 'react';
import classes from "./style.module.css";
import {useNavigate, useParams} from "react-router-dom";
import Button2 from "../../components/ui/button/Button2.tsx";
import {ITodo} from "../../types/types.tsx";
import {GoPencil} from "react-icons/go";
import Input from "../../components/ui/input/Input.tsx";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import {changeTodo} from "../../store/todo/todoSlice.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
const TodoPage = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const todo=useAppSelector(state => state.todo[id])
    const [modTodo,setModTodo]=useState<ITodo>({
        id: id,
        title:todo.title,
        description:todo.description
    })
    const [isChanging,setIsChanging]=useState({
        title:false,
        description:false
    })
    const dispatch=useAppDispatch()
    const ConfirmChanges =()=>{
        let answer=confirm(`Confirm changes,it will change your ${id} todos`)
        if (answer){
            dispatch(changeTodo(modTodo))
        }else{
            return
        }
    }
    console.log(todo)
    return (
        <div className={classes.page}>
            <Button2 onClick={()=>navigate(-1)}>Go back</Button2>

            <div>
                {!isChanging.title ?
                    <p>Title:{todo.title}(will be:{modTodo.title})<button onClick={()=>setIsChanging({...isChanging,title:true})}><GoPencil/></button></p>
                    :
                    <div><Input value={modTodo.title} onChange={e=>setModTodo({...modTodo,title:e.target.value})} placeholder={"Title"}/><button onClick={()=>setIsChanging({...isChanging,title:false})}><IoIosCheckmarkCircleOutline/></button></div>

                }
                {!isChanging.description ?
                    <p>Description:{todo.description}(will be:{modTodo.description})<button onClick={()=>setIsChanging({...isChanging,description:true})}><GoPencil/></button></p>
                    :
                    <div><Input value={modTodo.description} onChange={e=>setModTodo({...modTodo,description:e.target.value})} placeholder={"Description"}/><button onClick={()=>setIsChanging({...isChanging,description:false})}><IoIosCheckmarkCircleOutline/></button></div>

                }

                <Button2 onClick={()=>ConfirmChanges()}>Confirm</Button2>
            </div>
        </div>
    );
};

export default TodoPage;