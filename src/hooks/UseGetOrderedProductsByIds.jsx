"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useGetOrderProductMutation } from "../../redux/api/order/orderApi";

const UseGetOrderedProductsByIds = (OrderProductsIds) => {
  const [getOrderProduct, { isLoading }] = useGetOrderProductMutation();
  const [OrderProduct, setOrderProduct] = useState(null); // State for storing product

  const fetchProducts = useCallback(async () => {
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
  }, [getOrderProduct, OrderProductsIds]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { OrderProduct, isLoading};
};

export default UseGetOrderedProductsByIds;
