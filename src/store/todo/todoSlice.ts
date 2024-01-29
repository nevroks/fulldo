import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        addLoadedTodos:(state,action)=>{
            action.payload.map(todos=>state.push(todos))
        },
        deleteTodo:(state,action)=>{
            let index=action.payload
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, addLoadedTodos,deleteTodo} = todoSlice.actions

export default todoSlice.reducer