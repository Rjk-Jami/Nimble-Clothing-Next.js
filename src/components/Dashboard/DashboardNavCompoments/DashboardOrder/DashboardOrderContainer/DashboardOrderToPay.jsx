import React from "react";
import { useSelector } from "react-redux";
import DashboardOrderCard from "./DashboardOrderCard";

const DashboardOrderToPay = () => {
  // Access ordered products from the Redux store
  const orderedProducts = useSelector((state) => state.order.orderedProducts);
    const toPayProducts = orderedProducts.filter((order)=> order.isPayed === false)
  console.log(toPayProducts, "orderedProducts all");
  return (
    <div>
      {toPayProducts && toPayProducts.length > 0 ? (
        toPayProducts.map((order, index) => (
          <DashboardOrderCard key={index} order={order}></DashboardOrderCard>
        ))
      ) : (
        <p className="text-center text-gray-500">No payable orders found.</p>
      )}
    </div>
  );
};

export default DashboardOrderToPay;
