import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Nav from "../Component/Navbar/Nav";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto" >
      <Navbar> </Navbar>
      <Nav></Nav>
      <div>
        <Outlet> </Outlet>
      </div>
    </div>
  );
};

export default Root;
