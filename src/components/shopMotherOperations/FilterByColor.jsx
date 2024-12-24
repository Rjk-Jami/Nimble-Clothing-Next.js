import { useSelector, useDispatch } from "react-redux";
import Label from "../utils/Label";
import { setFilterByColor } from "../../../redux/utils/filterSlice";
import { useEffect } from "react";

const ColorFilter = () => {
  const colors = useSelector((state) => state.filter.colorTag.filterColors);
  const colorControl = useSelector(
    (state) => state.filter.colorTag.filterColorControl
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(colorControl);
  // }, [colorControl]);

  const getColorStyle = (color) => {
    switch (color) {
      case "Beige":
        return "bg-[#f5f5dc]";
      case "Black":
        return "bg-black";
      case "Blue":
        return "bg-blue-500";
      case "LightBlue":
        return "bg-blue-300";
      case "Red":
        return "bg-red-500";
      case "Violet":
        return "bg-violet-500";
      default:
        return undefined;
    }
  };

  const handleColorChange = (color) => {

    dispatch(setFilterByColor({ color: color }));
  };

  return (
    <div className="mb-4">
      <Label uppercase={true} htmlFor="color" size={"text-lg"}>Filter by color</Label>
      <div className="flex flex-col gap-2">
        {colors?.map((color, i) => (
          <div
            key={i}
            className="group flex items-center gap-2 cursor-pointer justify-between w-full"
            onClick={() => handleColorChange(color.toLowerCase())}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-7 h-7 rounded-full group-hover:outline group-hover:outline-2 group-hover:outline-gray-300  ${getColorStyle(color)}`}
              >

              </div>
              <div>{color}</div>
            </div>
            <div className="">
              <input
              className="checkbox checkbox-md rounded-full "
                type="checkbox"
                checked={!!colorControl[color.toLowerCase()]}
                readOnly
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
