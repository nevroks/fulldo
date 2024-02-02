import { createSlice } from '@reduxjs/toolkit'
import loginPage from "../../pages/loginpage/LoginPage.tsx";

const initialState = []

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        addLoadedTodos:(state,action)=>{
            action.payload.map(todo=>state.push(todo))
        },
        deleteTodo:(state,action)=>{
            let index=action.payload
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        changeTodo:(state,{payload})=>{
            let index=Number(payload.id)
            const todo=state.find(todos=>todos.id===index)
            todo.description=payload.description
            todo.title=payload.title
        }
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, addLoadedTodos,deleteTodo,changeTodo} = todoSlice.actions

export default todoSlice.reducer