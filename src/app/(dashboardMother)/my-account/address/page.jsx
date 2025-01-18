"use client";
import ShippingAddress from "@/components/ForCart/ShippingAddress";
import React, { useState } from "react";

const DashboardAddresses = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="mb-2">
        The following addresses will be used on the checkout page by default.
        <span className="text-red-500">*</span>
      </h1>
      <h1 className="text-2xl font-bold mb-2">Shipping address</h1>
      <div className="flex flex-col ">
        <p
          className="cursor-pointer underline mb-2 font-bold text-orange-600"
          onClick={() => setOpen(!open)}
        >
          Set Change address
        </p>

        <div
          className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
            open
              ? "max-h-[1000px] opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95"
          }`}
        >
          <ShippingAddress></ShippingAddress>
        </div>
      </div>
    </div>
  );
};

export default DashboardAddresses;
