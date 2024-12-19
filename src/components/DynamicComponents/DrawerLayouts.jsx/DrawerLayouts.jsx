import menuIcons from "@/utils/icons/menuIcons";
import React from "react";
// import './drawerStyle.css'
const Drawer = ({
  position = "right",
  drawerId = "my-drawer",
  
  labelType = "nav",
  labelContent = "",
  children
}) => {
  // Determine the drawer class based on the position
  const drawerClass =
    position === "right" ? "drawer drawer-end " : "drawer drawer-start";
// dynamic label 

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
            className="btn btn-ghost btn-circle drawer-button"
          >
           {menuIcons}
          </label>
        );
      }
    
      return null; // Default case if no labelType matches
    };
    
    const labelContentRendered = labelThis();

  return (
    <div className={`${drawerClass} `}>
      {/* Drawer Toggle */}
      <input id={drawerId} type="checkbox" className="drawer-toggle" />

      {/* Drawer Content */}
      <div className="drawer-content">
        {/* Page content here */}
        {labelContentRendered}
        
      </div>

      {/* Drawer Sidebar */}
      <div className="drawer-side z-40">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-white dark:bg-base-200 text-base-content min-h-full w-80">
          {/* Sidebar content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
