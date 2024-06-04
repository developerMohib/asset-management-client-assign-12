import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto" >
      <Navbar> </Navbar>
      <div>
        <Outlet> </Outlet>
      </div>
    </div>
  );
};

export default Root;
