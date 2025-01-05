import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productCompare: [],
    productWishList:[],
    productsCart:[],
}

export const productSlice = createSlice({
    name:"productsMaster",
    initialState,
    reducers:{
        userAddToCart:(state, action)=>{
            const product_id = action.payload
            if(!state.productsCart.includes(product_id)){
                state.productsCart.push(product_id)
               }
        },
        userRemoveFromCart : (state,action)=>{
            const product_id = action.payload
            state.productsCart = state.productsCart.filter(id=> id !== product_id )
        },

        userAddCompare :(state, action)=>{
           const product_id = action.payload
           if(!state.productCompare.includes(product_id)){
            state.productCompare.push(product_id)
           } 
        },
        userAddWishList :(state, action)=>{
            const product_id = action.payload
            if(!state.productWishList.includes(product_id)){
             state.productWishList.push(product_id)
            } 
        },
        userDeleteCompare : (state,action)=>{
            const product_id = action.payload
            state.productCompare = state.productCompare.filter(id=> id !== product_id )
        },
        userDeleteWhishList : (state,action)=>{
            const product_id = action.payload
            state.productWishList = state.productWishList.filter(id=> id !== product_id )  
        },
        userDeleteAllCompare : (state,action)=>{
            state.productCompare = [];
        },
        userDeleteAllWhishList : (state,action)=>{
            state.productWishList = [];
        }

    }
})

export const {userAddToCart, userRemoveFromCart,userAddCompare , userAddWishList, userDeleteCompare, userDeleteWhishList, userDeleteAllCompare, userDeleteAllWhishList} = productSlice.actions

export default productSlice.reducer