import React, { useEffect } from "react";
import { useGetOrderedProductsDetailsMutation } from "../../../../../redux/api/order/orderApi";
import { useSelector } from "react-redux";
import ErrorAlert from "@/components/Alert/ErrorAlert";
import DashboardOrderContainer from "./DashboardOrderContainer/DashboardOrderContainer";
import Loading from "@/app/loading";

const DashboardOrder = () => {
  const [getOrderedProductsDetails, { isLoading }] = useGetOrderedProductsDetailsMutation();
  const user = useSelector((state) => state.auth.user);
  const orderedProducts = useSelector((state) => state.order.orderedProducts) || [];

  useEffect(() => {
    const handleFetchOrders = async () => {
      try {
        if (user?._id) {
          await getOrderedProductsDetails({ _id: user._id });
        }
      } catch (error) {
        console.error("Error fetching ordered products:", error);
      }
    };

    handleFetchOrders();
  }, [getOrderedProductsDetails, user]);

  

  return (
    <div>
      {(isLoading && !orderedProducts.length )&& <Loading></Loading>}
      <div className="mb-4">

        {orderedProducts.length === 0 ? (
          <ErrorAlert>No order has been made yet.</ErrorAlert>
        ) : (
          <DashboardOrderContainer  />
        )}
      </div>
    </div>
  );
};

export default DashboardOrder;
