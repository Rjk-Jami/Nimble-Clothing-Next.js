"use client";
import React from "react";
import { handleCloseSidebar } from "./sidebarLoginRegister";
import { IoClose } from "react-icons/io5";
import Underline from "../design/underline";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { userRemoveFromCart } from "../../../redux/products/productSlice";
import Link from "next/link";
import { BsCartX } from "react-icons/bs";
import FreeShipping from "../ForCart/FreeShipping";

const SidebarCart = () => {
  const productsCart = useSelector(
    (state) => state.productsMaster.productsCart
  );
  const dispatch = useDispatch()
  const cartTotal = useSelector((state) => state.productsMaster.totalPrice);

  // console.log(productsCart, "productsCart");

  const handleHideAndClose = (drawerId2) => {
    handleCloseSidebar(drawerId2);
  };
  
  const handleRemoveProduct = (product_id, size) => {
    dispatch(userRemoveFromCart({ product_id, size }));
  };
  return (
    <div className="text-base font-semibold px-4   h-full overflow-y-auto">
      {/* Header */}
      <div className="">
      </div>
      <div className="flex justify-between items-center py-4 ">
        <span className="text-lg font-bold">Shopping Cart</span>
        <IoClose
          className="text-2xl cursor-pointer transition hover:text-gray-500"
          aria-label="Close sidebar menu"
          onClick={() => handleHideAndClose("cart-drawer")}
        />
      </div>

      {/* Divider */}
      <Underline height="h-[1px]" width="w-full" css="mt-2 mb-6" />

      {/* Cart Items */}
      <div className="text-sm flex flex-col gap-3   w-full">
        {productsCart && productsCart.length > 0 ? (
          productsCart.map((product, index) => (
            <div key={index} className="grid grid-cols-3 w-full gap-3 ">
              <div className="flex items-center gap-1">
                {/* Remove Button */}
                <div className="">
                <IoClose
                  className="text-xl transition cursor-pointer hover:text-red-500"
                  onClick={() =>handleRemoveProduct(product._id, product.size)}
                />
                </div>

                {/* Product Image */}
                <Image
                
                  className="  border"
                  alt={product.name}
                  width={70}
                  height={70}
                  src={product.image}
                />
              </div>

              {/* Product Details */}
              <div className="col-span-2 flex flex-col justify-around gap-1">
                <div className="font-medium text-balance ">
                 <span className=" "> {product.name}</span> - <span className="font-bold">{product.size}</span>
                </div>
                <div className="text-sm flex items-center gap-1">
                  {product.quantity} x
                  <span className="flex items-center text-orange-500 font-semibold">
                    <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center gap-5" >
            <div className="flex flex-col items-center">
            <BsCartX  className="text-slate-400 text-8xl"/>
            <div className="text-center  my-3">No products in the cart.</div>
            </div>
            <Link onClick={()=>handleCloseSidebar('cart-drawer')} href={'/shop'} className="rounded-none uppercase btn btn-wide btn-primary">Return To Shop</Link>

          </div>
        )}
      </div>
      {/* Divider */}
      {
        productsCart.length > 0  && <Underline height="h-[1px]" width="w-full" css="mt-6 mb-2" />
      }
      {/* Footer */}
      {productsCart && productsCart.length > 0 && (
        <div className="pt-4 flex flex-col gap-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Subtotal:</span>
            <span className="text-orange-500 flex items-center gap-1">
              <FaBangladeshiTakaSign />
              {cartTotal}
            </span>
          </div>
          <FreeShipping subTotal={cartTotal}></FreeShipping>
          <Link onClick={()=>handleCloseSidebar('cart-drawer')} href={'/viewCart'} className="w-full bg-black dark:bg-white dark:text-black text-white py-2  shadow dark:hover:bg-slate-200 hover:bg-zinc-900 transition text-center">
            View Cart
          </Link>
          <Link href={'/checkout'} className="w-full bg-orange-500 text-white py-2  shadow hover:bg-orange-600 transition text-center">
            Proceed to Checkout
          </Link >
        </div>
      )}
    </div>
  );
};

export default SidebarCart;
