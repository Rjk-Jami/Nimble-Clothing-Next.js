import React, { useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const FilterByPrice = ({ products }) => {
  let range = {
    min: 400,
    max: 1200,
  };
  const [value, setValue] = useState(range.max);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="email"
          className="block text-lg uppercase font-semibold mb-1"
        >
          Filter by price
        </label>
        <input
          type="range"
          min={range.min}
          max={range.max}
          value={value}
          className="range range-sm "
          onChange={handleChange}
        />

       <div className="flex justify-between">
       <div className="flex items-center gap-2 ">
          <span>Price:</span>
          <div className="flex items-center">
            <span>{range.min}</span>
            <span>
              <FaBangladeshiTakaSign />
            </span>
          </div>
          &ndash;
          <div className="flex items-center">
            <span>{value}</span>
            <span>
              <FaBangladeshiTakaSign />
            </span>
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
