/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/app/loading";
import UseGetProductsWithFilter from "@/hooks/UseGetProductsWithFilter";
import { setFilterByPrice } from "../../../../redux/utils/filterSlice";
import ProductsCard from "@/components/ProductsCard/ProductsCard";

const page = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError, error } = UseGetProductsWithFilter();
  const { 2: colTwo, 3: colThree, 4: colFour } = useSelector(
    (state) => state.filter.displayTag.filterDisplaysControl
  );
  console.log(colTwo, colThree, colFour, "state");
  return (
    <div>
      <div>
        {/*products loading  */}
        {isLoading && <Loading />}
      </div>
      <div className={`grid grid-cols-1 ${colTwo ? ' md:grid-cols-2' :''} ${colThree ? ' md:grid-cols-3' :''} ${colFour  ? ' md:grid-cols-4' :''} gap-5`}>
        {products?.map((product, i) => (
          <ProductsCard key={i} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default page;
