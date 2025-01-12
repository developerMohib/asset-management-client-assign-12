import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import NotAffaliate from "../../../Component/NotAffaliate/NotAffaliate";
import useAllUser from "../../../Hooks/useAllUser";
import useUser from "../../../Hooks/useUser";

const MyTeam = () => {
  const {loginUser} = useUser();
  const [allUser] = useAllUser();

  if(loginUser.status !== 'employee'){
    return (<div>
      <NotAffaliate> </NotAffaliate>
    </div>)
  }
  return (
    <div>
      <HelmetTitle routeName={"My Team"}> </HelmetTitle>
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
              <th>Profile Picture</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allUser?.map((user) => (
              <tr key={user._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.userPhoto}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTeam;
