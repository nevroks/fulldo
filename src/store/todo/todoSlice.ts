import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
    title:'sss',
        description:'sss'
    },
    {
    title:'sssssss',
        description:'ssssssssss'
    }
    ]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state)=>{
            state.push({
              //  В теории
              //  на самом деле
              //  я ваще хз
                title:this.title,
                description:this.description
            })

        }
    },
})

// Action creators are generated for each case reducer function
export const { addTodo } = todoSlice.actions

export default todoSlice.reducer