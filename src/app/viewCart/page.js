/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import FreeShipping from "@/components/ForCart/FreeShipping";
import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  userAddToCart,
  userDecreaseQuantity,
  userIncreaseQuantity,
  userRemoveFromCart,
} from "../../../redux/products/productSlice";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Underline from "@/components/design/underline";
import Shipping from "@/components/ForCart/Shipping";
import Link from "next/link";

const page = () => {
  const {town,zipcode,district, shippingCost} = useSelector((state)=>state.shippingAddress)

  const subTotal = useSelector((state) => state.productsMaster.totalPrice);
  const productsCart = useSelector(
    (state) => state.productsMaster.productsCart
  );
  const dispatch = useDispatch();

  const handleRemoveProduct = (product_id, size) => {
    dispatch(userRemoveFromCart({ product_id, size }));
  };

  const incrementQuantity = (productId, productSize) => {
    dispatch(
      userIncreaseQuantity({ product_id: productId, size: productSize })
    );
  };

  const decrementQuantity = (productId, productSize) => {
    dispatch(
      userDecreaseQuantity({ product_id: productId, size: productSize })
    );
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
      <div className="lg:col-span-3">
        <FreeShipping subTotal={subTotal}></FreeShipping>
        <div className="overflow-x-auto mt-5 ">
          <table className="hidden md:table table w-full">
            <thead className="">
              <tr>
                <th className="text-center">Remove</th>
                <th className="text-center">Product</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {productsCart?.map((product, index) => (
                <tr className="border-b" key={index}>
                  <td className="text-center">
                    <IoClose
                      className="text-2xl cursor-pointer hover:text-red-500"
                      onClick={() =>
                        handleRemoveProduct(product._id, product.size)
                      }
                    />
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <Image
                        src={product?.image}
                        alt={product?.name || "nimble"}
                        width={70}
                        height={70}
                        className="rounded"
                      />
                      <div>
                        {product.name} - <strong>{product.size}</strong>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">{product?.price}</td>
                  <td className="">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() =>
                          decrementQuantity(product.product_id, product.size)
                        }
                        className="px-2 py-2 border-t-2 border-l-2 border-b-2 border-current"
                      >
                        -
                      </button>
                      <span className="px-2 py-2 border-2 border-current">
                        {product?.quantity}
                      </span>
                      <button
                        onClick={() =>
                          incrementQuantity(product.product_id, product.size)
                        }
                        className="px-2 py-2 border-t-2 border-r-2 border-b-2 border-current"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-center">
                    {product?.quantity * product?.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-sm flex gap-3 my-10">
          <input
            className="py-2.5 px-3    text-sm font-thin border border-black dark:border-white rounded-none"
            type="text"
            name="coupon"
            id="coupon"
          />
          <button className="py-2.5 px-5  bg-black dark:bg-white text-white dark:text-black font-bold uppercase">
            apply coupon
          </button>
        </div>
      </div>
      <div className="text-sm lg:col-span-2 ">
        <div className="border-2 p-4 border-gray-300">
          <h1 className="text-2xl font-bold uppercase">Cart totals</h1>
          <div className="flex justify-between">
            <h4 className=" font-bold">Subtotal</h4>
            <p className="flex items-center">
              {subTotal}
              <FaBangladeshiTakaSign />
            </p>
          </div>
          <Underline height="h-[1px]" width="w-full" css="mt-2 mb-2" />
          
          <div className="my-2">
          <Shipping></Shipping>
          </div>

          <Underline height="h-[1px]" width="w-full" css="mt-2 mb-2" />
          <div className="flex justify-between text-xl font-bold">
            <h4 className=" ">Total</h4>
            <p className="flex items-center ">
              {subTotal + shippingCost}
              <FaBangladeshiTakaSign />
            </p>
          </div>
          <Link href={'/checkout'}><button className="mt-6 w-full bg-orange-500 text-white py-2  shadow hover:bg-orange-600 transition">
            Proceed to Checkout
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default page;
