"use client";
import Loading from "@/app/loading";
import React, { useState } from "react";
import { FaBangladeshiTakaSign, FaRegHeart } from "react-icons/fa6";
import { GrCompare } from "react-icons/gr";
import Underline from "../design/underline";
import SocialMediaShare from "../SocialMediaShare/SocialMediaShare/SocialMediaShare";
import ProductImageZoom from "../ProductImageZoom/ProductImageZoom";
import { TiArrowLeftThick } from "react-icons/ti";

const ProductDetails = ({ product, isLoading }) => {
  const [userSize, setUserSize] = useState(null);
  const [errorSize, setErrorForSize] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return <Loading />;
  }

  if (!product) {
    return <div className="text-center font-bold">Wait for a moment...</div>;
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSize = (size) => {
    setUserSize(size);
    setErrorForSize(false); 
  };

  const handleAddToCart = () => {
    console.log(quantity, "quantity");
    console.log(userSize, "userSize");

    if (userSize === null) {
      setErrorForSize(true);
    } else {
      setErrorForSize(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-0 md:mx-10 lg:mx-0">
      {/* Image */}
      <div className="mx-auto">
        {product?.image ? (
          <div>
            <ProductImageZoom product={product}></ProductImageZoom>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col gap-6 mx-10 md:mx-0">
        {/* title */}
        <div className="flex items-center gap-2">
          <TiArrowLeftThick
            className="text-2xl cursor-pointer"
            onClick={() => window.history.back()}
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {product.name}
          </h1>
        </div>

        {/* price */}
        <div className="text-xl md:text-2xl font-bold flex gap-1 items-center">
          <p className="line-through text-slate-600 flex items-center">
            {product.original_price}
            <FaBangladeshiTakaSign className="text-base md:text-xl" />
          </p>
          <p className="flex items-center text-orange-500">
            {product.current_price}
            <FaBangladeshiTakaSign className="text-base md:text-xl" />
          </p>
        </div>

        {/* description */}
        <div className="text-sm md:text-base font-medium">
          <p>{product.description}</p>
        </div>

        {/* selection size */}
        <div className="text-sm flex gap-2 items-center">
          <p className="font-semibold">Size:</p>
          <div className="flex gap-2">
            {product.sizes.map((size, i) => (
              <span
                onClick={() => handleSize(size)}
                className={`text-sm cursor-pointer hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black border border-1 rounded-full px-2 ${size === userSize ? "bg-black text-white dark:bg-white dark:text-black" : ""} ${errorSize ? "border-red-500" : "border-black dark:border-white"}`}
                key={i}
              >
                {size}
              </span>
            ))}
          </div>
          {errorSize && <p className="text-red-500 text-xs mt-1">Please select a size!</p>}
        </div>

        {/* select quantity */}
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <button
              onClick={decrementQuantity}
              className="px-2 py-2 border-t-2 border-l-2 border-b-2 border-current"
            >
              -
            </button>
            <span className="px-2 py-2 border-2 border-current">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="px-2 py-2 border-t-2 border-r-2 border-b-2 border-current"
            >
              +
            </button>
          </div>

          {/* add to cart section */}
          <div>
            <button
              onClick={handleAddToCart}
              className="uppercase text-sm font-bold bg-black dark:bg-white text-white dark:text-black px-3 py-3"
            >
              Add to cart
            </button>
          </div>
        </div>

        {/* feature section */}
        <div className="flex gap-3 text-sm font-semibold">
          <div className="flex items-center gap-2 cursor-pointer">
            <GrCompare />
            <span>Compare</span>
          </div>
          <div className="cursor-pointer flex items-center gap-2">
            <FaRegHeart />
            <span>Add to wishlist</span>
          </div>
        </div>

        <div>
          <Underline height={"h-[1px]"} width={"w-full"} />
        </div>

        <div className="flex flex-col gap-1 lg:gap-2 xl:gap-3">
          {/* category */}
          <div className="text-sm font-semibold">
            <p>
              Category: <span className="font-medium">{product.categories}</span>
            </p>
          </div>

          {/* share to social media section */}
          <div>
            <SocialMediaShare id={product._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
