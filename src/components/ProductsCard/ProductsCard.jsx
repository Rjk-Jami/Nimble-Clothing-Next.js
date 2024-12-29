import Image from "next/image";
import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

const ProductsCard = ({ product }) => {
  return (
    <div className="flex flex-col group">
      <div className=" relative">
      <span className="absolute inset-x-0 bottom-0 transition-all delay-75 w-full  bg-black dark:bg-white opacity-0 group-hover:opacity-100 flex justify-center items-center">

<FaCartPlus className="text-white dark:text-black text-3xl m-2"></FaCartPlus>
      </span>

        <Image
          src={product?.image}
          alt={product.name}
          width={430}
          height={430}
        />
        
      </div>
      <div className="flex flex-col gap-1  justify-center items-center">
        <h1 className="text-sm font-bold">{product.name}</h1>
        <p className="text-sm font-semibold ">{product.categories}</p>
        <div className=" flex gap-1 items-center justify-center">
          <p className="text-sm font-semibold line-through text-slate-600">
            {product.original_price}
          </p>
          <p className="text-sm font-semibold text-orange-500">
            {product.current_price} <span></span>
          </p>
          <p><FaBangladeshiTakaSign className="text-xs 
          "></FaBangladeshiTakaSign></p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
