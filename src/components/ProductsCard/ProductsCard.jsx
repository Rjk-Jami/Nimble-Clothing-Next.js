import Image from "next/image";
import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { GrCompare } from "react-icons/gr";
import Link from "next/link";

const ProductsCard = ({ product }) => {
  const {
    2: colTwo,
    3: colThree,
    4: colFour,
  } = useSelector((state) => state.filter.displayTag.filterDisplaysControl);
  return (
    <Link href={`/product/${product?._id}`} >
    <div  className="flex flex-col group border border-gray-200 dark:border-gray-700 pb-2  shadow-md cursor-pointer ">
      <div className=" relative overflow-hidden">
        <span className="absolute inset-x-0 bottom-0 transform translate-y-5 bg-black dark:bg-white group-hover:translate-y-0 transition-all duration-300 ease-out delay-100 opacity-0 group-hover:opacity-100 flex justify-center items-center ">
          <FaCartPlus
            className={`text-white dark:text-black ${
              colTwo ? "text-3xl" : "text-2xl"
            } m-2`}
          ></FaCartPlus>
        </span>
        <div className="absolute top-0 right-0 transform translate-y-5 group transition-all bg-black dark:bg-white duration-300 ease-out delay-100 group-hover:translate-x-[-20px] opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center p-2">
          <div className="tooltip  tooltip-left " data-tip="Compare">
            <GrCompare className="text-white dark:text-black text-2xl"></GrCompare>
          </div>
          <div className="tooltip  tooltip-left " data-tip="Add to wishlist">
            <FaRegHeart className="text-white dark:text-black text-2xl "></FaRegHeart>
          </div>
        </div>
        <Image
          className="cursor-default"
          src={product?.image}
          alt={product.name}
          width={430}
          height={430}
        />
      </div>
      <div className="z-50 flex flex-col gap-1  justify-center items-center">
        <h1 className="text-sm font-bold">{product.name}</h1>
        <p className="text-sm font-semibold ">{product.categories}</p>
        <div className=" flex gap-1 items-center justify-center">
          <p className="text-sm font-semibold line-through text-slate-600">
            {product.original_price}
          </p>
          <p className="text-sm font-semibold text-orange-500">
            {product.current_price} <span></span>
          </p>
          <p>
            <FaBangladeshiTakaSign
              className="text-xs 
          "
            ></FaBangladeshiTakaSign>
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductsCard;
