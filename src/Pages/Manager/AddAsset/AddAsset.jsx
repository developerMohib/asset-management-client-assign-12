import Swal from "sweetalert2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const imgBB_api_Key = import.meta.env.VITE_imgbb_key;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${imgBB_api_Key}`;

const AddAsset = () => {
  const [productType, setProductType] = useState("");
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const date = new Date();
  const addedDate = date.toLocaleDateString();
  console.log(addedDate, "date");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setProductType(newValue);
  };

  const onSubmit = async (data) => {
    const productName = data.productName;
    const productQuantity = data.productQuantity;
    const productImg = { image: data.productPhoto[0] };

    // send photo to imgbb
    const response = await axiosPublic.post(img_hosting_api, productImg, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const productUrl = response.data.data.display_url;

    const product = {
      productName,
      productQuantity,
      productType,
      productUrl,
      addedDate,
    };

    // send data to server
    axiosPublic
      .post("/products", product)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your product has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/asset-list");
        }
      })
      .catch((err) => {
        console.log("add product", err);
      });
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
                      placeholder="Product Quantity"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                    {errors.email?.type === "required" && (
                      <p className="text-red-600">Quantity is required</p>
                    )}
                  </div>
                </div>
                <div className="md:flex gap-4">
                  {/* Packages Selection */}
                  <div className="mb-3 md:w-1/2 ">
                    <label className="mb-2 block text-xs font-semibold">
                      Product Type {productType}
                    </label>
                    <select
                      value={productType}
                      onChange={handleSelectChange}
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    >
                      <option value="">Product Type</option>
                      <option value="Returnable">Returnable</option>
                      <option value="Non-Returnable">Non-Returnable</option>
                    </select>
                  </div>
                  <div className="mb-3 md:w-1/2">
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
                    value="Add Product"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAsset;
