import React, { useEffect, useState } from "react";
import { useGetOrderProductMutation } from "../../../../../../redux/api/order/orderApi";
import Image from "next/image";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Underline from "@/components/design/underline";
import moment from "moment";
import Loading from "@/app/loading";
import Link from "next/link";

const DashboardOrderCard = ({ order }) => {
  const [getOrderProduct, { isLoading }] = useGetOrderProductMutation();
  const [OrderProduct, setOrderProduct] = useState([]);
  const [OrderProductsIds, setOrderProductsIds] = useState(
    order?.product?.map((product) => product._id) || []
  );
  console.log(order, "orderedProducts all order");

  //   console.log(OrderProductsIds, "OrderProductsIds");

  useEffect(() => {
    const handleFetchOrders = async () => {
      if (OrderProductsIds.length === 0) return;
      try {
        const result = await getOrderProduct({ ids: OrderProductsIds });
        // console.log(result?.data, "result?.data");
        if (result?.data?.success === true) {
          setOrderProduct(result?.data?.products);
        }
      } catch (error) {
        console.error("Failed to fetch order products:", error);
      }
    };

    handleFetchOrders();
  }, [getOrderProduct, OrderProductsIds]);

  return (
    <Link href={`/my-account/order/${order?._id}`}>
      <div className="w-full  bg-white dark:bg-black text-black dark:text-white px-4 py-2 mb-4 rounded-lg shadow-lg text-sm">
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
          <Underline height="h-[1px]" width="w-full" css="mt-1 mb-1" />
          {OrderProduct?.map((OrderProduct, OrderProductIndex) => {
            const prod = order?.product?.find(
              (prod) => prod._id === OrderProduct._id
            );

            return (
              <div
                key={OrderProductIndex}
                className="text-sm grid grid-cols-3 items-center mb-4"
              >
                <div className="col-span-2 flex items-center gap-2">
                  <Image
                    className="border-2"
                    height={50}
                    width={50}
                    alt={OrderProduct.name}
                    src={OrderProduct.image}
                  ></Image>
                  <div className=" flex flex-col justify-between">
                    <div className="">{OrderProduct.name}</div>
                    <div className="">
                      Size: <span className="">{prod?.size}</span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-around">
                    <div className=" inline-flex items-center gap-1">
                      <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
                      <span className="">{prod?.price}</span>
                    </div>
                    <div className="">
                      Qty: <span className="">{prod?.quantity}</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
