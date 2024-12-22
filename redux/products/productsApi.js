import { rootApi } from "../api/rootApi";

export const productsApi = rootApi.injectEndpoints({
    endpoints: (builder) =>({
        getProducts : builder.mutation({
            query:()=>({
                url:'/products',
                method:"GET"
            }),
           
        })
    })
})
export const { useGetProductsMutation } = productsApi