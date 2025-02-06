"use client";
import React, { useEffect, useState } from "react";
import { useGetProductsMutation } from "../../../../redux/products/productsApi";

const CategoryShowcase = () => {
  const [getProducts, { isLoading, isError, error }] = useGetProductsMutation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts();
        const allProducts = result?.data?.allProduct || [];

        if (allProducts.length > 0) {
          setProducts(allProducts); 
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, [getProducts]);
  console.log(products);
  
  return <div></div>;
};

export default CategoryShowcase;
