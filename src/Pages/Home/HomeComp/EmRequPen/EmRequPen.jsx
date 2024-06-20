import Spinner from "../../../../Component/Spinner/Spinner";
import useAuth from "../../../../Hooks/useAuth";
import useRequAssets from "../../../../Hooks/useRequAssets";

const EmRequPen = () => {
  const { loading } = useAuth();
  const [requProducts, isLoading] = useRequAssets();

  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }
  if (requProducts < 0) {
    return (
      <p className="flex min-h-screen justify-center items-center">
        {" "}
        Please request for asset{" "}
      </p>
    );
  }

  // only pending product are here
  const pendingProd = requProducts.filter(
    (item) => item.requestStatus === "pending"
  );

  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="font-semibold text-center my-5">My request pending products </h1>
        <table className="table my-5">
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
            {pendingProd?.map((item) => (
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
                    : " date here "}{" "}
                </td>
                <td> {item.requestStatus} </td>
                {/*  */}
                <td>
                  {item.requestStatus === "pending" ? (
                    <button className="btn btn-ghost btn-xs"> Cancel </button>
                  ) : item.requestStatus === "approved" &&
                    item.assetType === "Returnable" ? (
                    <button className="btn btn-ghost btn-xs">Return</button>
                  ) : (
                    <button className="btn btn-ghost btn-xs">Print</button>
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

export default EmRequPen;
