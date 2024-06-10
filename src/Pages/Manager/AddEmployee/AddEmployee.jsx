import { Link } from "react-router-dom";
import useAllUser from "../../../Hooks/useAllUser";

const AddEmployee = () => {
  const { allUser } = useAllUser();
  return (
    <div>
      <h1>Hi i am Add Employee manager </h1>
      <p>Your Employee package limit {allUser.length} </p>
      <p> Do You incress your Employee packages </p>
      <Link to='/update/package'>
        <button className="btn btn-warning"> update </button>
      </Link>
    </div>
  );
};

export default AddEmployee;
