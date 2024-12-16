/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { notFound, usePathname } from "next/navigation";
import React from "react";
import { TiArrowLeftThick } from "react-icons/ti";

const layout = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname);

// Function to handle pathname
const getCategoryTitle = () => {
  switch (pathname) {
    case '/products-category/sweatshirts':
      return 'Sweatshirts';
    case '/products-category/t-shirts':
      return 'T-Shirts';
    case '/products-category/hoodies':
      return 'Hoodies';
    case '/products-category/pants':
      return 'Pants';
    case '/products-category/boxers':
      return 'Boxers';
    default:
       notFound();
  }
};

  return (
    // 5
    <div>
      <div className="">
        <div className="">
        <TiArrowLeftThick />
        <h1>
  {
    getCategoryTitle()
  }
</h1>
        </div>
      </div>
      {children}
    </div>
  );
};

export default layout;
