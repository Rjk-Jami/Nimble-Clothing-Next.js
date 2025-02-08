"use client";
import Loading from "@/app/loading";
import DashBoardOrderedItem from "@/components/Dashboard/DashboardNavCompoments/DashboardOrder/DashboardOrderContainer/DashBoardOrderedItem";
import Underline from "@/components/design/underline";
import UseGetOrderById from "@/hooks/UseGetOrderById";
import UseGetOrderedProductsByIds from "@/hooks/UseGetOrderedProductsByIds";
import moment from "moment";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { TiArrowLeft } from "react-icons/ti";

const OrderDetails = () => {
  const { id } = useParams(); // Extract order ID from the URL
  const { PurchasedProduct, isLoading: PurchasedProductLoading } =
    UseGetOrderById(id);
  const [OrderProductsForIds, setOrderProductsForId] = useState([]);
  const { OrderProduct, isLoading: OrderProductLoading } =
    UseGetOrderedProductsByIds(OrderProductsForIds);

  useEffect(() => {
    if (PurchasedProduct && PurchasedProduct.product) {
      const productIds = PurchasedProduct.product.map((product) => product._id);
      setOrderProductsForId(productIds);
    }
  }, [PurchasedProduct]);

  if (PurchasedProductLoading || OrderProductLoading) {
    return <Loading></Loading>;
  }
  // console.log(PurchasedProduct, "PurchasedProduct");
  // console.log(OrderProduct, "OrderProductsIds");
  return (
    <div>
      <h1 className="inline-flex items-center  font-medium mb-2">
        <TiArrowLeft 
          className="text-2xl"
          onClick={() => window.history.back()}
        />
        Order Details
      </h1>
      <div className=" flex flex-col gap-4">
        <div className=" px-4 pt-2 pb-2 dark:bg-black bg-white dark:text-white">
          <DashBoardOrderedItem
            OrderProduct={OrderProduct}
            order={PurchasedProduct}
          ></DashBoardOrderedItem>
        </div>
        <div className=" px-4 pt-2 pb-2 dark:bg-black bg-white dark:text-white">
          <h1>Order {PurchasedProduct?._id}</h1>
          <h1>
            Placed on{" "}
            <span className="">
              {moment(PurchasedProduct?.createdAt).format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            </span>
          </h1>
          <h1>Payment method [ {PurchasedProduct?.paymentMethod} ]</h1>
          <h1>
            Payment status{" "}
            <span className="">
              {PurchasedProduct?.isPayed ? (
                <div className="badge badge-primary text-white rounded-none">
                  Payed
                </div>
              ) : (
                <div className="rounded-none badge badge-error text-white">
                  Due
                </div>
              )}
            </span>
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="px-4 pt-2 pb-2 dark:bg-black bg-white dark:text-white">
            <div className="mb-2">
              <h1>{PurchasedProduct?.name}</h1>
              <h1>{PurchasedProduct?.phone}</h1>
            </div>
            <h1 className="flex gap-4">
              <div className="rounded-none badge btn-warning bg-amber-600 text-white">
                Home
              </div>
              <div className=" ">
                <h1> {PurchasedProduct?.streetAddress}</h1>
                <h1>
                  {" "}
                  {PurchasedProduct?.district}
                  {PurchasedProduct?.zip ? (
                    <span>, {PurchasedProduct?.zip}</span>
                  ) : (
                    ""
                  )}
                </h1>
              </div>
            </h1>
          </div>
          <div className="px-4 pt-2 pb-2 dark:bg-black bg-white dark:text-white">
            <h1>Total Summary</h1>
            <div className=" flex justify-between">
              <div className="">
                Subtotal({PurchasedProduct?.product?.length} Item)
              </div>
              <div className="inline-flex items-center">
                <FaBangladeshiTakaSign />
                {PurchasedProduct?.totalPrice}
              </div>
            </div>
            <div className=" flex justify-between">
              <div className="">Shipping Fee</div>
              <div className="inline-flex items-center">
                <FaBangladeshiTakaSign />
                {PurchasedProduct?.shippingCost}
              </div>
            </div>
            <Underline height="h-[1px]" width="w-full" css="mt-1 mb-1" />
            <div className=" flex justify-between">
              <div className="">Total</div>
              <div className="inline-flex items-center">
                <FaBangladeshiTakaSign />
                {PurchasedProduct?.shippingCost + PurchasedProduct?.totalPrice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
