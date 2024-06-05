import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/corporate-solution.png";
import "./Navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Tooltip } from "react-tooltip";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  console.log(user, "log in user");

  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-xl isActive" : "text-xl notActive"
        }
        to="/"
      >
        {" "}
        Home{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-xl isActive" : "text-xl notActive"
        }
        to="/join-employee"
      >
        {" "}
        Join As Employee{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-xl isActive" : "text-xl notActive"
        }
        to="/join-manager"
      >
        {" "}
        Join As Manager{" "}
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" mx-1 p-1 lg:hidden">
            <MenuIcon></MenuIcon>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          {" "}
          <Link to="/">
            <div className="flex text-xl leading-none">
              <img className="w-10 mr-2" src={logo} alt="" />
              <h1 className="font-extrabold">
                <span className="text-blue-600">CORPORATE</span>
                <br />
                SOLUTION
              </h1>
            </div>
          </Link>{" "}
        </div>
      </div>
      <div className="navbar-end">
        <div className=" md:visible md:block hidden">
          <ul className="menu menu-horizontal px-1"> {navLinks} </ul>
        </div>
        <div>
          <div className="flex">
            {user ? (
              <>
                <div className="flex">
                  <img
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName}
                    data-tooltip-place="left"
                    className="h-12 w-12 rounded-full mr-3"
                    src={user?.photoURL}
                    alt=""
                  />
                  <button
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Log Out"
                    data-tooltip-place="left"
                    className="btn btn-outline text-xl font-normal "
                  >
                    <AiOutlineLogout className="text-2xl"></AiOutlineLogout>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Link to="/login">
                    <button className="btn btn-outline text-xl font-normal ">
                      {" "}
                      Login
                    </button>{" "}
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
