"use client";

import { rootApi } from "../api/rootApi";
import { updateUser } from "../auth/authSlice";

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
          // console.log(error);
        }
      },
    }),
    updateUser: builder.mutation({
      query: ({ userDetails }) => ({
        url: "/users/updateUser",
        method: "PATCH",
        body: { userDetails },
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          // console.log(res, "updateUser API");
          dispatch(
            updateUser({user: res.data?.user })
          );
        } catch (error) {
          // console.log(error, "error");
        }
      },
    }),
    UserForgetPassword: builder.mutation({
      query: ({ email }) => ({
        url: "/users/forgotPassword",
        method: "POST",
        body: { email },
        credentials: "include",
      }),
      
    }),
  }),
});
export const { useGetUserMutation, useUpdateUserMutation, useUserForgetPasswordMutation } = userSlice;
