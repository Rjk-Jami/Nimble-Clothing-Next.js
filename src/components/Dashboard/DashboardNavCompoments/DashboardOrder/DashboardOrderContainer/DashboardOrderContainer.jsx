import { LinkButtonStyle } from "@/components/features/produtsMenu";
import React, { useState } from "react";
import DashboardOrderAll from "./DashboardOrderAll";
import { useSelector } from "react-redux";
import ErrorAlert from "@/components/Alert/ErrorAlert";
import DashboardOrderToPay from "./DashboardOrderToPay";
import DashboardOrderToShip from "./DashboardOrderToShip";
import DashboardOrderToReceive from "./DashboardOrderToReceive";

const DashboardOrderContainer = () => {
  const orderedProducts = useSelector((state) => state.order.orderedProducts);
  const [activeSection, setActiveSection] = useState("All");

  const sections = ["All", "To Pay", "To Ship", "Received", "To Review"];

  

  if (!orderedProducts || orderedProducts.length === 0) {
    return <ErrorAlert message="No orders found." />;
  }

  return (
    <div>
      <div className="grid grid-cols-5 justify-items-center items-center uppercase font-semibold text-sm">
        {sections.map((section) => (
          <div
            key={section}
            className={`w-full text-center cursor-pointer ${LinkButtonStyle} ${
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
        {activeSection === "All" && <DashboardOrderAll />}
        {activeSection === "To Pay" && <div><DashboardOrderToPay></DashboardOrderToPay></div>}
        {activeSection === "To Ship" && <div><DashboardOrderToShip></DashboardOrderToShip></div>}
        {activeSection === "Received" && <div><DashboardOrderToReceive></DashboardOrderToReceive></div>}
        {activeSection === "To Review" && <div>To Review Section</div>}
      </div>
    </div>
  );
};

export default DashboardOrderContainer;
