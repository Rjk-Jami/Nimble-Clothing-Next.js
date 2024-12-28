import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsMutation } from "../../redux/products/productsApi";
import { setFilterByPrice } from "../../redux/utils/filterSlice";

const UseGetProductsWithFilter = () => {
  const filters = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [getProducts, { isLoading, isError, error }] = useGetProductsMutation();
  const [products, setProducts] = useState([]);
console.log(filters?.isFilter, "jami")
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts();
        const allProducts = result?.data?.allProduct || [];

        const prices = allProducts.map((product) => parseFloat(product.current_price));
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        dispatch(setFilterByPrice({ min: minPrice, max: maxPrice }));
        setProducts(allProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [getProducts, dispatch]);

  const filteredProducts = useMemo(() => {
    if ( filters?.isFilter === false)  {
        return products;
       
    }
    else if (filters?.range.filter){
        return products.filter(
            (product) =>
              product.current_price >= filters?.range.min &&
              product.current_price <= filters?.range.filter
          );
    }
  }, [products, filters]);
 


  return { products: filteredProducts, isLoading, isError, error };
};

export default UseGetProductsWithFilter;
