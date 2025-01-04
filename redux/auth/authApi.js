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
        url: "/users",
        method: "POST",
        body: { email, password },
        
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            userLogin({ token: "00000000000000000000000000", user: res.data })
          );
        } catch (error) {}
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
        credentials: "include",
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
   
  }),
});

export const {useRegistrationMutation, useLoginMutation, useLogoutMutation} = authApi
