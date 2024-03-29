import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice.ts"
import todoReducer from "./todo/todoSlice.ts"
    const reducers = combineReducers(
        {
            auth:authReducer,
            todo:todoReducer})
export const store = configureStore({
    reducer: reducers,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch