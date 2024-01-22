import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from "../store/auth/counterSlice.ts"
    // const reducers = combineReducers({
    //     authReducer:authReducer
    // })

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})