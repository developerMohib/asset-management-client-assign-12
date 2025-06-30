import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ clientSecret }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [paymentId, setPaymentId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(" ");

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
  }, [stripe, clientSecret]);

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      // console.log("payment method error", error);
      setErrorMessage(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setErrorMessage(" ");
    }

    // confirmed Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (paymentIntent?.status === "succeeded") {
      console.log("payment intent", paymentIntent);
      toast.success("payment successfully");
      setPaymentId(paymentIntent.id);
      navigate("/");
    } else {
      console.log("confirmed error", confirmError);
    }
  };

  return (
    <form onSubmit={handleCheckout}>
      <CardElement
        options={{
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
      <button
        className="btn btn-outline my-2"
        type="submit"
        disabled={isLoading || !stripe || !elements}
      >
        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
      </button>
      <p className="text-red-600"> {errorMessage} </p>
      {paymentId && (
        <p className="text-green-600">
          Your Payment Transection id : {paymentId}
        </p>
      )}
    </form>
  );
};

CheckOut.propTypes = {
  clientSecret: PropTypes.node,
};
export default CheckOut;
