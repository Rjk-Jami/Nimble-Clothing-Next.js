import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userRegistration } from "../auth/authSlice";

export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: ({ emailForRegister }) => ({
        url: "/users/register",
        method: "POST",
        body: {
          emailForRegister,
          
        },
        credentials: "include",
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
              token: res.data.accessToken,
              user: res.data.user,
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