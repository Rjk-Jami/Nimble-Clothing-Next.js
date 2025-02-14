import React from 'react'
import { useSelector } from 'react-redux';
import DashboardOrderCard from './DashboardOrderCard';

const DashboardOrderToShip = () => {
   // Access ordered products from the Redux store
   const orderedProducts = useSelector((state) => state.order.orderedProducts);
   const toShipProducts = orderedProducts.filter((order)=> order.isOrderAccept === true)
 console.log(toShipProducts, "orderedProducts all");
 return (
   <div>
     {toShipProducts && toShipProducts.length > 0 ? (
       toShipProducts.map((order, index) => (
         <DashboardOrderCard key={index} order={order}></DashboardOrderCard>
       ))
     ) : (
       <p className="text-center text-gray-500">No accepted orders found.</p>
     )}
   </div>
 );
};

export default DashboardOrderToShip
