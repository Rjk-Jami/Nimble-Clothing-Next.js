/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { notFound, usePathname } from "next/navigation";
import React from "react";
import { TiArrowLeftThick } from "react-icons/ti";

const layout = ({ children }) => {
  const pathname = usePathname();
  // console.log(pathname);

  // Function to handle pathname using switch 
  const getCategoryTitle = () => {
    switch (pathname) {
      case "/products-category/sweatshirts":
        return "Sweatshirts";
      case "/products-category/t-shirts":
        return "T-Shirts";
      case "/products-category/hoodies":
        return "Hoodies";
      case "/products-category/pants":
        return "Pants";
      case "/products-category/boxers":
        return "Boxers";
      default:
        notFound();
    }
  };

  return (
    // 5
    <div className="text-black  dark:text-white dark:bg-black">
      <div className="pt-32 pb-5">
        <div className="flex justify-center items-center gap-2">
          <TiArrowLeftThick className="text-2xl" />
          <h1 className="text-7xl font-bold">{getCategoryTitle()}</h1>
        </div>
      </div>
      {children}
    </div>
  );
};

export default layout;
