import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterForDisplay } from "../../../redux/utils/filterSlice";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

const FilterForDisplay = () => {
  const displays = useSelector(
    (state) => state.filter.displayTag.filterDisplays
  );
  // console.log(displays);
  const dispatch = useDispatch();

  const displayControl = useSelector(
    (state) => state.filter.displayTag.filterDisplaysControl
  );
  //   useEffect(() => {
  //     console.log(displayControl);
  //   }, [displayControl]);
  const handleDisplayChange = (displayValue) => {
    dispatch(setFilterForDisplay({ display: displayValue }));
  };
  return (
    <div>
      <div className="hidden md:flex gap-2 ">
        {displays?.map((display, i) => (
          <div className="flex gap-2 items-center" key={i}>
            <div
              className={`cursor-pointer ${
                displayControl[display] === true ? "font-bold" : " "
              }`}
              onClick={() => handleDisplayChange(display)}
            >
              {display === "2" ? (
                <TfiLayoutGrid2Alt
                  className={` text-[1.4rem] ${
                    displayControl[display] === true ? "" : "text-slate-500 "
                  }`}
                />
              ) : display === "3" ? (
                <TfiLayoutGrid3Alt
                  className={`text-[1.45rem] ${
                    displayControl[display] === true ? "" : "text-slate-500"
                  }`}
                />
              ) : (
                <TfiLayoutGrid4Alt
                  className={`text-[1.6rem] ${
                    displayControl[display] === true ? "" : "text-slate-500"
                  }`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterForDisplay;
