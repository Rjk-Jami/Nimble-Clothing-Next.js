import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    paymentMethod : "cash"
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers:{
        setPaymentMethod:(state, action)=>{
            state.paymentMethod = action.payload.payment;
        }
    }
})

export const { setPaymentMethod} = orderSlice.actions
export default orderSlice.reducer