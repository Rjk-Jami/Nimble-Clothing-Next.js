import React, { useEffect, useState } from "react";
import { useGetOrderProductMutation } from "../../../../../../redux/api/order/orderApi";

const DashboardOrderCard = ({ order }) => {
      const [getOrderProduct, { isLoading }] = useGetOrderProductMutation();
      const [OrderProduct ,setOrderProduct] = useState([])
      const [OrderProductId ,setOrderProductId] = useState(order?.product?.map((product) => product._id) || [])

        console.log(OrderProductId, "OrderProductId")

        useEffect(() => {
            const handleFetchOrders = async () => {
              if (OrderProductId.length === 0) return; // Avoid unnecessary API calls for empty IDs
              try {
                await getOrderProduct({ OrderProductId });
              } catch (error) {
                console.error("Failed to fetch order products:", error);
              }
            };
        
            handleFetchOrders();
          }, [getOrderProduct, OrderProductId]);
  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white p-4 mb-4">

      <h1 className="text-lg font-bold">{order?.name}</h1>
      <p className="text-sm">Email: {order?.email}</p>
      <p className="text-sm">Phone: {order?.phone}</p>
      <p className="text-sm">
        Address: {order?.streetAddress}, {order?.district}
      </p>
      <p className="text-sm">Payment Method: {order?.paymentMethod}</p>
      <p className="text-sm">Total Price: ${order?.totalPrice}</p>
      <p className="text-sm">Shipping Cost: ${order?.shippingCost}</p>
      <p className="text-sm">Is Payed: {order?.isPayed ? "Yes" : "No"}</p>

      <h2 className="text-md font-bold mt-2">Products:</h2>
      <ul className="ml-4 list-disc">
        {order?.product?.map((prod, prodIndex) => (
          <li key={prodIndex} className="text-sm">
            Product ID: {prod?._id}, Size: {prod?.size}, Quantity:{" "}
            {prod?.quantity}
          </li>
        ))}
      </ul>
    </div>
  );''
};

export default DashboardOrderCard;
