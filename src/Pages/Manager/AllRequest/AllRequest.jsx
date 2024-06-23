import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../../Component/Spinner/Spinner";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import DoneIcon from "@mui/icons-material/Done";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAllRequestProducts from "../../../Hooks/useAllRequestProducts";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AllRequest = () => {
  const date = new Date();
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const [results, setResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [query, setQuery] = useState("");

  const approDate = date.toLocaleDateString();
  const approveDate = { approveDate: approDate };
  const [requestedProduct, isLoading, refetch] = useAllRequestProducts();

  useEffect(() => {
    if (requestedProduct.length > 0) {
      setAllResults(requestedProduct);
      setResults(requestedProduct);
    }
  }, [requestedProduct]);

  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    const itemName = e.target.name.value.trim();
    setQuery(itemName);

    if (itemName === "") {
      setResults(allResults);
      setNoResults(false);
      return;
    }
    try {
      // search products query by name with condition .. have to change
      const res = await axiosPublic.get(`/search-user`, { params: { query } });
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
  const handleInputChange = (e) => {
    const itemName = e.target.value.trim();
    if (itemName === "") {
      setResults(allResults);
      setNoResults(false);
    }
  };
  const handleUpdate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to approve this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(`/requ-product/${id}`, approveDate)
        .then((res) => {
          if (res.data.modifiedCount) {
            Swal.fire({
              title: "Updated!",
              text: "Your product has been Updated.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };
  const handleReject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Rejected this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Rejected it!",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("id paici");
        axiosSecure.patch(`/requ-product/rejected/${id}`).then((res) => {
          if (res.data.modifiedCount) {
            Swal.fire({
              title: "Rejected!",
              text: "Your product has been Rejected.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };

  return (
    <div>
      <HelmetTitle routeName={"All Requests"}></HelmetTitle>
      <div className="my-10 mx-3 ">
        <form onSubmit={handleSearch}>
          <div className="flex relative">
            <input
              className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 text-gray-500"
              type="text"
              name="name"
              placeholder="Search by name or email"
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
      <div>
        {noResults ? (
          <div className="flex items-center justify-center h-screen">
            <p> No Product Found according to your search </p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Asset Name</th>
                    <th>Name of requester</th>
                    <th>Email of requester</th>
                    <th>Additional note</th>
                    <th>Request Date</th>
                    <th>Asset Type</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((item, idx) => (
                    <tr key={item._id} className="hover:bg-slate-50">
                      <th> {idx + 1} </th>
                      <td> {item.assetName} </td>
                      <td> {item.requesterName} </td>
                      <td> {item.requesterEmail} </td>
                      <td> {item.additionalNote} </td>
                      <td> {item.requestDate} </td>
                      <td> {item.assetType} </td>
                      <td> {item.requestStatus} </td>
                      <td className="flex">
                        <button
                          disabled={
                            item.requestStatus === "approved" ||
                            item.requestStatus === "rejected"
                          }
                          onClick={() => handleUpdate(item._id)}
                          title="Approve"
                          className={`mx-1 p-1 border rounded-2xl ${
                            item.requestStatus === "approved" ||
                            item.requestStatus === "rejected"
                              ? "bg-gray-300"
                              : "hover:bg-green-500"
                          }`}
                        >
                          <DoneIcon></DoneIcon>
                        </button>
                        <button
                          disabled={
                            item.requestStatus === "approved" ||
                            item.requestStatus === "rejected"
                          }
                          onClick={() => handleReject(item._id)}
                          title="Reject"
                          className={`mx-1 p-1 border rounded-lg ${
                            item.requestStatus === "approved" ||
                            item.requestStatus === "rejected"
                              ? "bg-gray-300"
                              : "hover:bg-green-500"
                          }`}
                        >
                          <DoNotDisturbAltIcon></DoNotDisturbAltIcon>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllRequest;
