import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/corporate-solution.png";
import "./Navbar.css" ;
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink className={({isActive}) => isActive ? 'text-xl isActive' : 'text-xl notActive'} to="/"> Home </NavLink>
      <NavLink className={({isActive}) => isActive ? 'text-xl isActive' : 'text-xl notActive'} to="/join-employee"> Join As Employee </NavLink>
      <NavLink className={({isActive}) => isActive ? 'text-xl isActive' : 'text-xl notActive'} to="/join-manager"> Join As Manager </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
          <Link to='/'>
            <div className="flex text-xl leading-none">

            <img className="w-10 mr-2" src={logo} alt="" />
            Corporate <br /> Solution{" "}
            </div>
          </Link>{" "}
        </div>
      </div>
      <div className="navbar-end">
        <div className=" md:visible md:block hidden" >
        <ul className="menu menu-horizontal px-1"> {navLinks} </ul>
          </div>
        <div>
          <Link to='/login' >
          <button className="btn btn-outline text-xl font-normal "> Login</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
