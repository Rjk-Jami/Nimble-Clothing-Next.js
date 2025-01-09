'use client';


import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/theme/themeSlice";


const Themes = ({ className }) => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <label className="swap swap-rotate dark:bg-black/20">
      {/* This hidden checkbox controls the state */}
      <input type="checkbox" onClick={() => dispatch(toggleTheme())} />

      {/* Sun Icon */}
      <IoSunny
        className={`swap-on text-xl ${className} ${
          theme === "emerald" ? "" : "hidden"
        }`}
      />

      {/* Moon Icon */}
      <IoMdMoon
        className={`swap-off text-xl ${className} ${
          theme === "business" ? "" : "hidden"
        }`}
      />
    </label>
  );
};

export default Themes;
