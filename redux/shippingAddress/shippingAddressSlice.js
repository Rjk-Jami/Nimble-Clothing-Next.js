// src/slices/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  town: '',
  zipcode: '',
  district: 'Dhaka',
  shippingCost: '60',
};

const shippingAddressSlice = createSlice({
  name: 'shippingAddress',
  initialState,
  reducers: {
    setShippingAddress: (state, action) => {
      state.town = action.payload.town;
      state.zipcode = action.payload.zipcode;
      state.district = action.payload.district;


      state.shippingCost = (state.district === "Dhaka" ? 60.00 : 120.00);
    },
  },
});

export const { setShippingAddress } = shippingAddressSlice.actions;

export default shippingAddressSlice.reducer;
