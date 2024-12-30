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
import AboutBrand from "./AboutBrand";
import ShippingAndDelivery from "./ShippingAndDelivery";
import SizeChart from "./SizeChart";

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
        {/* pc version */}
          <div className="hidden  lg:grid lg:grid-cols-6 justify-items-center items-center uppercase font-semibold text-xs">
            {sections.map((section) => (
              <div
                key={section}
                className={`w-full text-center ${LinkButtonStyle}  ${
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


          <div className="hidden lg:block h-[1.5px] w-full bg-black"></div>
          {/* content */}
          <div className="mt-4 hidden lg:block">
            {/* Descriptions */}
            {activeSection === "Description" && (
              <Descriptions product={product}></Descriptions>
            )}
            {/* AdditionalInformation */}
            {activeSection === "Additional information" && (
              <AdditionalInformation product={product}></AdditionalInformation>
            )}
            {/* AddReview */}
            {activeSection === "Reviews (0)" && (
              <AddReview product={product}></AddReview>
            )}

            {activeSection === "About brand" && <AboutBrand></AboutBrand>}
            {activeSection === "Shipping & Delivery" && (
              <ShippingAndDelivery></ShippingAndDelivery>
            )}
            {activeSection === "Size Chart" && <SizeChart></SizeChart>}
          </div>
          {/* mobile version */}
          <div className="block lg:hidden">
            <div className="join rounded-none join-vertical w-full  p-8">
              {sections.map((section) => (
                <div
                  key={section}
                  className="collapse collapse-arrow join-item border-current  border"
                >
                  <input
                    type="radio"
                    name="accordion-sections"
                    onClick={() => setActiveSection(section)}
                  />
                  <div className="collapse-title text-xl font-medium">
                    {section}
                  </div>
                  <div className="collapse-content">
                    {/* Dynamically render content based on the section */}
                    {section === "Description" && (
                      <Descriptions product={product}></Descriptions>
                    )}
                    {section === "Additional information" && (
                      <AdditionalInformation
                        product={product}
                      ></AdditionalInformation>
                    )}
                    {section === "Reviews (0)" && (
                      <AddReview product={product}></AddReview>
                    )}
                    {section === "About brand" && <AboutBrand></AboutBrand>}
                    {section === "Shipping & Delivery" && (
                      <ShippingAndDelivery></ShippingAndDelivery>
                    )}
                    {section === "Size Chart" && <SizeChart></SizeChart>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdditionalProductsDetails;
