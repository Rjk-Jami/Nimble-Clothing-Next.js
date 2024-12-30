"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useGetProductsByIdMutation } from "../../redux/products/productsApi";

const useGetProductById = (id) => {
  const [getProductsById, { isLoading, isError, error }] =
    useGetProductsByIdMutation();
  const [product, setProduct] = useState(null); // State for storing product

  const fetchProducts = useCallback(async () => {
    if (!id) return; // Prevent unnecessary API calls when id is undefined/null
    try {
      const result = await getProductsById(id);
      const fetchedProduct = result?.data?.product || null;
      setProduct(fetchedProduct);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  }, [getProductsById, id]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { product, isLoading, isError, error };
};

export default useGetProductById;
