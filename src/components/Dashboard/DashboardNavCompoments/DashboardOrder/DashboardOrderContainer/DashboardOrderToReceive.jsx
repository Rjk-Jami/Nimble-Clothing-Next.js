import React from 'react'
import { useSelector } from 'react-redux';
import DashboardOrderCard from './DashboardOrderCard';

const DashboardOrderToReceive = () => {
// Access ordered products from the Redux store
const orderedProducts = useSelector((state) => state.order.orderedProducts);
const receivedProducts = orderedProducts.filter((order)=> order.isOrderDelivered === true)
console.log(receivedProducts, "orderedProducts all");
return (
<div>
  {receivedProducts && receivedProducts.length > 0 ? (
    receivedProducts.map((order, index) => (
      <DashboardOrderCard key={index} order={order}></DashboardOrderCard>
    ))
  ) : (
    <p className="text-center text-gray-500">No received orders found.</p>
  )}
</div>
);
};

export default DashboardOrderToReceive
