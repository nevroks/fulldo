import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ITodo} from "../../types/types.tsx";


const initialState:Array<ITodo> = []
type deleteTodoPropsType={
    id:number
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state,action:PayloadAction<ITodo>)=>{
            state.push(action.payload)
        },
        addLoadedTodos: (state,{payload}:PayloadAction<ITodo[]>)=>{
            payload.map(todo=>state.push(todo))
        },
        deleteTodo:(state,{payload}:PayloadAction<deleteTodoPropsType>)=>{
            let index = payload.id;
            state.splice(index,1)
        },
        changeTodo:(state,{payload}:PayloadAction<ITodo>)=>{
            let index=Number(payload.id)
            const todo=state.find(todos=>todos.id===index)
            if (todo){
                todo.description=payload.description
                todo.title=payload.title
                todo.createdAt=payload.createdAt
            }
        },
        toggleComplete:(state,{payload}:PayloadAction<ITodo>)=>{
            let index=Number(payload.id)
            const todo=state.find(todos=>todos.id===index)
            if (todo){
                todo.completed=!todo.completed

            }

        }
    }
})

// Action creators are generated for each case reducer function
export const { addTodo, addLoadedTodos
    ,deleteTodo,changeTodo,
    toggleComplete} = todoSlice.actions

export default todoSlice.reducer