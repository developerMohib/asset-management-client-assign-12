import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useUser from "../../../Hooks/useUser";
import useEmployee from "../../../Hooks/useEmployee";
import Spinner from "../../../Component/Spinner/Spinner";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAllEmployees from "../../../Hooks/useAllEmployees";
import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";

const AddTeam = () => {
  const { loading } = useAuth();
  const {loginUser} = useUser();
  const [employee] = useEmployee();
  const axiosPublic = useAxiosPublic();
  // const [allUser, isLoading] = useAllUser();
  const [allEmployees, isLoading, ] = useAllEmployees();

  const employeesArray = employee[0]?.employeesArray || [];

  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }
  const member = employeesArray.length;
  
  const hanldeAddTeam = async (loginUser,user)=>{
    const managerId = loginUser?._id ;
    const employee = {
      employeeId : user._id ,
      employeeName: user.name ,
      employeeEmail : user.email,
      employeePhoto : user.userPhoto,
      employeeStatus : user.status,
    };
    try {
      const res = await axiosPublic.post('/teams', { managerId, employee });
  
      if(res.data.insertedId || res.data.managerId ){Swal.fire({
        position: "center",
        icon: "success",
        title: `Your employee ${user.name} has been added`,
        showConfirmButton: false,
        timer: 1500
      });}

    } catch (error) {
      if(error){Swal.fire({
      position: "center",
      icon: "error",
      title: "Oops... Failed to add employee to team",
      showConfirmButton: false,
      timer: 1500
    });}
    }
  };
  return (
    <div>
      <HelmetTitle routeName={"Add Team"}></HelmetTitle>
      <div className="my-3 md:flex justify-around overflow-x-auto ">
      <p> You can add employee only {loginUser.member} </p>
        <p> My Team Member </p>
        <p>
          {" "}
          <b>Total</b> : {allEmployees?.length}{" "}
        </p>
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
            {allEmployees.map((user) => (
              <tr key={user._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
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
                  <button disabled={member === loginUser.member}
                    onClick={() => hanldeAddTeam(loginUser, user)}
                    className="btn btn-ghost btn-xs"
                  >
                    Add to team
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddTeam;
