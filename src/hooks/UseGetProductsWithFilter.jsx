import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsMutation } from "../../redux/products/productsApi";
import { setFilterByPrice } from "../../redux/utils/filterSlice";

const UseGetProductsWithFilter = () => {
  const filters = useSelector((state) => state.filter); // Accessing filters from Redux store
  const dispatch = useDispatch();
  const [getProducts, { isLoading, isError, error }] = useGetProductsMutation(); // Fetching products
  const [products, setProducts] = useState([]); // State for storing products

  // Fetch products and initialize price filter
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts();
        const allProducts = result?.data?.allProduct || [];

        if (allProducts.length > 0) {
          const prices = allProducts.map((product) =>
            parseFloat(product.current_price)
          );
          const minPrice = Math.min(...prices);
          const maxPrice = Math.max(...prices);

          // Set price range in Redux store
          dispatch(setFilterByPrice({ min: minPrice, max: maxPrice }));
        }

        setProducts(allProducts); // Update local state with products
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [getProducts, dispatch]);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    if (!filters?.isFilter) {
      return products; // Return all products if no filters are active
    }

    let filtered = [...products]; // Clone products array for filtering


    // select active colors
    const activeColors = Object.keys(
      filters.colorTag.filterColorControl
    ).filter((color) => filters.colorTag.filterColorControl[color] === true).map((color) => color.toLowerCase().replace(/\s+/g, ''));
    console.log(activeColors, "activeColors");



    // select active sizes
    const activeSizes = Object.keys(
      filters.sizeTag.filterSizeControl
    ).filter((size) => filters.sizeTag.filterSizeControl[size] === true);
    console.log(activeSizes, "activeSizes");



    // Filter by price range
    if (filters?.range?.filter) {
      filtered = filtered.filter(
        (product) =>
          parseFloat(product.current_price) >= filters.range.min &&
          parseFloat(product.current_price) <= filters.range.filter
      );
    }

    if (activeColors.length > 0) {
      filtered = filtered.filter((product) =>
        product.colors.some(color => activeColors.includes(color.toLowerCase().replace(/\s+/g, '')))
      );
    }

    // Filter by active colors

    return filtered;
  }, [products, filters]);
  console.log(filteredProducts, "filteredProducts");

  return { products: filteredProducts, isLoading, isError, error };
};

export default UseGetProductsWithFilter;
