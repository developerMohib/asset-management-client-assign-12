import toast from "react-hot-toast";
import Spinner from "../../../../Component/Spinner/Spinner";
import useAllRequestProducts from "../../../../Hooks/useAllRequestProducts";
import useAuth from "../../../../Hooks/useAuth";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import DoneIcon from "@mui/icons-material/Done";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const HrPending = () => {
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [requestedProduct, isLoading,refetch] = useAllRequestProducts();

  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }
  const pendingProd = requestedProduct.filter(
    (item) => item.requestStatus === "pending"
  );
  const limitedPendingProd = pendingProd.slice(0, 5);
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
        toast.success("id paici");
        axiosSecure.patch(`/requ-product/${id}`).then((res) => {
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
        <h1 className="font-semibold text-center my-5">Products request is pending max 5 </h1>
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
              {limitedPendingProd.map((item, idx) => (
                <tr key={item._id} className="hover:bg-slate-50">
                  <th> {idx + 1} </th>
                  <td> {item.assetName} </td>
                  <td> {item.requesterName} </td>
                  <td> {item.requesterEmail} </td>
                  <td> {item.additionalNote} </td>
                  <td> {item.requestDate} </td>
                  <td> {item.assetType} </td>
                  <td> {item.requestStatus} </td>
                  <td>
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
                      className={`mx-1 p-1 border rounded-2xl ${
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
    </div>
  );
};

export default HrPending;
