"use client";
import React from "react";
import Underline from "../design/underline";
import { useSelector } from "react-redux";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const YourOrder = () => {
  const { productsCart, totalPrice } = useSelector(
    (state) => state.productsMaster
  );
  const { shippingCost } = useSelector((state) => state.shippingAddress);

  // console.log(productsCart, totalPrice);
  return (
    <div className="bg-gray-100 dark:bg-neutral-900  p-4">
      <h1 className="uppercase text-2xl font-bold text-center my-2">
        Your order
      </h1>

      <div className="px-3 uppercase text-lg font-bold flex justify-between">
        <h1>Product</h1>
        <h1>Subtotal</h1>
      </div>
      <Underline height="h-[1px]" width="w-full" css="mt-2 mb-2" />
      <div className="px-3">
        {productsCart?.map((product, index) => (
          <div className="flex items-center justify-between gap-2" key={index}>
            <div className="text-sm ">
              <span>{product.name}</span>
              {" - "}
              <span className="text-">{product.size}</span>
              {" = "}
              <span className="font-bold">{product.quantity}</span>
            </div>
            <div className="text-sm flex items-center">
              <span>{product.price * product.quantity}</span>
              <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
            </div>
          </div>
        ))}
      </div>
      <Underline height="h-[1px]" width="w-full" css="mt-2 mb-2" />
      <div className="px-3  text-sm font-semibold flex justify-between">
        <h1>Subtotal</h1>
        <div className=" flex items-center">
          <span>{totalPrice}</span>
          <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
        </div>
      </div>
      <Underline height="h-[1px]" width="w-full" css="mt-2 mb-2" />
      <div className="px-3  text-sm  flex justify-between">
        <h1 className="font-semibold">Shipping</h1>
        <h1 className="flex items-center justify-end">
          Flat Rate:<span className="font-semibold">{shippingCost}</span>
          <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
        </h1>
      </div>
      <Underline height="h-[1px]" width="w-full" css="mt-2 mb-2" />
      <div className="px-4  text-lg font-bold flex justify-between">
        <h1>Total</h1>
        <div className=" flex items-center">
          <span>{shippingCost + totalPrice}</span>
          <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
