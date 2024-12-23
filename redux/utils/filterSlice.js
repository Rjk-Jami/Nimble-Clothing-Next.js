import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  range: {
    min: 0,
    max: 0,
    filter: 0,
  },
  colorTag: {
    filterColors: ["Beige", "Black", "Blue", "LightBlue", "Red", "Violet"],
    filterColorControl: {
      beige: false,
      blue: false,
      lightblue: false,
      red: false,
      violet: false,
      black: false,
    },
  },
  sizeTag: {
    filterSizes: ["M", "L", "XL", "XXL"],
    filterSizeControl: {
      M: false,
      L: false,
      XL: false,
      XXL: false,
    },
  }
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // price
    setFilterByPrice: (state, action) => {
      state.range.min = action.payload.min;
      state.range.max = action.payload.max;
      state.range.filter = action.payload.filter;
    },
    // color
    setFilterByColor: (state, action) => {
      const color = action.payload.color;
      // Toggle (true/false)
      if (state.colorTag.filterColorControl[color] !== undefined) {
        state.colorTag.filterColorControl[color] =
          !state.colorTag.filterColorControl[color];
      }
    },
    setFilterBySize: (state, action) => {
      const size = action.payload.size;
      // Toggle (true/false)
      if (state.sizeTag.filterSizeControl[size] !== undefined) {
        state.sizeTag.filterSizeControl[size] =
          !state.sizeTag.filterSizeControl[size];
      }
    },
  },
});

export const { setFilterByPrice, setFilterByColor ,setFilterBySize} = filterSlice.actions;
export default filterSlice.reducer;
