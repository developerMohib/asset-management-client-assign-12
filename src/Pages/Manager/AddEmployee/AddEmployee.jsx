import { Link } from "react-router-dom";
import useAllUser from "../../../Hooks/useAllUser";
import useUser from "../../../Hooks/useUser";

const AddEmployee = () => {
  const {loginUser} = useUser();
  const [allUser] = useAllUser();
  return (
    <div>
      <h1>Hello Business Manager <b className="capitalize"> {loginUser.name} </b> </h1>
      <p>Your Employee package limit {allUser.length} </p>
      <p> Do You incress your Employee packages </p>
      <Link to="/update/package">
        <button className="btn btn-warning my-2 "> Increase The Limit </button>
      </Link>
    </div>
  );
};

export default AddEmployee;
