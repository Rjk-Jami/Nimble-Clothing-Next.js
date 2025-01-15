import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    paymentMethod : "cash",

    orderedProducts : [],
    PayableProducts:0,



}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers:{
        setPaymentMethod:(state, action)=>{
            state.paymentMethod = action.payload.payment;
        },
        getOrderProducts:(state, action)=>{
            state.orderedProducts = action.payload.products;
            state.PayableProducts = action.payload.PayableProducts;


        }

    }
})

export const { setPaymentMethod, getOrderProducts} = orderSlice.actions
export default orderSlice.reducer