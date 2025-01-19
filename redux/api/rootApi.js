import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLogOut } from "../auth/authSlice";
const baseQuery = fetchBaseQuery({
  baseUrl: "https://nimblenext-backend.vercel.app/api",
  credentials:"include",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});


export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    refreshToken: builder.mutation({
      query: () => ({
        url: "/users/refreshToken",
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log(res, "auth refreshToken");
          if(res?.data?.success === true){
            console.log(res?.data?.success, "refresh true")
          }
        } catch (error) {
          console.log(error);
          if(error?.error?.data.success === false){
            dispatch(userLogOut())
            console.log(error?.error?.data?.success , "refresh false")
          }
        }
      },
    }),
  }),
});

export const { useRefreshTokenMutation } = rootApi;
