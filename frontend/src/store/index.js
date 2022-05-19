import { createStore } from "redux";
import {
    createContextSlice,
    createSlice,
    configureStore,
} from "@reduxjs/toolkit";

const initialState = {login:false, profile:{}, other:[]}
const loginSlice = createSlice({
    name:'login',
    initialState:initialState,
    reducers:{
        login(state,action){
            state.login = action.payload;
        },
        profile(state,action){
            state.profile = action.payload;
        },
        other(state,action){
            state.other = action.payload;
        }
    }
})


const store = configureStore({
    reducer:{login:loginSlice.reducer}
})

export const loginAction = loginSlice.actions;
export default store;