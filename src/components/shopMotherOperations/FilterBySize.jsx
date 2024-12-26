import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Label from "../utils/Label";
import { setFilterBySize } from "../../../redux/utils/filterSlice";

const FilterBySize = () => {
  const sizes = useSelector((state) => state.filter.sizeTag.filterSizes);
  const sizeControl = useSelector(
    (state) => state.filter.sizeTag.filterSizeControl
  );

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     console.log(sizeControl);
  //   }, [sizeControl]);
  const handleSizeChange = (size) => {
    dispatch(setFilterBySize({ size: size }));
  };
  return (
    <div className="mb-4">
      <Label uppercase={true} size={"text-lg"} htmlFor="size">
        Filter by size
      </Label>
      <div className=" flex flex-col gap-2">
        {sizes?.map((size, i) => (
          <div
            key={i}
            className="group flex items-center gap-2 cursor-pointer justify-between w-full"
            onClick={() => handleSizeChange(size)}
          >
            <div
              className={`group-hover:outline group-hover:outline-2 group-hover:outline-gray-300 rounded-full px-2 ${
                sizeControl[size] === true
                  ? "outline outline-2 outline-current"
                  : " "
              }`}
            >
              {size}
            </div>

            <div className="">
              <input
                className="checkbox checkbox-md rounded-full "
                type="checkbox"
                checked={!!sizeControl[size]}
                readOnly
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBySize;
