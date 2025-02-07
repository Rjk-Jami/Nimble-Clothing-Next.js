"use client"
import ProductsCard from "@/components/ProductsCard/ProductsCard";
import UseGetAllProducts from "@/hooks/UseGetAllProducts";
import React from "react";

const ProductsShowcase = () => {
    const { products, isLoading } = UseGetAllProducts();
  return (
    <div className="">
      <div className="text-center mx-20">
        <h3 className="text-xl ">The Evolution Begins</h3>
        <h1 className="text-3xl font-bold">Shop Our Nimble Collections</h1>
        <p className="text-base-content text-sm ">
          Elevate your wardrobe with our dynamic and versatile apparel, crafted
          for those who move with confidence and style.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mx-10 gap-10 mt-10">
      {products?.map((product, i) => (
          <div key={i} className="">
            <ProductsCard  product={product}></ProductsCard>
          </div>
        )).slice(0,4)}
      </div>
    </div>
  );
};

export default ProductsShowcase;
