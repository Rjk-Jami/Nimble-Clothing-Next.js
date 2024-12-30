import React from "react";
import Label from "../utils/Label";
import { useDispatch, useSelector } from "react-redux";
import { setFilterForSort, setIsFilter } from "../../../redux/utils/filterSlice";

const SortByOperation = () => {
  const filterSort = useSelector((state) => state.filter.sortTag.filterSort);
  const filterSortControl = useSelector(
    (state) => state?.filter?.sortTag?.filterSortControl
  );



  const dispatch = useDispatch();


  const handleSortChange = (sortValue) => {
    const sortMapping = {
      "default sorting": "defaultSorting",
      latest: "latest",
      "Price: Low to High": "PriceLowToHigh",
      "Price: High to Low": "PriceHighToLow",
    };
  
    const sortKey = sortMapping[sortValue]; 
    if (sortKey) {
      dispatch(setFilterForSort({ sort: sortKey })); // Dispatch with the mapped key
    } 
    if (sortKey === "defaultSorting") {
      dispatch(setIsFilter({ isFilter: false }));
    } else {
      dispatch(setIsFilter({ isFilter: true }));
    }
  };
  

  return (
    <div>
      <div className="flex gap-2">
        <div className="mt-2">
          <Label size={"text-sm"} htmlFor={"show"}>
            Sort by:
          </Label>
        </div>

        <select
          name="sort"
          id="sort"
          className="focus:outline-none rounded-none select select-bordered outline-none hover:outline-none select-sm"
          onChange={(e) => handleSortChange(e.target.value)}
        >
          {filterSort.map((sortOption, index) => (
            <option key={index} value={sortOption}>
              {sortOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortByOperation;
