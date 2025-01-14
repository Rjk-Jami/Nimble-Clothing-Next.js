import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: "",
    token: "",
    errorMassage: ''
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        userRegistration :(state, action)=>{
            state.token = action.payload.token
            state.user = action.payload.user
        },
        userLogin :(state, action)=>{
            state.token = action.payload.token
            state.user = action.payload.user
        },
        userLogOut : (state,action)=>{
            state.token = ""
            state.user = ""
        },
        setErrorMassage :(state, action)=>{
            state.errorMassage = action.payload.errorMassage
            
        },
        removeErrorMassage :(state, action)=>{
            state.errorMassage = ''
            
        },

    }
})

export const {userRegistration, userLogin, userLogOut,setErrorMassage,removeErrorMassage} = authSlice.actions

export default authSlice.reducer