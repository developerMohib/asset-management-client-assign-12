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

  useEffect(() => {
    axiosSecure.post("/payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);
  console.log(loginUser?.price, "price after join and ", clientSecret);

  return (
    <div>
      <HelmetTitle routeName={"Payment"}></HelmetTitle>
      <p className="text-center my-5 font-semibold text-xl">
        {" "}
        Your employee {loginUser?.member}{" "}
      </p>
      <p className="text-center my-5 text-xl"> You have to pay ${price} </p>
      <p>clientSecret {clientSecret} </p>
      <p> Select Member - value </p>
      {/* Packages Selection */}

      {/* Payment Check-out */}
      <Elements stripe={stripePromise}>
        <div>{/* <CheckOut></CheckOut> */}</div>
        {<CheckOut clientSecret={clientSecret}></CheckOut>}
      </Elements>
    </div>
  );
};

export default Payment;
