import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userRegistration } from "../auth/authSlice";

export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: ({ email, password }) => ({
        url: "/users",
        method: "POST",
        body: {
          email,
          password,
        },
        // credentials: "include",
        headers: {
            "Content-Type": "application/json",
          },
      }),
      async onQueryStarted( arg , { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log(res, 'jami')
          dispatch(
            userRegistration({
              token: '4654534sdkajdhjbas',
              user: res.data,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegistrationMutation } = rootApi;