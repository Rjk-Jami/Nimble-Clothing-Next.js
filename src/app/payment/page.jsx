"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/ForCheckout/CheckoutForm";
import { usePaymentRequestMutation } from "../../../redux/payment/paymentApi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const PaymentPage = () => {
  const {totalPrice } = useSelector(
      (state) => state?.productsMaster
    );
     const shippingAddress = useSelector((state) => state?.shippingAddress);
      const { town, zipcode, district, shippingCost } = shippingAddress;
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
      router.push("/checkout");
    }
  }, [paymentData, router]);

  useEffect(() => {
    const makePayment = async () => {
      if (paymentRequestMade.current || !paymentData?.totalPayment) return;

      try {
        paymentRequestMade.current = true;
        const { data } = await paymentRequest({
          totalPayment: paymentData.totalPayment,
        });

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
        window.close();
        console.log("ClientSecret is null or missing");
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [clientSecret]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      alert("Payment window timed out. Please try again.");
      window.close();
    }, 5 * 60 * 1000); // 5 * 60 * 1000 = 5 minute

    return () => clearTimeout(timeoutId);
  }, []);

  console.log(clientSecret, "clientSecret");
  return (
    <div className="lg:w-2/5 md:w-3/5 mx-auto">
      <h1 className="text-lg inline-flex gap-2">Payment Total:<span className="flex items-center text-orange-500">{shippingCost+totalPrice}<FaBangladeshiTakaSign></FaBangladeshiTakaSign></span></h1>
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
