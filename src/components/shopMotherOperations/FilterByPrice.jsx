import React, { useState, useEffect } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { setFilterByPrice } from "../../../redux/utils/filterSlice";

const FilterByPrice = () => {
  const dispatch = useDispatch();
  const range = useSelector((state) => state.filter.range);

  const [value, setValue] = useState(range.max);
  useEffect(() => {
    if (range.max === undefined) {
      setValue(0);
    } else {
      setValue(range.max);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range.max]);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      setFilterByPrice({ min: range.min, max: range.max, filter: value })
    );
  };

  return (
    <div className="p-4 bg-gray-50 rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="price-range"
          className="block text-lg uppercase font-semibold mb-2"
        >
          Filter by price
        </label>
        <input
          id="price-range"
          type="range"
          min={range.min}
          max={range.max}
          value={value}
          className="range range-sm"
          onChange={handleChange}
        />
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2">
            <span className="font-medium">Price:</span>
            <div className="flex items-center gap-1">
              <span>{range.min}</span>
              <FaBangladeshiTakaSign />
            </div>
            <span>&ndash;</span>
            <div className="flex items-center gap-1">
              <span>{value}</span>
              <FaBangladeshiTakaSign />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline btn-sm uppercase text-xs rounded-none"
          >
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterByPrice;
