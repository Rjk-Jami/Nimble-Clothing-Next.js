"use client";
import { useEffect, useState } from "react";
import { ColorRing, RotatingSquare } from "react-loader-spinner";

const Loading = () => {
  const [color, setColor] = useState("#000"); // Default to black

  useEffect(() => {
    // Check if dark mode is enabled
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setColor(isDarkMode ? "#fff" : "#00000"); // White for dark mode, Black for light mode
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 dark:bg-black/30">
      <div className="flex flex-col items-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#abbd81", "#f47e60", "#f8b26a", "#e15b64", "#849b87"]}
        />
      </div>
    </div>
  );
};

export default Loading;
