const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  paymentData: null,
  paymentResult: null,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentData: (state, action) => {
        // console.log("trigger")
      state.paymentData = action.payload;
    },
    clearPaymentData:(state, action)=>{
      state.paymentData = null
      state.paymentResult = null
    },
    setPaymentResult: (state, action) => {
      state.paymentResult = action.payload;
    },
  },
});

export const {setPaymentData,setPaymentResult, clearPaymentData } = paymentSlice.actions
export default paymentSlice.reducer