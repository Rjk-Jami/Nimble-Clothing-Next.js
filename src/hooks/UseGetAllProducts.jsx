"use client"
import React, { useEffect, useState } from 'react'
import { useGetProductsMutation } from '../../redux/products/productsApi';

const UseGetAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [getProducts, { isLoading}] = useGetProductsMutation();
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
      return { products, isLoading };
}

export default UseGetAllProducts
