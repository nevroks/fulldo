import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleAuth:(state)=>{
            state.value = true
    }
    },
})

// Action creators are generated for each case reducer function
export const { toggleAuth } = authSlice.actions

export default authSlice.reducer