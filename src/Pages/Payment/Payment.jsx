import { useEffect, useState } from "react";
import HelmetTitle from "../../Component/HelmetTitle/HelmetTitle";
import useUser from "../../Hooks/useUser";
// checkout
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_Pk);

// console.log('pk', import.meta.env.VITE_stripe_Pk)
const Payment = () => {
  const [loginUser] = useUser();
  const [value, setValue] = useState("");
  const [price, setPrice] = useState(0)
  const [clientSecret, setClientSecret] =useState('') ;
  const axiosSecure = useAxiosSecure();

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    const charge = parseInt(newValue);
    
    let newPrice;
    if (charge === 5) {
      newPrice = 5;
    } else if (charge === 10) {
      newPrice = 8;
    } else if (charge === 20) {
      newPrice = 15;
    } else {
      newPrice = ' ';
    }
    
    if (price !== newPrice) {
      setPrice(newPrice);
    }
  };
console.log('price', price)

// to do : payment pass to server

// useEffect(()=>{
//     axiosSecure.post()
//     .then(res =>{
//         console.log('payment page',res.data)
//     })
//     .then()
// },[axiosSecure])

  return (
    <div>
      <HelmetTitle routeName={"Payment"}></HelmetTitle>
      <p className="text-center my-5 font-semibold text-xl">
        {" "}
        Your employee {loginUser?.member}{" "}
      </p>
      <p> Select Member {value} </p>
      {/* Packages Selection */}
      <div className="md:flex items-end gap-5">
        <div className="mb-3 md:w-1/2 ">
          <label className="mb-2 block text-xs font-semibold">
            Update Your Plan
          </label>
          <select
            value={value}
            onChange={handleSelectChange}
            className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
          >
            <option value="">Select a Package </option>
            <option value="5">5 Members for $5</option>
            <option value="10">10 Members for $8</option>
            <option value="20">20 Members for $15</option>
          </select>
          <div>
            <button className="btn btn-outline my-5">Update Employee</button>
          </div>
        </div>
      </div>


      {/* Payment Check-out */}
        <Elements stripe={stripePromise} >
            <CheckOut></CheckOut>
        </Elements>

    </div>
  );
};

export default Payment;
