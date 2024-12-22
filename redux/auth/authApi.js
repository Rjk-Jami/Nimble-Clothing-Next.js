import { rootApi } from "../api/rootApi";
import { userLogin } from "./authSlice";

export const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
});

export const { useLoginMutation} = authApi
