import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterByColor,
  setFilterByPrice,
  setFilterBySize,
  clearAllFilters,
  setIsFilter,
  setFilterByPriceByFilteredValue, // Import the action to clear all filters
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
   dispatch(setIsFilter({isFilter : false})); 
    dispatch(clearAllFilters());
  };
  const [isAnyFilterActive, setIsAnyFilterActive] = useState(false);
  useEffect(() => {
    let isActive =
      (range.filter && range.filter !== 0) ||
      Object.values(colorControl).includes(true) ||
      Object.values(sizeControl).includes(true);

    setIsAnyFilterActive(isActive);

    if (!isActive) {
      dispatch(setIsFilter({ isFilter: false }));
    } else {
      dispatch(setIsFilter({ isFilter: true }));
    }
  }, [colorControl, sizeControl, range, dispatch]);

  return (
    <div className="flex gap-3 flex-wrap items-center">
      {/* Filter by color */}
      <div className="">
        {
          isAnyFilterActive && (<span
            className="hover:text-slate-600 cursor-pointer"
            onClick={handleClearFilters}
          >
            X{" "}
            <span className="hover:text-slate-400  font-semibold">
              Clear Filters
            </span>
          </span>)
        }
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
                  <span className="hover:text-slate-400  font-semibold">
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
                setFilterByPriceByFilteredValue({filter: 0 })
              )
            }
          >
            {range?.filter !== undefined && range?.filter !== 0 ? (
              <span className="hover:text-slate-600 cursor-pointer">
                X{" "}
                <span className="hover:text-slate-400  font-semibold">
                  Max:<span className="text-orange-500">{range?.filter}</span>
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
                  <span className="hover:text-slate-400  font-semibold">
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
