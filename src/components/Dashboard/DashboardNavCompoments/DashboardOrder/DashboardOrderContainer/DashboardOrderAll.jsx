import React from "react";
import { useSelector } from "react-redux";
import DashboardOrderCard from "./DashboardOrderCard";

const DashboardOrderAll = () => {
  // Access ordered products from the Redux store
  const orderedProducts = useSelector((state) => state.order.orderedProducts);

  console.log(orderedProducts, "orderedProducts all");

  return (
    <div>
      {orderedProducts && orderedProducts.length > 0 ? (
        orderedProducts.map((order, index) => (
          <DashboardOrderCard key={index} order={order}></DashboardOrderCard>
        ))
      ) : (
        <p className="text-center text-gray-500">No orders found.</p>
      )}
    </div>
  );
};

export default DashboardOrderAll
