import "./Navbar.css";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "../../assets/corporate-solution.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ThemeController from "../themeController/ThemeController";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [loginUser, setLoginUser] = useState({});
  const email = user?.email;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // fetch data
        const res = await fetch(`http://localhost:9000/users/${email}`);
        if (!res.ok) {
          // Handle HTTP errors
          console.log(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setLoginUser(data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
    if (email) {
      fetchUser();
    }
  }, [email]);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("log out successfully");
      // window.location.reload()
      navigate("/", { replace: true });
    });
  };
  const employeeNav = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-xl isActive" : "text-xl notActive"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg isActive" : "text-lg notActive"
        }
        to="/my-assets"
      >
        My Asset
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg isActive" : "text-lg notActive"
        }
        to="/request-assets"
      >
        Request Assets
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg isActive" : "text-lg notActive"
        }
        to="/my-team"
      >
        My Team
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg isActive" : "text-lg notActive"
        }
        to="/profile"
      >
        My Profile
      </NavLink>
    </>
  );

  const managerNav = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg isActive" : "text-lg notActive"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg isActive" : "text-lg notActive"
        }
        to="/add-asset"
      >
        Add Asset
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg isActive" : "text-lg notActive"
        }
        to="/add-employee"
      >
        Add Employee
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg isActive" : "text-lg notActive"
        }
        to="/all-request"
      >
        All Requests
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg isActive" : "text-lg notActive"
        }
        to="/asset-list"
      >
        All Asset
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg isActive" : "text-lg notActive"
        }
        to="/my-employee"
      >
        My Employee
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg isActive" : "text-lg notActive"
        }
        to="/profile"
      >
        Profile
      </NavLink>
    </>
  );

  const normalNav = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-xl isActive" : "text-xl notActive"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg isActive" : "text-lg notActive"
        }
        to="/join-employee"
      >
        Join As Employee
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg isActive" : "text-lg notActive"
        }
        to="/join-manager"
      >
        Join As Manager
      </NavLink>
    </>
  );
  const navLinks = (
    <>
      {user
        ? loginUser?.status === "manager"
          ? managerNav
          : loginUser?.status === "employee"
          ? employeeNav
          : employeeNav
        : normalNav}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            onClick={() => setOpen(!open)}
            tabIndex={0}
            role="button"
            className=" mx-1 p-1 lg:hidden"
          >
            {open === true ? (
              <RestaurantMenuIcon/>
            ) : (
              <MenuIcon/>
            )}
          </div>
          {open && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {" "}
              {navLinks}
            </ul>
          )}
        </div>
        <div>
          {" "}
          <Link to="/">
            <div className="flex md:text-xl leading-none items-center">
              {user && loginUser ? (
                <img className="w-10 mr-2" src={loginUser.companyLogo} alt="" />
              ) : (
                <img className="w-10 mr-2" src={logo} alt="logo" />
              )}
              <h1 className="font-extrabold">
                <span className="text-primary">CORPORATE</span>
                <br />
                SOLUTION
              </h1>
            </div>
          </Link>{" "}
        </div>
      </div>
      <div className="navbar-end md:w-[105%]">
        <div className=" md:visible md:block hidden">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
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
                    onClick={handleLogOut}
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
      <ThemeController />
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
