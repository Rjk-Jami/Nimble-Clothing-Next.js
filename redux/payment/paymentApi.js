import { rootApi } from "../api/rootApi";

export const paymentApi = rootApi.injectEndpoints({
    endpoints: (builder)=>({
        paymentRequest : builder.mutation({
            query : ({totalPayment}) => ({
                url: "/payments/create-payment-intent",
                method: "POST",
                body:{totalPayment}

            }),
        })
    })
})

export const {usePaymentRequestMutation} = paymentApi