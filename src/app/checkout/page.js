import Underline from "@/components/design/underline";
import YourOrder from "@/components/ForCheckout/YourOrder";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className=""></div>
      <div className="">
        <YourOrder></YourOrder>
        
      </div>
    </div>
  );
};

export default page;
