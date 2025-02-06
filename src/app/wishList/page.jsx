"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWishListedProductsMutation } from "../../../redux/products/productsApi";
import ProductsCard from "@/components/ProductsCard/ProductsCard";
import { IoClose } from "react-icons/io5";
import { userDeleteWhishList } from "../../../redux/products/productSlice";
import Loading from "../loading";

const Wishlist = () => {
  const state = useSelector((state) => state.productsMaster.productWishList);
  const dispatch = useDispatch();

  const [wishListedProducts, { isLoading }] = useWishListedProductsMutation();
  const [wishProducts, setWishProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (state && state.length > 0) {
        try {
          const response = await wishListedProducts({ productsId: state });
          if (response?.data?.products) {
            setWishProducts(response.data.products);
          }
        } catch (error) {
          console.error("Error fetching wishlisted products:", error);
        }
      } else {
        setWishProducts([]);
      }
    };

    fetchData();
  }, [state, wishListedProducts]);

  const handleDeleteWishList = (_id) => {
    dispatch(userDeleteWhishList(_id));
  };

  return (
    <div className="mx-10">
      <div className="">
        {
          isLoading && <Loading></Loading>
        }
      </div>
      {wishProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {wishProducts.map((product, i) => (
            <div key={i} className="">
              <div className="">
                <IoClose
                  onClick={() => handleDeleteWishList(product._id)}
                  className="my-1 ms-auto text-2xl hover:cursor-pointer"
                />
              </div>
              <ProductsCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center font-bold">No Wishlisted Products Found!</div>
      )}
    </div>
  );
};

export default Wishlist;
