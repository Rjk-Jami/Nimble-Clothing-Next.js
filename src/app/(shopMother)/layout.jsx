/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { notFound, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { useGetProductsMutation } from "../../../redux/products/productsApi";
import Underline from "@/components/design/underline";
import FilterByPrice from "@/components/shopMotherOperations/FilterByPrice";
import FilterByColor from "@/components/shopMotherOperations/FilterByColor";

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
        console.log(products.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, [getProducts]);

  return (
    // 5
    <div className="">
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
            <div className="hidden lg:block p-4">
              {/* filterby by price */}
              <div className="">
                <FilterByPrice></FilterByPrice>
                <Underline height="h-[1px]" width="w-full" css="mt-6 mb-6" />
                <FilterByColor></FilterByColor>
              </div>
            </div>
            <div className="col-span-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              dolorum perferendis assumenda! Quo omnis veniam iste voluptatem
              provident repellendus incidunt, rem ea tempora aut, minima
              asperiores corrupti. Exercitationem repudiandae voluptatum tempora
              vero blanditiis, iure doloremque vel tempore maiores ducimus sint
              quae neque deserunt minima reiciendis omnis minus excepturi nisi
              ab quam molestias asperiores optio! Eligendi unde consequatur
              autem corrupti impedit optio, iusto voluptates quod, recusandae
              sed dolores labore blanditiis officia assumenda, magnam porro id.
              Numquam, dolores quos possimus molestias praesentium quasi
              recusandae adipisci rerum assumenda provident nesciunt corrupti
              eligendi totam tempore. Id, error labore deleniti ut sapiente
              similique libero voluptatum.
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
