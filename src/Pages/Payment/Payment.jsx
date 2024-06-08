import { useState } from "react";
import HelmetTitle from "../../Component/HelmetTitle/HelmetTitle";
import useUser from "../../Hooks/useUser";
// checkout
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('')
const Payment = () => {
  const [loginUser] = useUser();
  const [value, setValue] = useState("");

  const handleSelectChange = (e) => {
    setValue(e.target.value);
  };
  console.log(value, "'jon'");
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

        </Elements>



    </div>
  );
};

export default Payment;
