import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="md:px-5 sticky top-0 mx-auto bg-textSec z-50">
        <Navbar> </Navbar>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Outlet> </Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
