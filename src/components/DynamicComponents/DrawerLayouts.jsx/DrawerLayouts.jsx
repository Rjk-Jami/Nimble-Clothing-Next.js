import menuIcons from "@/utils/icons/menuIcons";
import React from "react";
import { FaBars } from "react-icons/fa"; // Fallback icon for menu button
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";

const Drawer = ({
  position = "right",
  drawerId = "my-drawer",
  labelType = "nav",
  labelContent = "",
  children
}) => {

  const cartQuantity = useSelector((state)=>state.productsMaster?.productsCart?.reduce((total, product) => total + product.quantity, 0))
  // Determine the drawer class based on the position
  const drawerClass =
    position === "right" ? "drawer drawer-end " : "drawer drawer-start";

  // Dynamic label rendering
  const labelThis = () => {
    if (labelType === "nav") {
      return (
        <label
          htmlFor={drawerId}
          className="drawer drawer-end font-bold px-2 drawer-button cursor-pointer"
        >
          {labelContent}
        </label>
      );
    }

    if (labelType === "menu") {
      return (
        <label
          htmlFor={drawerId}
          className="text-xl drawer-button cursor-pointer"
        >
          {/* Fallback to hamburger icon if no menuIcons */}
          <FaBars className="" /> {/* Fallback to hamburger icon */}
        </label>
      );
    }
    if (labelType === "cart") {
      return (
        <label
          htmlFor={drawerId}
          className="text-xl drawer-button cursor-pointer"
        >
         
           <div className="flex items-center indicator">
           <GrCart></GrCart>
           <span  className="bg-orange-600 text-white dark:text-black px-1 text-xs rounded-full indicator-item ">{cartQuantity}</span>
           </div>
        </label>
      );
    }
    else if (labelType === "filter") {
      return (
        <label
          htmlFor={drawerId}
          className="drawer drawer-end font-bold  drawer-button btn btn-outline rounded-none w-fit btn-sm cursor-pointer"
        >
          {labelContent}
        </label>
      );
    }

    return null; // Return null if unsupported labelType
  };

  const labelContentRendered = labelThis();

  return (
    <div className={drawerClass}>
      {/* Drawer Toggle */}
      <input id={drawerId} type="checkbox" className="drawer-toggle" />

      {/* Drawer Content */}
      <div className="drawer-content">
        {/* Page content */}
        {labelContentRendered}
      </div>

      {/* Drawer Sidebar */}
      <div className="drawer-side z-50">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div
          className={`transition menu bg-white dark:bg-base-200 text-base-content min-h-full ${
            position === "right" ? "w-80 lg:w-[22rem]" : "w-80"
          }`}
        >
          {/* Sidebar content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
