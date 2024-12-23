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
          const prices = res?.data.map((product) =>
            parseFloat(product.current_price)
          );
          const minPrice = Math.min(...prices);
          const maxPrice = Math.max(...prices);
        //   console.log(prices, minPrice,maxPrice )
          dispatch(setFilterByPrice({min :minPrice, max:maxPrice}))

          
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const { useGetProductsMutation } = productsApi;
