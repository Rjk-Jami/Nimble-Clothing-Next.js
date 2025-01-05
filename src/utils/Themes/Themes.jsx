'use client';
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

// src/components/ThemeSwitcher.jsx
import { useEffect, useState } from "react";

const Themes = ({className}) => {
  const [isDarkMode, setIsDarkMode] = useState();

  useEffect(() => {
    // Sync the theme with the local storage and root attribute
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "business");
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      // Default to light mode
      document.documentElement.setAttribute("data-theme", "emerald");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "emerald" : "business";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className="swap swap-rotate  dark:bg-black/20">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onClick={toggleTheme} />

 {/* sun icon */}

{/* moon icon */}
 <IoSunny className={`swap-on text-xl  ${className}`}></IoSunny>
<IoMdMoon className={`swap-off text-xl ${className}`}></IoMdMoon>
</label>
  );
};

export default Themes;
