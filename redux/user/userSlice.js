"use client";

import { rootApi } from "../api/rootApi";

export const userSlice = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          return res;
        } catch (error) {
          console.log(error);
        }
      },
    }),
   
  }),
});
export const { useGetUserMutation,  } =userSlice;
