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
    return (
        <div>
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
                  {item.requestStatus === "pending" ? (
                    <button className="btn btn-ghost btn-xs"> Cancel </button>
                  ) : item.requestStatus === "approved" &&
                  item.assetType === "Returnable" ? (
                    <button
                      
                      className="btn btn-ghost btn-xs"
                      >
                      Return
                    </button>
                  ) : (
                    <button
                      
                      className="btn btn-ghost btn-xs"
                    >
                      Print
                    </button>)}
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