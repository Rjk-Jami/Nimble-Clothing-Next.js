import { LinkButtonStyle } from "@/components/features/produtsMenu";
import React, { useState } from "react";

const DashboardOrderContainer = ({ orderedProducts, isLoading }) => {
  const [activeSection, setActiveSection] = useState("All");
  const sections = ["All", "To Pay", "To Ship", "To Receive", "To Review"];
  return (
    <div>
      {!isLoading && orderedProducts ? (
        <>
          <div className="  grid grid-cols-5 justify-items-center items-center uppercase font-semibold text-xs">
            {sections.map((section) => (
              <div
                key={section}
                className={`w-full text-center cursor-pointer ${LinkButtonStyle}  ${
                  activeSection === section
                    ? "before:w-full"
                    : "hover:before:w-full"
                }`}
                onClick={() => setActiveSection(section)}
              >
                <span>{section}</span>
              </div>
            ))}
          </div>
          <div className="block h-[1.5px] w-full bg-black"></div>
          <div className="mt-4 block">
            {activeSection === "All" && "all"}
            {activeSection === "To Pay" && "To Pay"}
            {activeSection === "To Ship" && "To Ship"}
            {activeSection === "To Receive" && "To Receive"}
            {activeSection === "To Review" && "To Review"}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashboardOrderContainer;
