import {useState} from 'react';
import classes from "./style.module.css";
import {useNavigate, useParams} from "react-router-dom";
import Button2 from "../../components/ui/button/Button2.tsx";
import {ITodo} from "../../types/types.tsx";
import {GoPencil} from "react-icons/go";
import Input from "../../components/ui/input/Input.tsx";
import {IoIosArrowRoundBack, IoIosCheckmarkCircleOutline} from "react-icons/io";
import {changeTodo} from "../../store/todo/todoSlice.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
const TodoPage = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    // @ts-ignore
    const todo=useAppSelector(state => state.todo[id])
    const [modTodo,setModTodo]=useState<ITodo>({
        id: id,
        title:todo.title,
        description:todo.description,
        createdAt:Date.now()
    })
    const [isChanging,setIsChanging]=useState({
        title:false,
        description:false
    })
    const dispatch=useAppDispatch()
    const ConfirmChanges =()=>{
        let answer=confirm(`Confirm changes,it will change your todo`)
        if (answer){
            dispatch(changeTodo(modTodo))
        }else{
            return
        }
    }
    const createdAt = new Date(todo.createdAt,).toLocaleString('eng',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour:'numeric',
            minute:"numeric"


        });
    const handleReturn=()=>{
        if (JSON.stringify(modTodo.title)!==JSON.stringify(todo.title)||JSON.stringify(modTodo.description)!==JSON.stringify(todo.description)){
            if(confirm("you have unsaved changes,continue?")){
                navigate(-1)
            }else{
                return
            }
        }
        navigate(-1)
    }
    return (
        <div className={classes.page}>
            <Button2 onClick={handleReturn}><IoIosArrowRoundBack className={classes.goBack__svg}/> Go back</Button2>

            <div className={classes.todoPage__text}>
                {!isChanging.title ?
                    <p>Title:{modTodo.title}<button onClick={()=>setIsChanging({...isChanging,title:true})}><GoPencil/></button></p>
                    :
                    <div><Input value={modTodo.title} onChange={e=>setModTodo({...modTodo,title:e.target.value})} placeholder={"Title"}/><button onClick={()=>setIsChanging({...isChanging,title:false})}><IoIosCheckmarkCircleOutline/></button></div>

                }
                {!isChanging.description ?
                    <p>Description:{modTodo.description}<button onClick={()=>setIsChanging({...isChanging,description:true})}><GoPencil/></button></p>
                    :
                    <div><Input value={modTodo.description} onChange={e=>setModTodo({...modTodo,description:e.target.value})} placeholder={"Description"}/><button onClick={()=>setIsChanging({...isChanging,description:false})}><IoIosCheckmarkCircleOutline/></button></div>

                }
                <p>Created at: {String(createdAt)}</p>

            </div>
            <Button2 onClick={()=>ConfirmChanges()}>Confirm</Button2>
        </div>
    );
};

export default TodoPage;