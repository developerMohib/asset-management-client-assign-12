import MenuIcon from "@mui/icons-material/Menu";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import logo from "../../assets/corporate-solution.png";
import "./Navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Tooltip } from "react-tooltip";
import { AiOutlineLogout } from "react-icons/ai";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user,logOut } = useAuth();
  const axiosPublic = useAxiosPublic() ;

  const {query} = useQuery({
    queryKey:['user'],
    queryFn: async () => {
      const res = axiosPublic.get('/users')
      return res.data
    }
  })
  console.log(query)
  console.log('status', user?.status)
  
  const handleLogOut = () =>{
    logOut()
    .then(() => {
      toast.success('log out successfully')
    })
  }

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
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div onClick={() => setOpen(!open)} tabIndex={0} role="button" className=" mx-1 p-1 lg:hidden">
            {
              open === true ? <RestaurantMenuIcon></RestaurantMenuIcon> : <MenuIcon></MenuIcon>
            }
          </div>
          {
            open && <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
          }
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
                  <button onClick={handleLogOut}
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
