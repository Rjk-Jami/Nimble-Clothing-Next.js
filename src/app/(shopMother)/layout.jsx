/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { notFound, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { useGetProductsMutation } from "../../../redux/products/productsApi";
import Underline from "@/components/design/underline";
import FilterByPrice from "@/components/shopMotherOperations/FilterByPrice";
import FilterByColor from "@/components/shopMotherOperations/FilterByColor";
import FilterBySize from "@/components/shopMotherOperations/FilterBySize";
import FilterWithShow from "@/components/shopMotherOperations/FilterWithShow";
import FilterForDisplay from "@/components/shopMotherOperations/FilterForDisplay";
import SortByOperation from "@/components/shopMotherOperations/SortByOperation";

import Link from "next/link";
import Footer from "@/components/Footer";

const layout = ({ children }) => {
  const pathname = usePathname();
  // console.log(pathname);
  const [getProducts, { isLoading }] = useGetProductsMutation();
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
        return "Shop8";
    }
  };

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const products = await getProducts();
        console.log(products?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, [getProducts]);

  return (
    // 5
    <div className="">
      <div className="lg:w-11/12 xl:w-10/12 mx-auto">
      <div className="pt-32 pb-5">
        <div className="flex justify-center items-center gap-2">
          <TiArrowLeftThick className="text-2xl" />
          <h1 className="text-7xl font-bold">{getCategoryTitle()}</h1>
        </div>
        <div className="">{/* add korte hobe */}</div>
      </div>
      <div className="relative">
        {isLoading ? (
          <div className="h-full ">
            <span className="loading loading-spinner"></span>
          </div>
        ) : (
          <div className=""></div>
        )}
        <div className="">
          <Underline height="h-[2px]" width="w-full" css="mt-6 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* left side */}
            <div className="hidden lg:block 6">
              {/* filterby by price */}
              <div className="">
                <FilterByPrice></FilterByPrice>
                <Underline height="h-[1px]" width="w-full" css="mt-6 mb-6" />
                <FilterByColor></FilterByColor>
                <Underline height="h-[1px]" width="w-full" css="mt-6 mb-6" />
                <FilterBySize></FilterBySize>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex justify-between items-center ">
                <div className="">
                  <Link href={"/"} className="cursor-pointer text-sm font-bold">
                    Home
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <FilterWithShow></FilterWithShow>
                  <FilterForDisplay></FilterForDisplay>

                  <SortByOperation></SortByOperation>
                </div>
              </div>
             <div className="">
             {children}
             </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
    <Footer></Footer>
    </div>
  );
};

export default layout;
