import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { GrCompare } from "react-icons/gr";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";

import {
  userAddCompare,
  userAddWishList,
  userDeleteCompare,
  userDeleteWhishList,
} from "../../../redux/products/productSlice";

const ProductsCard = ({ product }) => {
  const [isCompare, setIsCompare] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.productsMaster);
  console.log(state);
  const {
    2: colTwo,
    3: colThree,
    4: colFour,
  } = useSelector((state) => state.filter.displayTag.filterDisplaysControl);

  const handleCartClick = (e) => {
    // Add your cart handling logic here
    console.log("Add to cart clicked!");
  };
  useEffect(() => {
    // Check if the product is already in the compare or wishlist when the component mounts
    const isProductInCompare = state.productCompare.includes(product._id);
    setIsCompare(isProductInCompare);

    const isProductInWishList = state.productWishList.includes(product._id);
    setIsFav(isProductInWishList);
  }, [state.productCompare, state.productWishList, product._id]);

  const handleCompare = (_id) => {
    if (isCompare) {
      dispatch(userDeleteCompare(_id));
    } else {
      dispatch(userAddCompare(_id));
    }
  };

  const handleWishList = (_id) => {
    if (isFav) {
      dispatch(userDeleteWhishList(_id));
    } else {
      dispatch(userAddWishList(_id));
    }
  };

  return (
    <div className="flex flex-col group border border-gray-200 dark:border-gray-700 pb-2 shadow-md cursor-pointer">
      <div className="relative overflow-hidden">
        <span
          className="absolute z-10 inset-x-0 bottom-0 transform translate-y-5 bg-black dark:bg-white group-hover:translate-y-0 transition-all duration-300 ease-out delay-100 opacity-0 group-hover:opacity-100 flex justify-center items-center"
          onClick={handleCartClick} // Add onClick event handler here
        >
          <FaCartPlus
            className={`text-white dark:text-black ${
              colTwo ? "text-3xl" : "text-2xl"
            } m-2`}
          ></FaCartPlus>
        </span>
        <div className="absolute z-10 top-0 right-0 transform translate-y-5 group transition-all bg-black dark:bg-white duration-300 ease-out delay-100 group-hover:translate-x-[-20px] opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center p-2">
          <div
            onClick={() => handleCompare(product?._id)}
            className="tooltip tooltip-left"
            data-tip="Compare"
          >
            {isCompare? 
            <GiCheckMark className="text-white dark:text-black text-2xl"></GiCheckMark> : <GrCompare className="text-white dark:text-black text-2xl"></GrCompare>}
          </div>
          <div
            onClick={() => handleWishList(product?._id)}
            className="tooltip tooltip-left"
            data-tip="Add to wishlist"
          >
            {isFav ? 
            <FaHeart className="text-white dark:text-black text-2xl"></FaHeart> : <FaRegHeart className="text-white dark:text-black text-2xl"></FaRegHeart>}
          </div>
        </div>
        <div className="overflow-hidden z-0">
          <Link href={`/product/${product?._id}`}>
            <Image
              className="cursor-default transform group-hover:scale-110 transition-transform duration-300 ease-out"
              src={product?.image}
              alt={product.name}
              width={430}
              height={430}
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <Link href={`/product/${product?._id}`}>
          <h1 className="text-sm font-bold">{product.name}</h1>
        </Link>
        <p className="text-sm font-semibold">{product.categories}</p>
        <div className="flex gap-1 items-center justify-center">
          <p className="text-sm font-semibold line-through text-slate-600">
            {product.original_price}
          </p>
          <p className="text-sm font-semibold text-orange-500">
            {product.current_price} <span></span>
          </p>
          <p>
            <FaBangladeshiTakaSign className="text-xs"></FaBangladeshiTakaSign>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
