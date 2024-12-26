import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterByColor,
  setFilterByPrice,
  setFilterBySize,
  clearAllFilters, // Import the action to clear all filters
} from "../../../redux/utils/filterSlice";

const FilterSelection = () => {
  const colorControl = useSelector(
    (state) => state.filter.colorTag.filterColorControl
  );
  const range = useSelector((state) => state.filter.range);
  const sizeControl = useSelector(
    (state) => state.filter.sizeTag.filterSizeControl
  );
  const dispatch = useDispatch();

  const handleClearFilters = () => {
    dispatch(clearAllFilters());
  };

  const isAnyFilterActive =
    range.filter !== 0 ||
    Object.values(colorControl).includes(true) ||
    Object.values(sizeControl).includes(true);

  if (!isAnyFilterActive) {
    return null;
  }

  return (
    <div className="flex gap-3 flex-wrap items-center">
      {/* Filter by color */}
      <div className="">
        <span
          className="hover:text-slate-600 cursor-pointer"
          onClick={handleClearFilters}
        >
          X{" "}
          <span className="hover:text-slate-400 text-yellow-600 font-semibold">
            Clear Filters
          </span>
        </span>
      </div>
      <div className="">
        <span>|</span>
      </div>
      <div>
        <ul className="flex gap-3 flex-wrap">
          {Object.entries(colorControl).map(([color, isActive], i) =>
            isActive ? (
              <li
                key={i}
                onClick={() => dispatch(setFilterByColor({ color: color }))}
              >
                <span className="hover:text-slate-600 cursor-pointer">
                  X{" "}
                  <span className="hover:text-slate-400 text-yellow-600 font-semibold">
                    {color}
                  </span>
                </span>
              </li>
            ) : null
          )}
        </ul>
      </div>

      {/* Filter by price */}
      <div>
        <ul>
          <li
            onClick={() =>
              dispatch(
                setFilterByPrice({ min: range.min, max: range.max, filter: 0 })
              )
            }
          >
            {range?.filter !== undefined && range?.filter !== 0 ? (
              <span className="hover:text-slate-600 cursor-pointer">
                X{" "}
                <span className="hover:text-slate-400 text-yellow-600 font-semibold">
                  Max:{range?.filter}
                </span>
              </span>
            ) : null}
          </li>
        </ul>
      </div>

      {/* Filter by size */}
      <div>
        <ul className="flex gap-3 flex-wrap">
          {Object.entries(sizeControl).map(([size, isActive], i) =>
            isActive ? (
              <li
                key={i}
                onClick={() => dispatch(setFilterBySize({ size: size }))}
              >
                <span className="hover:text-slate-600 cursor-pointer">
                  X{" "}
                  <span className="hover:text-slate-400 text-yellow-600 font-semibold">
                    {size}
                  </span>
                </span>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};

export default FilterSelection;
