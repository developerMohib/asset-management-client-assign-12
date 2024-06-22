import useUser from "../../../Hooks/useUser";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import useAllProducts from "../../../Hooks/useAllProducts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../../Component/Spinner/Spinner";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const RequestAssets = () => {
  const date = new Date();
  const { user, loading } = useAuth();
  const { loginUser } = useUser();
  const axiosPublic = useAxiosPublic();

  const [result, setResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const requDate = date.toLocaleDateString();
  const { products, isLoading, refetch } = useAllProducts();
  // console.log('product', products)
  // set initial all data for no data
  useEffect(() => {
    if (products.length > 0) {
      setAllResults(products);
      setResults(products);
    }
  }, [products]);

  const requesterName = loginUser.name;
  const requesterEmail = loginUser.email;
  const additionalNote = "Hey this is the additional test";
  const requestStatus = "pending";
  const requestDate = requDate;
  const axiosSecure = useAxiosSecure();

  // search function
  const handleSearch = async (e) => {
    e.preventDefault();
    const itemName = e.target.name.value.trim();
    // setItemName(searchValue)
    if (itemName === "") {
      setResults(allResults);
      setNoResults(false);
      return;
    }
    try {
      // search products query by name with condition
      const res = await axiosPublic.get(`/search?name=${itemName}`);
      if (res.data.length > 0) {
        setResults(res.data);
        setNoResults(false);
      } else {
        setResults([]);
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error searching items:", error);
      setResults([]);
      setNoResults(true);
    }
  };

  // handle input change
  const handleInputChange = (e) => {
    const itemName = e.target.value.trim();
    if (itemName === "") {
      setResults(allResults);
      setNoResults(false);
    }
  };

  // filter data with type
  const handleFilterData = async (e) => {
    const selectedFilter = e.target.value;
    setSelectedFilter(selectedFilter);
    console.log(selectedFilter);
    // select filter data empty
    if (selectedFilter === "") {
      setResults(allResults);
      return;
    }
    try {
      // good but justify with email
      const res = await axiosPublic.get(
        `/filter?assetType=${selectedFilter}&requesterEmail=${user?.email}`
      );
      setResults(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error searching items:", error);
    }
  };

  const handleRequest = (item) => {
    const assetName = item.productName;
    const assetType = item.productType;

    // send data to database
    const assetDetails = {
      requesterName: requesterName,
      requesterEmail: requesterEmail,
      additionalNote: additionalNote,
      requestStatus: requestStatus,
      requestDate: requestDate,
      assetName: assetName,
      assetType: assetType,
    };

    // call server link / api
    axiosSecure
      .post("/requ-product", assetDetails)
      .then((res) => {
        const data = res.data;
        if (data.insertedId) {
          toast.success("Your request send succesfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // can i update the api also?
    console.log("can i update the api", item._id);
    const updatedData = { quantityChange: -1 };
    axiosSecure
      .patch(`/products/${item._id}`, updatedData)
      .then((res) => {
        console.log("patch data", res.data);
        if (res.data.modifiedCount) {
          toast.success("Your request has been send successfully");
        }
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isLoading || loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <HelmetTitle routeName={"Request for an Asset"}> </HelmetTitle>
      <h1> hi i am RequestAssets employee </h1>

      <div className="flex gap-5 items-center w-full">
        {/* Search function start */}
        <div className="w-1/2">
          <form onSubmit={handleSearch}>
            <div className="flex relative">
              <input
                className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 text-gray-500"
                type="text"
                name="name"
                placeholder="Type here.."
                onChange={handleInputChange}
              />
              <input
                className="bg-green-400 cursor-pointer absolute right-0 top-0 py-1 px-2 rounded-lg"
                type="submit"
                value="Search"
              />
            </div>
          </form>
        </div>
        {/* Search function end */}

        {/* Filter Function asset type and status start */}
        <div className="w-1/2 flex gap-3">
          {/* filter asset type */}
          <div className="w-1/2">
            <div>
              <label className="form-control w-full">
                <select
                  onChange={handleFilterData}
                  value={selectedFilter}
                  className="select select-bordered"
                >
                  <option value="">Filter Products Type </option>
                  <option value="Returnable">Returnable</option>
                  <option value="Non-Returnable">Non-Returnable</option>
                </select>
              </label>
            </div>
          </div>
          {/* filter asset status */}
          <div className="w-1/2">
            <div>
              <label className="form-control w-full">
                <select
                  value={selectedFilter}
                  className="select select-bordered"
                >
                  <option value="">Filter Products Status </option>
                  <option value="pending">pending</option>
                  <option value="approved">approved</option>
                  <option value="rejected">rejected</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        {/* Filter Function asset type and status end */}
      </div>

      {/* table */}
      {noResults ? (
        <div className="flex items-center justify-center h-screen">
          <p> No Product Found according to your search </p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th> Product Name</th>
                  <th>Product Type</th>
                  <th>Product Availability</th>
                  {/* Here will be update function button, 
              to do : if click request then app.put call and refetch call
              beck end : if beck end quantity is > 0 then increse once
              */}
                  <th>
                    {" "}
                    <button className="btn btn-xs">Request Assets</button>{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {result.map((item, idx) => (
                  <tr key={item._id}>
                    <th> {idx + 1} </th>
                    <td> {item.productName} </td>
                    <td> {item.productType} </td>
                    <td>
                      {" "}
                      {item.productQuantity === "0" ? (
                        <span>Out of Stock</span>
                      ) : (
                        item.productQuantity
                      )}
                    </td>
                    <td>
                      <div>
                        <button
                          className="btn btn-xs"
                          onClick={() => handleRequest(item)}
                        >
                          Request
                        </button>

                        {/* <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>

                        </form>

                        <form className="mt-12">
                      
                      <div className="space-y-3">
                        <div>
                          <label htmlFor="name" className="block mb-3 text-sm font-medium text-black">
                          {item.productName}
                          </label>
                          <input
                            id="name"
                            name="text"
                            type="text"
                            placeholder="Tell about asset"
                            className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500 my-3"
                          />
                        </div>
                        <div className="col-span-full text-center">
                          <input className="px-4 py-2 text-base text-white transition-all rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 hover:to-indigo-700 cursor-pointer" type="submit" value="Request Assest" />
                          
                        </div>
                      </div>
                    </form>
                      </div>
                    </dialog> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default RequestAssets;
