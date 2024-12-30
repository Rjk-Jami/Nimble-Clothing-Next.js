"use client";

import Loading from "@/app/loading";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import UseGetProductById from "@/hooks/UseGetProductById";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
    // console.log(id)
    const {product, isLoading, isError, error} = UseGetProductById(id)
    // console.log(product)
  return (
    <div className="w-full lg:w-11/12 xl:w-10/12 mx-auto">
      <div>
      <ProductDetails product={product} isLoading={isLoading}></ProductDetails>
    </div>
    </div>
  )
}

export default page
