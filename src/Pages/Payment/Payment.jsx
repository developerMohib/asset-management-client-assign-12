import { useEffect, useState } from "react";
import HelmetTitle from "../../Component/HelmetTitle/HelmetTitle";
import useUser from "../../Hooks/useUser";
// checkout
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_Pk);
const Payment = () => {
  const { loginUser } = useUser();
  const axiosSecure = useAxiosSecure();
  const [price, setPrice] = useState(5);
  const [clientSecret, setClientSecret] = useState();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    axiosSecure.post("/payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);
  // console.log(loginUser?.price, "price after join and ", clientSecret);


  const textToCopy = "4242424242424242";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div>
      <HelmetTitle routeName={"Payment"} />
      <p className="text-center my-5 font-semibold text-xl">
        {" "}
        Your employee {loginUser?.member}{" "}
      </p>
      <p className="text-center my-5 text-xl"> You have to pay ${price} </p>
      <p>clientSecret {clientSecret} </p>
      <p> Select Member - value </p>
      <div className="flex justify-start space-x-2 items-center">
        <p> Example test card number <span className="text-primary" >4242424242424242</span> </p>        
      <button
        onClick={handleCopy}
        className="px-3 py-1 btn-outline border border-borderPri text-textPri rounded"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <p> Example MM/YY, cvc and zip <span className="text-primary" > 02/1 cvc - 1234, zip - 12345 </span> </p>
      </div>
      {/* Packages Selection Again*/}

      {/* Payment Check-out */}
      <Elements stripe={stripePromise}>
        {<CheckOut clientSecret={clientSecret}></CheckOut>}
      </Elements>
    </div>
  );
};

export default Payment;
