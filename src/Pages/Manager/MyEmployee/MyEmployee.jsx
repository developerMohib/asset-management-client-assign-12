import HelmetTitle from "../../../Component/HelmetTitle/HelmetTitle";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../../Component/Spinner/Spinner";
import useEmployee from "../../../Hooks/useEmployee";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";

const MyEmployee = () => {
  const { loading } = useAuth();
  const {loginUser} = useUser();
  const axiosPublic = useAxiosPublic();
  const [employee, isLoading, refetch] = useEmployee();

  const employeesArray = employee[0]?.employeesArray || [];
  const teamId = employee[0]?._id ;

  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }
  const handleRemove = async (teamId, employees, employeeId) => {
    const res = await axiosPublic.delete(`/teams/${teamId}/employees/${employeeId}`);
    console.log(res.data)
    if(res.data.modifiedCount){
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Your employee has been deleted`,
        showConfirmButton: false,
        timer: 1500
      });
    }
    refetch()
  };
  return (
    <div>
      <HelmetTitle routeName={"My Employee"}></HelmetTitle>
      <div className="my-3 md:flex justify-around overflow-x-auto ">
        <p> You can add employee only {loginUser.member} </p>
        <p> My Team Member </p>
        <p>
          {" "}
          <b>Total</b> : {employeesArray?.length}{" "}
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
            {employeesArray.map((user, idx) => (
              <tr key={user.employeeId}>
                <th>
                  <label>
                    <span>{idx + 1}</span>
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.employeePhoto} alt="User Photo" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> {user.employeeName} </div>
                    </div>
                  </div>
                </td>
                <td>{user.employeeEmail}</td>
                <td>{user.employeeStatus} </td>
                <th>
                  <button
                    onClick={() => handleRemove(teamId, employeesArray, user.employeeId)}
                    className="btn btn-ghost btn-xs"
                  >
                    Remove
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

export default MyEmployee;
