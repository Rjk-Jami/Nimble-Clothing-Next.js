import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLogOut } from "../auth/authSlice";
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    const { status } = result.error;
    if (status === "FETCH_ERROR") {
      // Unauthorized, log out the user
      // api.dispatch(userLogOut());
    }
    console.log("Global error handler:", result.error);
  }
  return result;
};

export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    refreshToken: builder.mutation({
      query: () => ({
        url: "users/refreshToken",
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
