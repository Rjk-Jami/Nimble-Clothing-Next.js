"use client";
import React from "react";
import { usePathname } from "next/navigation";
import category from "../../layout";
import Loading from "@/app/loading";
import UseGetProductsWithFilter from "@/hooks/UseGetProductsWithFilter";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { products, isLoading, isError, error } = UseGetProductsWithFilter();

  return (
    <div>
      <div>
        {/*products loading  */}
        {isLoading && <Loading />}
      </div>
      <div className="">
        {products?.map((product, i) => (
          <div key={i}>
            <h1>{product.name}</h1>
            <p>{product.current_price}</p>
            <p className="text-red-500">{product.colors}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
