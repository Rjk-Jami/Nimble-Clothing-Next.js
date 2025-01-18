"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useGetSingleOrderProductMutation } from "../../redux/api/order/orderApi";

const UseGetOrderById = (id) => {
  const [getSingleOrderProduct, { isLoading, isError, error }] =
    useGetSingleOrderProductMutation();
  const [PurchasedProduct, setPurchasedProduct] = useState(null); // State for storing product

  const fetchProducts = useCallback(async () => {
    if (!id) return; // Prevent unnecessary API calls when id is undefined/null
    try {
      const result = await getSingleOrderProduct(id);
    //   console.log(result?.data)
      const fetchedProduct = result?.data?.order || null;
      setPurchasedProduct(fetchedProduct);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  }, [getSingleOrderProduct, id]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { PurchasedProduct, isLoading, isError, error };
};

export default UseGetOrderById;
