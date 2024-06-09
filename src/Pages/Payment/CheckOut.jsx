import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import toast from "react-hot-toast";

const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(' ')
  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardElement);
    
      if (card == null) {
        return;
      }
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type : 'card',
        card
      }) 
      if(error){
        console.log('payment method error', error);
        setErrorMessage(error.message);
      }
      else{
        console.log('payment method', paymentMethod);
        setErrorMessage(' ')
        toast.success('payment successfully')
      }

  };
  

  return (
    <form onSubmit={handleCheckout}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-outline my-2" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-600"> {errorMessage} </p>
    </form>
  );
};

export default CheckOut;
