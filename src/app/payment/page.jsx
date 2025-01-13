"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/ForCheckout/CheckoutForm";
import { setPaymentResult } from "../../../redux/payment/paymentSlice";
import { usePaymentRequestMutation } from "../../../redux/payment/paymentApi";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const PaymentPage = () => {
  
  const dispatch = useDispatch();
  const router = useRouter();
  const paymentData = useSelector((state) => state.payment.paymentData); 
  const [paymentRequest, { isLoading, isError, error }] =
    usePaymentRequestMutation();
  const [clientSecret, setClientSecret] = useState("");

  // Track if payment request has already been made
  const paymentRequestMade = useRef(false);

  // Redirect if payment data is invalid
  useEffect(() => {
    if (!paymentData?.values && !paymentData?.productsForPayment) {
      router.back();
    }
  }, [paymentData, router]);


  useEffect(() => {
    const makePayment = async () => {
      if (paymentRequestMade.current || !paymentData?.totalPayment) return;

      try {
        paymentRequestMade.current = true; 
        const { data } = await paymentRequest({ totalPayment: paymentData.totalPayment });

        if (!data?.clientSecret) {
          console.error("Client secret not found in response");
          return;
        }

        setClientSecret(data?.clientSecret);
        console.log(data, "paymentRequest");
      } catch (error) {
        console.error("Error during payment request:", error);
      }
    };

    makePayment();
  }, [paymentData?.totalPayment, paymentRequest]);

  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (clientSecret === "") {
        window.close()
        console.log("ClientSecret is null or missing");
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [clientSecret]);


 
console.log(clientSecret, "clientSecret")
  return (
    <div>
      <h1>Payment</h1>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm
            clientSecret={clientSecret}
            values={paymentData?.values}
            productsForPayment={paymentData?.productsForPayment}
           
          />
        </Elements>
      ) : (
        <p>Loading payment details...</p>
      )}
    </div>
  );
};

export default PaymentPage;
