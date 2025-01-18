"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/ForCheckout/CheckoutForm";
import { usePaymentRequestMutation } from "../../../redux/payment/paymentApi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

const PaymentPage = () => {
  const { totalPrice } = useSelector((state) => state?.productsMaster);
  const shippingAddress = useSelector((state) => state?.shippingAddress);
  const { shippingCost } = shippingAddress || {};
  const paymentData = useSelector((state) => state?.payment?.paymentData);
  const [paymentRequest, { isLoading }] = usePaymentRequestMutation();
  const [clientSecret, setClientSecret] = useState("");
  const paymentRequestMade = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (!paymentData?.values || !paymentData?.productsForPayment) {
      router.push("/checkout");
    }
  }, [paymentData, router]);

  useEffect(() => {
    const fetchClientSecret = async () => {
      if (paymentRequestMade.current || !paymentData?.totalPayment) return;

      try {
        paymentRequestMade.current = true;
        const { data } = await paymentRequest({
          totalPayment: paymentData.totalPayment,
        })

        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        } else {
          console.error("Client secret not found in response.");
        }
      } catch (error) {
        console.error("Error during payment request:", error);
      }
    };

    fetchClientSecret();
  }, [paymentData?.totalPayment, paymentRequest]);

  const totalAmount = shippingCost + totalPrice || 0;

  return (
    <div className="lg:w-2/5 md:w-3/5 mx-auto">
      <h1 className="text-lg inline-flex gap-2">
        Payment Total:
        <span className="flex items-center text-orange-500">
          {totalAmount}
          <FaBangladeshiTakaSign />
        </span>
      </h1>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm
            clientSecret={clientSecret}
            values={paymentData?.values}
            productsForPayment={paymentData?.productsForPayment}
          />
        </Elements>
      ) : isLoading ? (
        <p>Loading payment details...</p>
      ) : (
        <p>Unable to load payment details. Please try again later.</p>
      )}
    </div>
  );
};

export default PaymentPage;
