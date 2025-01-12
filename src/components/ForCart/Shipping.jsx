"use client"
import React, { useState } from "react";
import ShippingAddress from "./ShippingAddress";
import { useSelector } from "react-redux";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Shipping = () => {
  const [open, setOpen] = useState(false);

  // console.log(open, "change Address")
const {town,zipcode,district, shippingCost} = useSelector((state)=>state?.shippingAddress)
  return (
    <div className="grid grid-cols-6 lg:gap-1 gap-8 items-center">
      <div className="col-span-2">
        <h1 className="font-bold ">Shipping</h1>
      </div>
      <div className=" col-span-4 w-full flex flex-col gap-1">
        <h1 className="flex items-center justify-end">Flat Rate:{shippingCost}<FaBangladeshiTakaSign></FaBangladeshiTakaSign></h1>
        <h1 className="text-right">Shipping to {town}{town && ", "  }{district}{zipcode && ", "}{zipcode}.</h1>
        <div className="flex flex-col ">
          <p
            className="cursor-pointer ms-auto mb-2 font-bold text-orange-600"
            onClick={() => setOpen(!open)}
          >
            Change address
          </p>

          <div
            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
              open ? "max-h-[1000px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
            }`}
          >
           <ShippingAddress></ShippingAddress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
