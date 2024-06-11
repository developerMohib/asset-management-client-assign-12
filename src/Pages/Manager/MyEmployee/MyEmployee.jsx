import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import useAllUser from "../../../Hooks/useAllUser";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../../Component/Spinner/Spinner";

const MyEmployee = () => {
  const [allUser, isLoading] = useAllUser();
  const { loading } = useAuth();

  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }
  // console.log('all user' ,  allUser)
  return (
    <div>
      <HelmetTitle routeName={"My Employee"}></HelmetTitle>
      <div className="my-3 flex justify-around overflow-x-auto ">
        <p> </p>
        <p> My Team Member </p>
        <p> Total : {allUser?.length} </p>
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
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allUser.map((user, idx) => (
              <tr key={user._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                    <span>{idx + 1}</span>
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.userPhoto} alt="User Photo" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> {user.name} </div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Remove</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEmployee;
