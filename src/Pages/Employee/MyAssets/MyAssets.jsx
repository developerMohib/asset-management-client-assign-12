import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import Spinner from "../../../Component/Spinner/Spinner";
import useAuth from "../../../Hooks/useAuth";
import useRequAssets from "../../../Hooks/useRequAssets";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyAssets = () => {
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [requProducts, isLoading, refetch] = useRequAssets();

  // console.log(requProducts, "products my asses page");
  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }
  const handleCancel = async (id)=>{
    console.log('paici from cancel',id);
    try{
      const res = await axiosSecure.delete(`/requ-product/${id}`);
      console.log('Cancel response:', res.data);
      if(res.data.deletedCount > 0){
        toast.success('Your rquested product is deleted !');
        refetch();
      }
    }
    catch (err){
      //hello
    console.log('paici from cancel',err)
    }

  }
  const handlePrint = (id)=>{
    console.log('paici from cancel',id)
  }
  return (
    <div>
      <HelmetTitle routeName={"My Assets"}> </HelmetTitle>
      <div>
        <p> My requestwd products : {requProducts.length} </p>
      </div>
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
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {requProducts?.map((item) => (
              <tr key={item._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="hello" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> {item.assetName} </div>
                    </div>
                  </div>
                </td>
                <td> {item.assetType} </td>
                <td>{item.requestDate}</td>
                {/* Approval Date */}
                <td>
                  {" "}
                  {item.requestStatus === "pending"
                    ? "Not Approve yet"
                    : " date here "}{" "}
                </td>
                <td> {item.requestStatus} </td>
                {/*  */}
                <td>
                  {item.requestStatus === "pending" && (
                    <button onClick={ ()=> handleCancel(item._id)} className="btn btn-ghost btn-xs">Cancel</button>
                  )}
                  {item.requestStatus === "approved" && (
                    <button onClick={ ()=> handlePrint(item._id)} className="btn btn-ghost btn-xs">Print</button>
                  )}
                </td>
                {/* <td>
                  {item.requestStatus === 'pending' ? <button className="btn btn-ghost btn-xs"> Cancel </button> : <button className="btn btn-ghost btn-xs"> Print </button>}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssets;
