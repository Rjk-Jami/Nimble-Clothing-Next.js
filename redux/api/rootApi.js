import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userRegistration } from "../auth/authSlice";

export const rootApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.restful-api.dev" }),
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: ({ email, password }) => ({
        url: "auth/registration",
        method: "POST",
        body: {
          email,
          password,
        },
        credentials: "include",
      }),
      async onQueryStarted({ arg }, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            userRegistration({
              accessToken: res.data.accessToken,
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

export const {useRegisterMutation}= rootApi
