import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import useAllProducts from "../../../Hooks/useAllProducts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Spinner from "../../../Component/Spinner/Spinner";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AssestList = () => {
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const [result, setResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const { products, isLoading, refetch } = useAllProducts();

  // set initial all data for no data
  useEffect(() => {
    if (products.length > 0) {
      setAllResults(products);
      setResults(products);
    }
  }, [products]);

  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }

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
      // search products query by name with condition .. have to change
      const res = await axiosPublic.get(`/search-products?name=${itemName}`);
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
      // good but justify with email ... have to change
      const res = await axiosPublic.get(
        `/filter-products?productType=${selectedFilter}`
      );
      setResults(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error searching items:", error);
    }
  };
   // filter data with status
  //  const handlePendingData = async (e) => {
  //   const selectedFilter = e.target.value;
  //   setSelectedFilter(selectedFilter);
  //   if (selectedFilter === "") {
  //     setResults(allResults);
  //     return;
  //   }
  //   try {
  //     // good but justify with email
  //     const res = await axiosPublic.get(
  //       `/filter-status?requestStatus=${selectedFilter}`
  //     );
  //     setResults(res.data);
  //   } catch (error) {
  //     console.error("Error searching items:", error);
  //   }
  // };

  const handleDelete = (id) => {
    console.log("paici from cancel", id);
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/products/${id}`).then((res) => {
            console.log("Cancel response:", res.data);
            if (res.data.deletedCount > 0) {
              toast.success("Your rquested product is deleted !");
              Swal.fire({
                title: "Deleted!",
                text: "Your rquested product is deleted !",
                icon: "success",
              });
              refetch();
            }
          });
        }
      });
    } catch (err) {
      //hello
      console.log("paici from cancel", err);
    }
  };

  const handleUpdate = (id) => {
    console.log("id paici", id);
  };

  return (
    <div>
      <HelmetTitle routeName={"Assets List"}></HelmetTitle>
      <h1>Hi i am assest list, manager</h1>

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
          {/* Filter Products Type */}
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
          {/* Filter items by availability  */}
          <div className="w-1/2">
            <div>
              <label className="form-control w-full">
                <select
                  value={selectedFilter}
                  className="select select-bordered"
                >
                  <option value="">Filter items by availability </option>
                  <option value="available">available</option>
                  <option value="out-of-stock">out-of-stock</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        {/* Filter Function asset type and status end */}
      </div>
      <div>
        <div className="overflow-x-auto">
          {noResults ? (
            <div className="flex items-center justify-center h-screen">
              <p> No Product Found according to your search </p>
            </div>
          ) : (
            <>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Product Type</th>
                    <th>Product Quantity</th>
                    <th>Added Date</th>
                    <th>Action</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((item, idx) => (
                    <tr key={item._id}>
                      <th> {idx + 1} </th>
                      <td>
                        <div className="flex gap-5 ">
                          <div>
                            {" "}
                            <img
                              className="w-12 h-12 rounded-lg "
                              src={item.productUrl}
                              alt=""
                            />{" "}
                          </div>
                          <div>
                            {" "}
                            <p> {item.productName} </p>{" "}
                          </div>
                        </div>
                      </td>
                      <td> {item.productType} </td>
                      <td> {item.productQuantity} </td>
                      <td> {item.addedDate} </td>
                      <td>
                        {" "}
                        <button
                          onClick={() => handleUpdate(item._id)}
                          className="btn btn-xs"
                        >
                          update
                        </button>{" "}
                      </td>
                      <td>
                        {" "}
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-xs"
                        >
                          delete
                        </button>{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssestList;
