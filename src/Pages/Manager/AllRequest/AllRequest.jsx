import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Search from "../../../Component/Search/Search";
import Spinner from "../../../Component/Spinner/Spinner";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";

const AllRequest = () => {
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: requestedProduct = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/requ-products`);
      return res.data;
    },
  });
  console.log("request data", requestedProduct);
  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <HelmetTitle routeName={"All Requests"}></HelmetTitle>
      <div className="my-10">
        <label htmlFor="">Search Here by Name </label>
        <Search></Search>
      </div>
      <div>
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
              {requestedProduct.map((item, idx) => (
                <tr key={item._id} className="hover:bg-slate-100">
                  <th> {idx + 1} </th>
                  <td> {item.assetName} </td>
                  <td> {item.requesterName} </td>
                  <td> {item.requesterEmail} </td>
                  <td>{item.additionalNote}</td>
                  <td> {item.requestDate} </td>
                  <td> {item.assetType} </td>
                  <td> {item.requestStatus} </td>
                  <td>
                    <button className="mx-1 btn-outline btn-xs btn  ">
                      AC
                    </button>
                    <button className="mx-1 btn-outline btn-xs btn  ">
                      DC
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllRequest;
