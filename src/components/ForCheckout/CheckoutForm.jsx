import { useEffect, useState } from "react";
import { setPaymentResult } from "../../../redux/payment/paymentSlice";
import { useDispatch } from "react-redux";
import { removeProductsFromCart } from "../../../redux/products/productSlice";
import { useRouter } from "next/navigation";

const {
  CardElement,
  useStripe,
  useElements,
} = require("@stripe/react-stripe-js");

const CheckoutForm = ({ clientSecret, values, productsForPayment }) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setErrorMessage(null);

    const cardElement = elements.getElement(CardElement);

    if (!stripe || !cardElement) {
      setErrorMessage("Stripe has not loaded correctly.");
      setIsProcessing(false);
      console.error("Stripe or CardElement not initialized.");
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
        dispatch(setPaymentResult({ success: false, error }));
        alert("Payment failed. Please try again.");
      } else if (paymentIntent?.status === "succeeded") {
        console.log("Payment succeeded:", paymentIntent);
        const paymentData = {
          amount: paymentIntent.amount,
          _id: paymentIntent.id,
        };
        dispatch(setPaymentResult({ success: true, paymentData }));
        alert("Payment successful!");

        dispatch(removeProductsFromCart())

        router.push("/shop");
      } else {
        const status = paymentIntent?.status || "unknown";
        setErrorMessage(`Payment failed with status: ${status}`);
        // console.error("Payment failed with status:", status, paymentIntent);
        alert("Payment failed. Please try again.");
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      // console.error("Unexpected payment error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="card-element">Card Details</label>
        <CardElement id="card-element" options={{ hidePostalCode: true }} />
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <button type="submit" disabled={isProcessing}>
        {isProcessing ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

export default CheckoutForm;
