import useUser from "../../Hooks/useUser";
import useAllUser from "../../Hooks/useAllUser";
import Spinner from "../../Component/Spinner/Spinner";
import useAllEmployees from "../../Hooks/useAllEmployees";
import HelmetTitle from "../../Component/HelmetTitle/HelmetTitle";

const Admin = () => {
  const [allUser] = useAllUser();
  const { loginUser, isLoading } = useUser();
  const [allEmployees] = useAllEmployees();

  if (isLoading) return <Spinner></Spinner>;
  console.log("all employees", allEmployees);
  return (
    <div>
      <HelmetTitle routeName={"Admin"}></HelmetTitle>

      <div className="grid grid-cols-4 gap-5">
        <div className="grid-cols-1 bg-orange-200 h-screen ">
          <h1> Admin Dashboard </h1>
          <h1> Admin {loginUser.displayName} </h1>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-primary drawer-button"
              >
                Open drawer
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-3 mt-10">
          <div className="my-3 md:flex justify-around overflow-x-auto ">
            <p> Here total subscribers {allUser.length} </p>
            <p> My Team Member </p>
            <p>
              {" "}
              <b>Total</b> : {allUser.length}{" "}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {allUser?.map((user, idx) => (
                  <tr key={user._id}>
                    <th>
                      <label>
                        <span>{idx + 1}</span>
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={user?.userPhoto} alt="User Photo" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold"> {user?.name} </div>
                        </div>
                      </div>
                    </td>
                    <td>{user?.email}</td>
                    <td>{user?.status} </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">Remove</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
