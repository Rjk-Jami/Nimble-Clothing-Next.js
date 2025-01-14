import { rootApi } from "../api/rootApi";

export const paymentApi = rootApi.injectEndpoints({
    endpoints: (builder)=>({
        paymentRequest : builder.mutation({
            query : ({totalPayment}) => ({
                url: "/payments/create-payment-intent",
                method: "POST",
                body:{totalPayment}

            }),
        }),
        purchase : builder.mutation({
            query : ({paymentDetails}) => ({
                url: "/payments/purchase",
                method: "POST",
                body:{paymentDetails}

            }),
        })
    })
})

export const {usePaymentRequestMutation, usePurchaseMutation} = paymentApi