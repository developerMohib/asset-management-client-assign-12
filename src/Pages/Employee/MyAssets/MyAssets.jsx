import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import Spinner from "../../../Component/Spinner/Spinner";
import useAuth from "../../../Hooks/useAuth";
import useRequAssets from "../../../Hooks/useRequAssets";

const MyAssets = () => {
  const {loading} = useAuth();
  const [requProducts, isLoading] = useRequAssets();

  console.log(requProducts, "products my asses page");
  if(loading || isLoading){
    return <Spinner></Spinner>
  }
  return (
    <div>
      <HelmetTitle routeName={"My Assets"}> </HelmetTitle>
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
                        <img
                          src={item.productUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> {item.productName} </div>
                    </div>
                  </div>
                </td>
                <td>{item.productType} </td>
                <td>Purple</td>
                <td>Purple 2</td>
                <td>Request Status</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssets;
