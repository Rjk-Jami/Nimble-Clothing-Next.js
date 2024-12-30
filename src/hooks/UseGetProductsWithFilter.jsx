"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsMutation } from "../../redux/products/productsApi";
import { setFilterByPrice } from "../../redux/utils/filterSlice";
import { usePathname } from "next/navigation";

const UseGetProductsWithFilter = () => {
  const pathname = usePathname();
  // set pathname wise products
  const getCategory = () => {
    const categories = {
      "/products-category/sweatshirts": "Sweatshirt",
      "/products-category/t-shirts": "T-Shirts",
      "/products-category/hoodies": "Hoodies",
      "/products-category/pants": "Pants",
      "/products-category/boxers": "Boxers",
      "/shop": "allProducts",
    };
    return categories[pathname] || "allProducts";
  };
  const category = getCategory();
  //   console.log(category, "category")

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

          // Update price range in Redux
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
    if (
      filters?.isFilter === false &&
      category === "allProducts" &&
      filters?.sortTag?.filterSortControl?.defaultSorting === true
    ) {
      return products; // Return all products if no filters are active
    }

    let filtered = [...products]; // Clone products array for filtering

    if (category !== "allProducts") {
      filtered = filtered.filter((product) => product.categories === category);
    }
    // select active colors
    const activeColors = Object.keys(filters.colorTag.filterColorControl)
      .filter((color) => filters.colorTag.filterColorControl[color] === true)
      .map((color) => color.toLowerCase().replace(/\s+/g, ""));
    console.log(activeColors, "activeColors");

    // console.log(activeSizes, "activeSizes");

    // Filter by price range
    if (filters?.range?.filter) {
      console.log(filters?.range?.filter, "filters.range.filter");
      filtered = filtered.filter(
        (product) =>
          parseFloat(product.current_price) >= filters.range.min &&
          parseFloat(product.current_price) <= filters.range.filter
      );
    }

    // Filter by active colors
    if (activeColors.length > 0) {
      filtered = filtered.filter((product) =>
        product.colors.some((color) =>
          activeColors.includes(color.toLowerCase().replace(/\s+/g, ""))
        )
      );
    } // select active sort
    const activeSizes = Object.keys(filters.sizeTag.filterSizeControl).filter(
      (size) => filters.sizeTag.filterSizeControl[size] === true
    );

    // Filter by active sizes
    if (activeSizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => activeSizes.includes(size))
      );
    }
    // select active sort
    const activeSort = Object.keys(filters.sortTag.filterSortControl).filter(
      (sort) => filters.sortTag.filterSortControl[sort] === true
    );
    // console.log(activeSort, "activeSort");
    // sort by active sort
    if (activeSort.length > 0) {
      if (activeSort[0] === "latest") {
        filtered = filtered.sort((a, b) => {
          return new Date(b?.created_at) - new Date(a?.created_at);
        });
      } else if (activeSort[0] === "PriceLowToHigh") {
        filtered = filtered.sort((a, b) => {
          return parseFloat(a.current_price) - parseFloat(b.current_price);
        });
      } else if (activeSort[0] === "PriceHighToLow") {
        filtered = filtered.sort((a, b) => {
          return parseFloat(b.current_price) - parseFloat(a.current_price);
        });
      }
    }

    return filtered;
  }, [products, filters, category]);

  //   console.log(filteredProducts, "filteredProducts");

  return { products: filteredProducts, isLoading, isError, error };
};

export default UseGetProductsWithFilter;
