import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: "",
    token: "",
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        userRegistration :(state, action)=>{
            state.token = action.payload.accessToken
            state.user = action.payload.user
        },
        userLogin :(state, action)=>{
            state.token = action.payload.accessToken
            state.user = action.payload.user
        },
        userLogOut : (state,action)=>{
            state.token = ""
            state.user = ""
        }
    }
})

export const {userRegistration, userLogin, userLogOut} = authSlice.actions

export default authSlice.reducer