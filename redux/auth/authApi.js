import { rootApi } from "../api/rootApi";
import { userLogin, userLogOut, userRegistration } from "./authSlice";

export const authApi = rootApi.injectEndpoints({
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
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log(res, "user registration");
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
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/users/login",
        method: "POST",
        body: { email, password },
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          console.log(res, "login");
          dispatch(
            userLogin({ token: res.data?.accessToken, user: res.data?.user })
          );
        } catch (error) {}
      },
    }),
    logout: builder.mutation({
      query: ({user}) => ({
        url: "/users/logout",
        method: "POST",
        credentials: "include",
        body: {user},
        headers: {
            "Content-Type": "application/json",
          },
        
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          console.log(res, "logout");
          dispatch(
            userLogOut()
          );
        } catch (error) {}
      },
    }),

    resetPass: builder.mutation({
      query: ({resetPassword,token}) => ({
        url: `/users/resetPassword/${token}`,
        method: "POST",
        body: { resetPassword },
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
          },
        
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          
          
        } catch (error) {}
      },
    }),
   
  }),
});

export const {useRegistrationMutation, useLoginMutation, useLogoutMutation, useResetPassMutation} = authApi
