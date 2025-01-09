import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem("theme") || "emerald";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: initialTheme,
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "emerald" ? "business" : "emerald";
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
