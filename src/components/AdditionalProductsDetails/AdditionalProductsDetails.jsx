import { useState } from "react";
import { LinkButtonStyle } from "../features/produtsMenu";
import { FaCottonBureau } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { FaClone } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import Underline from "../design/underline";
import AdditionalInformation from "./AdditionalInformation";
import Descriptions from "./Descriptions";
import AddReview from "./AddReview";

const AdditionalProductsDetails = ({ product, isLoading }) => {
  const [activeSection, setActiveSection] = useState("Description");

  const sections = [
    "Description",
    "Additional information",
    "Reviews (0)",
    "About brand",
    "Shipping & Delivery",
    "Size Chart",
  ];

  return (
    <div className="">
      {/* header */}
      {!isLoading && product ? (
        <>
          <div className="hidden  lg:grid lg:grid-cols-6 justify-items-center items-center uppercase font-semibold text-xs">
            {sections.map((section) => (
              <div
                key={section}
                className={`w-full text-center ${LinkButtonStyle}  ${
                  activeSection === section ? "before:w-full" : "hover:before:w-full"
                }`}
                onClick={() => setActiveSection(section)}
              >
                <span>{section}</span>
              </div>
            ))}
          </div>
          <div className="h-[1.5px] w-full bg-black"></div>
          {/* content */}
          <div className="mt-4">
            {activeSection === "Description" && (
              <Descriptions product={product}></Descriptions>
            )}
            {activeSection === "Additional information" && (
              <AdditionalInformation product={product}></AdditionalInformation>
            )}
            {activeSection === "Reviews (0)" && (
              <AddReview product={product}></AddReview>
            )}
            {activeSection === "About brand" && <div>{""}</div>}
            {activeSection === "Shipping & Delivery" && <div>{""}</div>}
            {activeSection === "Size Chart" && <div>{""}</div>}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdditionalProductsDetails;
