const { CardElement, useStripe, useElements } = require("@stripe/react-stripe-js");

const CheckoutForm = ({ clientSecret, onSuccess, onFailure }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
  
    useEffect(() => {
      if (!stripe || !elements) return;
    }, [stripe, elements]);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsProcessing(true);
      setErrorMessage(null); // Reset error message
  
      const cardElement = elements.getElement(CardElement);
  
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });
  
      if (error) {
        setErrorMessage(error.message);
        onFailure(error);
        setIsProcessing(false);
      } else if (paymentIntent.status === "succeeded") {
        onSuccess(paymentIntent);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Details</label>
          <CardElement />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Pay"}
        </button>
      </form>
    );
  };
  