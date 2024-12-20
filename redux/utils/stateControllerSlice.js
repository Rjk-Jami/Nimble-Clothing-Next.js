import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginPage: false,
  isHidePassword: true,
};

export const stateControllerSlice = createSlice({
  name: "stateController",
  initialState,
  reducers: {
    setIsLoginPage: (state, action) => {
      state.isLoginPage = action.payload;
    },
    setIsHidePassword: (state, action) => {
      state.isHidePassword = action.payload;
    },
  },
});
export const { setIsLoginPage, setIsHidePassword } = stateControllerSlice.actions;

export default stateControllerSlice.reducer;
