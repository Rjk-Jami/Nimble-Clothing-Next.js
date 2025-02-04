'use client';

import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/theme/themeSlice";
import { useEffect } from "react";

const Themes = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <label className={`swap swap-rotate dark:bg-black/20 `}>
      {/* Hidden checkbox to control theme toggling */}
      <input type="checkbox" onChange={() => dispatch(toggleTheme())} checked={theme === "business"} />

      {/* Sun Icon for Light Mode */}
      <IoSunny className={`swap-on text-xl lg:block ${theme === "emerald" ? "" : ""}`} />

      {/* Moon Icon for Dark Mode */}
      <IoMdMoon className={`swap-off text-xl lg:block  ${theme === "business" ? "" : ""}`} />
    </label>
  );
};

export default Themes;
