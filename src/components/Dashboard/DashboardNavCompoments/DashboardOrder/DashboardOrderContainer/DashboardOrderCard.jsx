import React, { useEffect, useState } from "react";
import { useGetOrderProductMutation } from "../../../../../../redux/api/order/orderApi";

const DashboardOrderCard = ({ order }) => {
  const [getOrderProduct, { isLoading }] = useGetOrderProductMutation();
  const [OrderProduct, setOrderProduct] = useState([]);
  const [OrderProductsIds, setOrderProductsIds] = useState(
    order?.product?.map((product) => product._id) || []
  );
//   console.log(order, "orderedProducts all order");

  console.log(OrderProductsIds, "OrderProductsIds");

  useEffect(() => {
    const handleFetchOrders = async () => {
      if (OrderProductsIds.length === 0) return; 
      try {
       const result =  await getOrderProduct({ ids:OrderProductsIds });
       console.log(result?.data, 'result?.data')
       if(result?.data?.success === true){
        setOrderProduct(result?.data?.products)
       }
      } catch (error) {
        console.error("Failed to fetch order products:", error);
      }
    };

    handleFetchOrders();
  }, [getOrderProduct, OrderProductsIds]);

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
            Product ID: {prod?._id}, {OrderProduct?.map((OrderProduct, OrderProductIndex)=>(<div key={OrderProductIndex}>{OrderProduct.name}</div>))} , Size: {prod?.size}, Quantity:{" "}
            {prod?.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
 
};

export default DashboardOrderCard;
