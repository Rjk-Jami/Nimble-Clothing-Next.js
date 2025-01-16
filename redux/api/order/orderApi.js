import { rootApi } from "../rootApi";
import { getOrderProducts } from "./orderSlice";

export const orderApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrderedProductsDetails: builder.mutation({
      query: ({ _id }) => ({
        url: "/order/orderedProductsDetails",
        method: "POST",
        body: { _id },
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          // console.log(res, "orderedProducts")
          console.log(res?.data?.totalOrder, "orderedProducts");
          console.log(res?.data?.totalPayableProducts, "totalPayableProducts");
          if (res?.data?.totalOrder) {
            dispatch(
              getOrderProducts({
                products: res?.data?.totalOrder,
                PayableProducts: res?.data?.totalPayableProducts,
              })
            );
          }

          if (res?.data?.orderedProduct === false) {
            // console.log(res?.data?.message)
          }
        } catch (error) {
          console.log("Error fetching ordered products:", error);
        }
      },
    }),
    getOrderProduct: builder.mutation({
      query: ({ ids }) => ({
        url: "/order/orderedProducts",
        method: "POST",
        body: { ids },
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetOrderedProductsDetailsMutation , useGetOrderProductMutation} = orderApi;
