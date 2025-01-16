import React, { useEffect } from "react";
import { useGetOrderedProductsMutation } from "../../../../../redux/api/order/orderApi";
import { useSelector } from "react-redux";
import ErrorAlert from "@/components/Alert/ErrorAlert";
import Link from "next/link";
import DashboardOrderContainer from "./DashboardOrderContainer/DashboardOrderContainer";

const DashboardOrder = () => {
  const [getOrderedProducts, { isLoading }] = useGetOrderedProductsMutation();
  const user = useSelector((state) => state.auth.user);
  const orderedProducts = useSelector((state) => state.order.orderedProducts);
  // console.log(user, "DashboardOrderUser");
  useEffect(() => {
    const handleFetchOrders = async () => {
      try {
        await getOrderedProducts({ _id: user._id });
      } catch (error) {}
    };
    handleFetchOrders();
  }, [getOrderedProducts, user]);
  console.log(orderedProducts, "orderedProducts");
  return (
    <div>
      <div className="">
        {orderedProducts.length === 0 && (
          <div className="">
            <ErrorAlert>No order has been made yet.</ErrorAlert>
          </div>
        )}
      </div>
      <div className="">
        <DashboardOrderContainer orderedProducts={orderedProducts} isLoading={isLoading}></DashboardOrderContainer>
      </div>
    </div>
  );
};

export default DashboardOrder;
