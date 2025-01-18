"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductsFromCart } from "../../../redux/products/productSlice";
import { useRouter } from "next/navigation";
import { usePurchaseMutation } from "../../../redux/payment/paymentApi";
import { clearPaymentData } from "../../../redux/payment/paymentSlice";

const {
  CardElement,
  useStripe,
  useElements,
} = require("@stripe/react-stripe-js");

const CheckoutForm = ({ clientSecret, values, productsForPayment }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [purchase, { isLoading }] = usePurchaseMutation();
  const { productsCart, totalPrice } = useSelector((state) => state?.productsMaster);
  const shippingAddress = useSelector((state) => state?.shippingAddress);
  const { town, zipcode, district, shippingCost } = shippingAddress;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setErrorMessage(null);

    const cardElement = elements.getElement(CardElement);

    if (!stripe || !cardElement) {
      setErrorMessage("Stripe has not loaded correctly.");
      setIsProcessing(false);
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      );

      if (error) {
        setErrorMessage(error.message);
      } else if (paymentIntent?.status === "succeeded") {
        const paymentData = {
          amount: paymentIntent.amount,
          _id: paymentIntent.id,
        };

        const paymentDetails = {
          name: values?.name,
          email: values?.email,
          phone: values?.phone,
          district: values?.district,
          streetAddress: values?.streetAddress,
          orderNotes: values?.orderNotes || "",
          zip: values?.zip || "",
          product: (productsForPayment || []).map((product) => ({
            _id: product?.product_id,
            size: product?.size,
            quantity: product?.quantity,
            price: product?.price,
          })),
          paymentMethod: "card",
          paymentData: paymentData,
          totalPrice: totalPrice,
          shippingCost: values?.shippingCost,
          isPayed: true,
        };

        try {
          const { data } = await purchase({ paymentDetails });
          if (data?.success === true) {
            alert("Order placed!");
            dispatch(clearPaymentData());
            dispatch(removeProductsFromCart());
            if (window.opener) {
              window.opener.location.href = "/shop";
              window.close();
            } else {
              router.push("/shop");
            }
          } else {
            setErrorMessage(data?.message || "Something went wrong.");
          }
        } catch (error) {
          console.error("Error during payment request:", error);
          setErrorMessage("An error occurred while processing your order. Please try again.");
        }
      } else {
        const status = paymentIntent?.status || "unknown";
        setErrorMessage(`Payment failed with status: ${status}`);
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      console.error("Unexpected payment error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="card-element" className="font-bold">
          Pay with Stripe
        </label>
        <CardElement
          className="px-2 py-2 border-2 rounded-lg"
          id="card-element"
          options={{
            hidePostalCode: true,
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      {errorMessage && <div className="error-message text-red-500">{errorMessage}</div>}
      <button
        className="btn mt-4 btn-secondary mx-auto w-full rounded-lg"
        type="submit"
        disabled={isProcessing}
      >
        {isProcessing ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

export default CheckoutForm;
