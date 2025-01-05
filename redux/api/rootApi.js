import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
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
          // dispatch(
          //   userRegistration({
          //     token: res.data.accessToken,
          //     user: res.data.user,
          //   })
          // );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {useRefreshTokenMutation  } = rootApi;
