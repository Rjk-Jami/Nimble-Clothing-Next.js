"use client";
import { rootApi } from "../api/rootApi";
import { setFilterByPrice } from "../utils/filterSlice";

export const productsApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.mutation({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          // console.log(res?.data?.allProduct);
          // eslint-disable-next-line react-hooks/rules-of-hooks
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      },
    }),
    getProductsById: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
     
    }),

    compareProducts: builder.mutation({
      query: ({productsId})=>({
        url:"/products/compare/selectedProduct",
        method: "POST",
        body:{productsId}
      })
    }),
    wishListedProducts: builder.mutation({
      query: ({productsId})=>({
        url:"/products/wishList/selectedProduct",
        method: "POST",
        body:{productsId}
      })
    })

  }),
});

export const { useGetProductsMutation, useGetProductsByIdMutation , useCompareProductsMutation, useWishListedProductsMutation} =
  productsApi;
