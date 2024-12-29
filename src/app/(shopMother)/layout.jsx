/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { notFound, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import Underline from "@/components/design/underline";
import FilterByPrice from "@/components/shopMotherOperations/FilterByPrice";
import FilterByColor from "@/components/shopMotherOperations/FilterByColor";
import FilterBySize from "@/components/shopMotherOperations/FilterBySize";
import FilterWithShow from "@/components/shopMotherOperations/FilterWithShow";
import FilterForDisplay from "@/components/shopMotherOperations/FilterForDisplay";
import SortByOperation from "@/components/shopMotherOperations/SortByOperation";

import Link from "next/link";
import Footer from "@/components/Footer";
import Loading from "../loading";
import FilterSelection from "@/components/features/FilterSelection";

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
      case "/shop":
        return "Shop";
        default: notFound();
    }
  };

  

  return (
    // 5
    <div className="">
      <div className="lg:w-11/12 xl:w-10/12 mx-auto">
        <div className="pt-32 pb-5">
          <div className="flex justify-center items-center gap-2">
            <TiArrowLeftThick className="text-2xl" />
            {/* title */}
            <h1 className="text-7xl font-bold">{getCategoryTitle()}</h1>
          </div>
          {/* subtitle */}
          <div className="">{/* add korte hobe */}</div>
        </div>
        <div className="relative">
         
          <div className="">
            <Underline height="h-[2px]" width="w-full" css="mt-6 mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* left side */}
              <div className="hidden lg:block 6">
                <div className="">
                  {/* filterby by price */}
                  <FilterByPrice></FilterByPrice>
                  <Underline height="h-[1px]" width="w-full" css="mt-6 mb-6" />

                  {/* filter for color */}
                  <FilterByColor></FilterByColor>
                  <Underline height="h-[1px]" width="w-full" css="mt-6 mb-6" />

                  {/* filter for size */}
                  <FilterBySize></FilterBySize>
                </div>
              </div>
              {/* right side  start*/}
              <div className="col-span-3">
                {/* filter menu */}
                <div className="flex justify-between items-center ">
                  <div className="">
                    <Link
                      href={"/"}
                      className="cursor-pointer text-sm font-bold"
                    >
                      Home
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center">
                    {/* show for slice product */}
                    <FilterWithShow></FilterWithShow>
                    {/* set column numbers */}
                    <FilterForDisplay></FilterForDisplay>
                    {/* soring */}
                    <SortByOperation></SortByOperation>
                  </div>
                </div>


                <div className="">
                  <FilterSelection></FilterSelection>
                </div>
                <div className=""></div>
                <div className="mt-5">{children}</div>
              </div>
              {/* right side  end*/}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default layout;
