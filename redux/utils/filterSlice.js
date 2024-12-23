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
  },
  showTag: {
    filterShows: ["9", "12", "16", "24"],
    filterShowControl: {
      9: false,
      12: false,
      16: false,
      24: false,
    },
  },
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
    // show
    setFilterWithShow: (state, action) => {
      const show = action.payload.show;
      // Toggle (true/false)
      if (state.showTag.filterShowControl[show] !== undefined) {
        // Reset all shows to false
        Object.keys(state.showTag.filterShowControl).forEach((key) => {
          state.showTag.filterShowControl[key] = false;
        });

        // Set the selected show to true
        state.showTag.filterShowControl[show] = true;
      }
    },
  },
});

export const {
  setFilterByPrice,
  setFilterByColor,
  setFilterBySize,
  setFilterWithShow,
} = filterSlice.actions;
export default filterSlice.reducer;
