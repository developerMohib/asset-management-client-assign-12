import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../../Component/Spinner/Spinner";
import useRequAssets from "../../../Hooks/useRequAssets";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";

const MyAssets = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const [result, setResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [isReturn, setIsReturn] = useState();

  const [requProducts, isLoading, refetch] = useRequAssets();

  // set initial all data for no data
  useEffect(() => {
    if (requProducts.length > 0) {
      setResults(requProducts);
      setAllResults(requProducts);
    }
  }, [requProducts]);

  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }
  if (requProducts.length === 0) {
    return (
      <p className="flex min-h-screen justify-center items-center">
        {" "}
        Please request for asset{" "}
      </p>
    );
  }

  const handleCancel = async (id) => {
    try {
      const res = await axiosSecure.delete(`/requ-product/${id}`);
      if (res.data.deletedCount > 0) {
        toast.success("Your rquested product is canceled !");        
        refetch();
      }
    } catch (err) {
      console.log("paici from cancel", err);
    }
  };

  const handleReturn = async (id) => {
    console.log("paici from update", id);
    setIsReturn(id)
    // try {
    //   const res = await axiosSecure.delete(`/requ-product/${id}`);
    //   if (res.data.deletedCount > 0) {
    //     toast.success("Thank you for your feedbeck !");
    //   }
    // } catch (err) {
    //   console.log("paici from cancel", err);
    // }
  };

  const handlePrint = (id) => {
    console.log("paici from print", id);
  };

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
  // filter data with status
  const handlePendingData = async (e) => {
    const selectedFilter = e.target.value;
    setSelectedFilter(selectedFilter);
    if (selectedFilter === "") {
      setResults(allResults);
      return;
    }
    try {
      // good but justify with email
      const res = await axiosPublic.get(
        `/filter-status?requestStatus=${selectedFilter}&requesterEmail=${user?.email}`
      );
      setResults(res.data);
    } catch (error) {
      console.error("Error searching items:", error);
    }
  };

  return (
    <div>
      <HelmetTitle routeName={"My Assets"}> </HelmetTitle>
      <div>
        <p> My requested products : {requProducts.length} </p>
      </div>

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
                  onChange={handlePendingData}
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

      {noResults ? (
        <div className="flex items-center justify-center h-screen">
          <p> No Product Found according to your search </p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Assets Name</th>
                  <th>Assets Type</th>
                  <th>Request Date</th>
                  <th>Approval Date</th>
                  <th>Request Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {result?.map((item) => (
                  <tr key={item._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td className="font-bold"> {item.assetName}</td>
                    <td> {item.assetType} </td>
                    <td>{item.requestDate}</td>
                    {/* Approval Date */}
                    <td>
                      {" "}
                      {item.requestStatus === "pending"
                        ? "Not Approve yet"
                        : item.approveDate }{" "}
                    </td>
                    <td> {item.requestStatus} </td>
                    <td>
                      {item.requestStatus === "pending" ? (
                        <button
                          onClick={() => handleCancel(item._id)}
                          className="btn btn-ghost btn-xs"
                        >
                          {" "}
                          Cancel{" "}
                        </button>
                      ) : item.requestStatus === "approved" &&
                        item.assetType === "Returnable" ? (
                        <>
                          <button
                            onClick={() => handlePrint(item._id)}
                            className="btn btn-ghost btn-xs"
                          >
                            Print
                          </button>
                          <button disabled={isReturn === item._id}
                            onClick={() => handleReturn(item._id)}
                            className="btn btn-ghost btn-xs"
                          >
                            Return
                          </button>
                        </>
                      ) : (
                        <button 
                          onClick={() => handlePrint(item._id)}
                          className="btn btn-ghost btn-xs"
                        >
                          Print
                        </button>
                      )}
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

export default MyAssets;
