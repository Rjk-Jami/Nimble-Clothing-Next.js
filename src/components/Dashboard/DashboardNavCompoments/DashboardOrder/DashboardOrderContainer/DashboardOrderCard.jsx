import React, { useEffect, useState } from "react";
import { useGetOrderProductMutation } from "../../../../../../redux/api/order/orderApi";
import Image from "next/image";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Underline from "@/components/design/underline";
import moment from "moment";
import Loading from "@/app/loading";
import Link from "next/link";
import UseGetOrderedProductsByIds from "@/hooks/UseGetOrderedProductsByIds";
import DashBoardOrderedItem from "./DashBoardOrderedItem";

const DashboardOrderCard = ({ order }) => {
  const [OrderProductsIds, setOrderProductsIds] = useState(
    order?.product?.map((product) => product._id) || []
  );
  // console.log(order, "orderedProducts all order");
  const { OrderProduct, isLoading, isError, error } =
    UseGetOrderedProductsByIds(OrderProductsIds);
  //   console.log(OrderProductsIds, "OrderProductsIds");

  return (
    <Link href={`/my-account/order/${order?._id}`}>
      <div className="w-full  bg-white dark:bg-black text-black dark:text-white px-4 py-2 mb-4  shadow-lg text-sm">
        <div className="  ">
          {isLoading && <Loading></Loading>}
          <div className="flex justify-between items-center">
            <div className="">
              <h1>
                Ordered At:{" "}
                <span className="">
                  {moment(order?.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                </span>
              </h1>
            </div>
            <div className="">
              {order?.isOrderDelivered ? (
                <div className="badge badge-primary">Delivered</div>
              ) : (
                <div className="badge badge-primary">To shipping</div>
              )}
            </div>
          </div>
          <Underline height="h-[1px]" width="w-full" css="mt-1 mb-2" />
          <DashBoardOrderedItem OrderProduct ={OrderProduct} order={order}></DashBoardOrderedItem>
        </div>
      </div>
    </Link>
  );
};

export default DashboardOrderCard;

{
  /* <h1 className="text-lg ">{order?.name}</h1>
      <p className="text-sm">Email: {order?.email}</p>
      <p className="text-sm">Phone: {order?.phone}</p>
      <p className="text-sm">
        Address: {order?.streetAddress}, {order?.district}
      </p>
      <p className="text-sm">Payment Method: {order?.paymentMethod}</p>
      <p className="text-sm">Total Price: ${order?.totalPrice}</p>
      <p className="text-sm">Shipping Cost: ${order?.shippingCost}</p>
      <p className="text-sm">Is Payed: {order?.isPayed ? "Yes" : "No"}</p>

      <h2 className="text-md  mt-2">Products:</h2>
      <ul className="ml-4 list-disc"> </ul>*/
}
