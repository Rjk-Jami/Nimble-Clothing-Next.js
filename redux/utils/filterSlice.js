import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFilter: false,
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
      12: true,
      16: false,
      24: false,
    },
  },
  displayTag: {
    filterDisplays: ["2", "3", "4"],
    filterDisplaysControl: {
      2: false,
      3: true,
      4: false,
    },
  },
  sortTag: {
    filterSort: [
      "default sorting",
      "latest",
      "Price: Low to High",
      "Price: High to Low",
    ],
    filterSortControl: {
      defaultSorting: true,
      latest: false,
      PriceLowToHigh: false,
      PriceHighToLow: false,
    },
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // filter on/off state
    setIsFilter: (state, action) => {
      state.isFilter = action.payload.isFilter;
    },
    // price
    setFilterByPrice: (state, action) => {
      state.range.min = action.payload.min;
      state.range.max = action.payload.max;
    },
    setFilterByPriceByFilteredValue: (state, action) => {
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

      // Check if the show key exists in filterShowControl
      if (show in state.showTag.filterShowControl) {
        // Reset all show controls to false
        for (const key in state.showTag.filterShowControl) {
          state.showTag.filterShowControl[key] = false;
        }

        // Set the selected show to true
        state.showTag.filterShowControl[show] = true;
      }
    },

    // display
    setFilterForDisplay: (state, action) => {
      const display = action.payload.display;

      // Check if the display key exists in filterDisplaysControl
      if (display in state.displayTag.filterDisplaysControl) {
        // Reset all display controls to false
        for (const key in state.displayTag.filterDisplaysControl) {
          state.displayTag.filterDisplaysControl[key] = false;
        }

        // Set the selected display to true
        state.displayTag.filterDisplaysControl[display] = true;
      }
    },

    setFilterForSort: (state, action) => {
      const sort = action.payload.sort;

      if (sort in state.sortTag.filterSortControl) {
        // Reset all filters to false
        for (const key in state.sortTag.filterSortControl) {
          state.sortTag.filterSortControl[key] = false;
        }

        // Enable the selected sort option
        state.sortTag.filterSortControl[sort] = true;
      }
    },

    clearAllFilters: (state) => {
      // Reset range filter
      state.range.filter = 0;

      // Reset colorTag filters
      for (const key in state.colorTag.filterColorControl) {
        state.colorTag.filterColorControl[key] = false;
      }

      // Reset sizeTag filters
      for (const key in state.sizeTag.filterSizeControl) {
        state.sizeTag.filterSizeControl[key] = false;
      }
    },
  },
});

export const {
  setIsFilter,
  setFilterByPrice,
  setFilterByPriceByFilteredValue,
  setFilterByColor,
  setFilterBySize,
  setFilterWithShow,
  setFilterForDisplay,
  setFilterForSort,
  clearAllFilters, // Export the new action
} = filterSlice.actions;
export default filterSlice.reducer;
