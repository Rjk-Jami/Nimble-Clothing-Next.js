import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    range: {
        min: 0,
        max:0,
        filter:0,
    },

}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        setFilterByPrice : (state, action)=>{
            state.range.min = action.payload.min
            state.range.max = action.payload.max
            state.range.filter = action.payload.filter
        }
    }
})

export const {setFilterByPrice} = filterSlice.actions
export default filterSlice.reducer