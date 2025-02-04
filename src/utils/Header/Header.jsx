"use client"
import React from "react";
import { TiArrowLeftThick } from "react-icons/ti";

const Header = ({ children }) => {
  return (
    <div className="pt-20 lg:pt-32 pb-5 mx-10 lg:mx-0">
      <div className="flex justify-between items-center  flex-col">
        <div className="flex justify-center items-center gap-2">
          <TiArrowLeftThick
            className="text-2xl"
            onClick={() => window.history.back()}
          />
          <h1 className="lg:text-7xl text-5xl  font-bold tracking-widest text-center">
            {children}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
