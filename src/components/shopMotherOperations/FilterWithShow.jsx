import React, { useEffect } from "react";
import Label from "../utils/Label";
import { useDispatch, useSelector } from "react-redux";
import { setFilterWithShow } from "../../../redux/utils/filterSlice";

const FilterWithShow = () => {
  const shows = useSelector((state) => state.filter.showTag.filterShows);
  console.log(shows);
  const dispatch = useDispatch();

  const showControl = useSelector(
    (state) => state.filter.showTag.filterShowControl
  );
  useEffect(() => {
    console.log(showControl);
  }, [showControl]);
  const handleShowChange = (showValue) => {
    dispatch(setFilterWithShow({ show: showValue }));
  };

  return (
    <div className="flex gap-2 items-baseline">
      <Label size={"text-sm"} htmlFor={"show"}>
        Show :
      </Label>
      <div className="flex ">
        {shows?.map((show, i) => (
          <div className="flex gap-2" key={i}>
            <div
              className={`cursor-pointer ${
                showControl[show] === true
                  ? "font-bold"
                  : " "
              }`}
              onClick={() => handleShowChange(show)}
            >
              {show}
            </div>
            <div className="">{i !== show.length + 1 && "/"}&nbsp;</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterWithShow;
