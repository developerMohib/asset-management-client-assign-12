import { useForm } from "react-hook-form";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddAsset = () => {
  const [value, setValue] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const productName = data.productName;
    const productQuantity = data.productQuantity;
    const companyName = data.companyName;
    console.log(productName, productQuantity, companyName);
  };

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    console.log(newValue, "Product Type");
  };

  return (
    <div>
      <HelmetTitle routeName={"Add Assets"}></HelmetTitle>

      <div className="flex flex-wrap max-h-screen w-full content-center justify-center pt-10 bg-[#f4f3f0]">
        <div className="flex shadow-md pb-10 w-full">
          <div className="flex flex-wrap content-center justify-center rounded-l-md w-full">
            <div className="md:w-4/5">
              <h1 className="text-xl font-semibold">Add Product for sell</h1>
              <small className="text-gray-400">
                Welcome back! Please enter Product details
              </small>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <div className="md:flex gap-4">
                  {/* Product Name */}
                  <div className="mb-3 md:w-1/2">
                    <label className="mb-2 block text-xs font-semibold">
                      Product Name
                    </label>
                    <input
                      {...register("productName", { required: true })}
                      type="text"
                      name="productName"
                      placeholder="Enter your name"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                    {errors.productName?.type === "required" && (
                      <p className="text-red-600">Name is required</p>
                    )}
                    {errors.name?.type === "maxLength" && (
                      <p className="text-red-600">
                        Name should not be lenght 20 char
                      </p>
                    )}
                  </div>

                  {/* Product Quantity */}
                  <div className="mb-3 md:w-1/2">
                    <label className="mb-2 block text-xs font-semibold">
                      Product Quantity
                    </label>
                    <input
                      {...register("productQuantity", { required: true })}
                      type="number"
                      name="productQuantity"
                      placeholder="Enter your email"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                    {errors.email?.type === "required" && (
                      <p className="text-red-600">Email is required</p>
                    )}
                  </div>
                </div>
                <div className="md:flex gap-4">
                  {/* Company Name */}
                  <div className="mb-3 md:w-1/2">
                    <label className="mb-2 block text-xs font-semibold">
                      Company Name
                    </label>
                    <input
                      {...register("companyName", { required: true })}
                      type="text"
                      name="companyName"
                      placeholder="Enter Company name"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                    {errors.companyName?.type === "required" && (
                      <p className="text-red-600">Company Name is required</p>
                    )}
                    {errors.name?.type === "maxLength" && (
                      <p className="text-red-600">
                        Name should not be lenght 20 char
                      </p>
                    )}
                  </div>
                  {/* Packages Selection */}
                  <div className="mb-3 md:w-1/2 ">
                    <label className="mb-2 block text-xs font-semibold">
                      Product Type {value}
                    </label>
                    <select
                      value={value}
                      onChange={handleSelectChange}
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    >
                      <option value="">Product Type</option>
                      <option value="Returnable">Returnable</option>
                      <option value="Non-Returnable">Non-Returnable</option>
                    </select>
                  </div>
                </div>

                {/* Product logo*/}
                <div className="">
                  {/* Product photo */}
                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
                      Product Photo
                    </label>
                    <input
                      {...register("productPhoto")}
                      name="productPhoto"
                      type="file"
                      accept="image/*"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="mb-3">
                  <input
                    className={`mb-1.5 block w-full text-center text-white bg-blue-600 hover:bg-green-500 px-2 py-1.5 rounded-md cursor-pointer`}
                    type="submit"
                    value="Sign up"
                  />
                </div>
              </form>

              <div className="text-center">
                <span className="text-xs text-gray-600 font-semibold">
                  Already have an account?
                </span>
                <Link
                  className="text-xs font-semibold text-purple-700"
                  to="/login"
                >
                  {" "}
                  Sign in{" "}
                </Link>
              </div>
              <div className="text-center">
                <span className="text-xs text-gray-600 font-semibold">
                  Want to be an Employee ?
                </span>
                <Link
                  className="text-xs font-semibold text-purple-700"
                  to="/join-employee"
                >
                  {" "}
                  Sign up{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAsset;
