"use client"
import { rootApi } from "../api/rootApi";
import { setFilterByPrice } from "../utils/filterSlice";

export const productsApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.mutation({
      query: () => ({
        url: "/products",
        method: "GET"
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          console.log(res?.data?.allProduct
          )
          // eslint-disable-next-line react-hooks/rules-of-hooks

         
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      },
    }),
  }),
});

export const { useGetProductsMutation } = productsApi;

