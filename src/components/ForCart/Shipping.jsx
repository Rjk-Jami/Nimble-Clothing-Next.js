import React, { useState } from "react";
import ShippingAddress from "./ShippingAddress";

const Shipping = () => {
  const [open, setOpen] = useState(false);

  console.log(open, "change Address");

  return (
    <div className="flex justify-between items-center">
      <div className="">
        <h1>Shipping</h1>
      </div>
      <div className="flex flex-col items-end">
        <h1>Flat Rate: 60.00</h1>
        <h1>Shipping to Dhaka.</h1>
        <div className="flex flex-col items-end">
          <p
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            Change address
          </p>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
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
