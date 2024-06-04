import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Root = () => {
  return (
    <div >
      <div className="px-5">
      <Navbar> </Navbar>
      </div>
      <div className="max-w-screen-xl mx-auto" >
        <Outlet> </Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
