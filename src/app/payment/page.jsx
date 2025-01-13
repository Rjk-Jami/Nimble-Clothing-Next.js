"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/ForCheckout/CheckoutForm";
import { setPaymentResult } from "../../../redux/payment/paymentSlice";

// Load Stripe with your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);



const PaymentPage = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // Access the router
  const { values, productsCart } = useSelector((state) => state.payment); // Access payment data from Redux
  const [clientSecret, setClientSecret] = useState("");
console.log(productsCart)
  useEffect(()=>{
  const clientId = setTimeout(()=>{
    if (clientSecret === ""){
      // window.close()
      console.log("clientSecret is null")
    }

  }, 3000)

  return ()=>{
    clearTimeout(clientId)
  }
},[clientSecret])

  useEffect(() => {
    try {
      // Ensure valid payment data exists before proceeding
      if (!values || !productsCart) {
        router.back(); // Redirect the user back if no payment data is found
        return;
      }

      // Fetch clientSecret from the backend
      fetch("/api/payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: calculateTotal(productsCart), // Dynamic total amount calculation
        }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
        .catch((err) => {
          console.error("Failed to create payment intent:", err);
          alert("Something went wrong. Please try again.");
          router.back(); // Navigate back if something goes wrong
        });
    } catch (error) {
      
      
    }
  }, [values, productsCart, router]);

  const handlePaymentResult = (result) => {
    dispatch(setPaymentResult(result)); // Store payment result in Redux
    if (result.success) {
      alert("Payment successful!");
    } else {
      alert("Payment failed . Please try again.");
    }
    router.back(); // Go back to the previous page after payment
  };


  return (
    <div>
      <h1>Payment</h1>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm
            values={values}
            productsCart={productsCart}
            onPaymentResult={handlePaymentResult}
          />
        </Elements>
      ) : (
        <p>Loading payment details...</p>
      )}
    </div>
  );
};

// Helper function to calculate the total amount
const calculateTotal = (productsCart) => {
  return productsCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export default PaymentPage;
