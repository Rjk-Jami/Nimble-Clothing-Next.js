import Header from "@/utils/Header/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Header>Shopping Cart</Header>
      <div className="pt-10 w-11/12 xl:w-10/12 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default layout;
