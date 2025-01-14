import React, { useState, useEffect } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { setFilterByPrice, setFilterByPriceByFilteredValue, setIsFilter } from "../../../redux/utils/filterSlice";
import Label from "../utils/Label";

const FilterByPrice = () => {
  const dispatch = useDispatch();
  const range = useSelector((state) => state.filter.range);

  const [value, setValue] = useState(range.max);
  useEffect(() => {
    if (range?.max !== undefined) {
      setValue(range.filter !== undefined && range.filter !== 0 ? range.filter : range.max);
    } else {
      setValue(0);
    }
  }, [range?.max, range?.filter]);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setIsFilter({isFilter : true}));
    dispatch(
      setFilterByPriceByFilteredValue({filter: value })
    );
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit}>
        <Label  uppercase={true} size={'text-lg'} htmlFor={"price-range"}>Filter by price</Label>
        <input
          id="price-range"
          type="range"
          min={range.min}
          max={range.max}
          value={value}
          className="range range-sm rounded-full"
          onChange={handleChange}
        />
        <div className="flex flex-wrap md:flex-col lg:flex-row justify-between  items-center mt-3 flex-grow">
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
