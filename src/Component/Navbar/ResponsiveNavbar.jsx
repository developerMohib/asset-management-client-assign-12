
import { useState } from "react";

// react icons
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import {
    MdDashboardCustomize,
    MdKeyboardArrowDown,
} from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/corporate-solution.png";
import { Link, NavLink } from "react-router-dom";

const ResponsiveNavbar = () => {
    const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [accountMenuOpen, setAccountMenuOpen] = useState(false)
    const [logUser,] = useState(false)


    const navLinks = [
        { name: "Products", path: "/products" },
        { name: "New Arrival", path: "/new-arrival" },
        { name: "Sustainability", path: "/sustainability" },
        { name: "About Us", path: "/about-us" },
        { name: "Contact Us", path: "/contact-us" },
    ];



    return (
        <nav className="flex items-center justify-between w-full relative h-auto px-5 bg-white">

            {/* logo*/}
            <Link to="/" ><img src={logo || 'https://i.ibb.co/0BZfPq6/darklogo.png'} alt="logo" className="w-16" /> </Link>

            {/* search option */}
            <div className="relative md:flex hidden">
                <input
                    className="py-1.5 pr-4 placeholder:text-textTer text-myBlack border border-borderPri pl-10 rounded-full outline-none focus:border-primary"
                    placeholder="Search..." />
                <IoIosSearch
                    className="absolute top-2 left-3 text-textPri text-xl" />
            </div>

            {/* nav links */}
            <ul className="items-center gap-5 text-sm md:flex hidden">
                <li className="transition-all duration-500 cursor-pointer text-myBlack hover:border-b hover:border-myGreen pb-1 font-semibold text-base">
                    <Link to='/'>Home</Link>
                </li>

                {/* Category mega menu */}
                <li className="transition-all duration-500 cursor-pointer text-myBlack hover:text-myGreen flex font-semibold text-base items-center gap-1 relative group">
                    Categories
                    <MdKeyboardArrowDown
                        className="text-xl text-textPri group-hover:text-primary transition-all duration-500 group-hover:rotate-[180deg]" />

                    <article
                        className="absolute hidden group-hover:block shadow-md  p-6 rounded-md boxShadow w-[500px] z-[-1] top-full -left-full group-hover:translate-y-0 -translate-y-5 group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">

                        <div className="grid grid-cols-2">
                            <ul className="flex flex-col gap-2 text-textPri">
                                <li className="flex items-center gap-2 text-textPri hover:text-myRed transition-all duration-300 hover:translate-x-1">
                                    <BsArrowRight className=" text-sm" /> Company
                                    Details
                                </li>
                                <li className="flex items-center gap-2 text-textPri hover:text-myRed transition-all duration-300 hover:translate-x-1">
                                    <BsArrowRight className=" text-sm" />Company
                                    Location
                                </li>
                                <li className="flex items-center gap-2 text-textPri hover:text-myRed transition-all duration-300 hover:translate-x-1">
                                    <BsArrowRight className=" text-sm" />Team
                                    Members
                                </li>
                                <li className="flex items-center gap-2 text-textPri hover:text-myRed transition-all duration-300 hover:translate-x-1">
                                    <BsArrowRight className=" text-sm" /> Office
                                    Tour
                                </li>
                            </ul>

                            <div
                                className="flex flex-col gap-2 border-l border-borderPri pl-7">
                                <div
                                    className="flex items-center gap-2 text-sm text-textPri">

                                    <li className="flex items-center gap-2 text-textPri hover:text-myRed transition-all duration-300 hover:translate-x-1">
                                        <MdDashboardCustomize className="bg-textSec text-textPri p-1.5 rounded-full text-[2rem]" /> <Link to="/full-customize">Full Customize</Link>
                                    </li>
                                </div>

                                <div
                                    className="flex items-center gap-2 text-sm text-textPri">
                                    <li className="flex items-center gap-2 text-textPri hover:text-myRed transition-all duration-300 hover:translate-x-1">
                                        <CgIfDesign className="bg-textSec text-textPri p-1.5 rounded-full text-[2rem]" /> <Link to="/modern-design" >Modern Design</Link>
                                    </li>
                                </div>

                                <div
                                    className="flex items-center gap-2 text-sm text-textPri">
                                    <li className="flex items-center gap-2 text-textPri hover:text-myRed transition-all duration-300 hover:translate-x-1">
                                        <FaCubesStacked className="bg-textSec text-textPri p-1.5 rounded-full text-[2rem]" /> <Link to="/well-stacktured" >Well Stacktured</Link>
                                    </li>

                                </div>
                            </div>
                        </div>

                        <img src="https://i.ibb.co/YRgsrsh/AD22-04.png" alt="image"
                            className="w-full object-cover mt-4 rounded-sm h-[150px]" />
                    </article>
                </li>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                `transition-all duration-500 cursor-pointer text-myBlack pb-1 text-base font-semibold
          ${isActive ? 'border-b border-myGreen' : 'hover:border-b hover:border-myGreen'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>


            <div className="flex items-center gap-2">
                <div className="flex items-center gap-[15px]">

                    {/* Login user */}

                    {
                        logUser ? (<div className="flex items-center gap-2 cursor-pointer relative"
                            onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
                            <div className="relative">
                                <img
                                    src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
                                    alt="avatar" className="w-[35px] h-[35px] rounded-full border-4 border-red-400 object-cover" />

                            </div>
                            <div
                                className={`${accountMenuOpen ? "translate-y-0 opacity-100 z-[1]" : "translate-y-[10px] opacity-0 z-[-1]"} bg-gray-200 w-max rounded-md absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-2`}>
                                <p className="flex items-center gap-2 rounded-md p-2 pr-[45px] py-[3px] text-sm text-textPri  hover:bg-myGreen">
                                    <FiUser />
                                    View Profile
                                </p>
                                <p className="flex items-center gap-2 rounded-md p-2 pr-[45px] py-[3px] text-sm  text-textPri hover:bg-myGreen">
                                    <IoSettingsOutline />
                                    Settings
                                </p>
                                <p className="flex items-center gap-2 rounded-md p-2 pr-[45px] py-[3px] text-sm  text-textPri hover:bg-myGreen">
                                    <FiUser />
                                    View Profile
                                </p>

                                <div className="mt-3 border-t dark:border-slate-700 border-gray-200 pt-[5px]">
                                    <p className="flex items-center gap-2 rounded-md p-2 pr-[45px] py-[3px] text-sm dark:text-red-500 dark:hover:bg-red-500/20 text-red-500 hover:bg-red-50">
                                        <TbLogout2 />
                                        Logout
                                    </p>
                                </div>
                            </div>

                        </div>) : (<div className="flex items-center gap-2 cursor-pointer relative hover:bg-green-300 p-1 rounded-md"
                            onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
                            <div className="relative items-center flex gap-x-2">
                                <FiUser className="text-base font-semibold" /> <p className="text-base font-semibold">Log in</p>
                            </div>
                            <div
                                className={`${accountMenuOpen ? "translate-y-0 opacity-100 z-[1]" : "translate-y-[10px] opacity-0 z-[-1]"} bg-gray-200 w-max rounded-md absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-2`}>
                                <p className="flex items-center gap-2 rounded-md p-2 pr-[45px] py-[3px] text-sm text-textPri  hover:bg-myGreen">
                                    <FiUser />
                                    Login
                                </p>
                                <p className="flex items-center gap-2 rounded-md p-2 pr-[45px] py-[3px] text-sm  text-textPri hover:bg-myGreen">
                                    <IoSettingsOutline />
                                    Employee Login
                                </p>
                                <p className="flex items-center gap-2 rounded-md p-2 pr-[45px] py-[3px] text-sm  text-textPri hover:bg-myGreen">
                                    <FiUser />
                                    Manager Login
                                </p>

                                <div className="mt-3 border-t dark:border-slate-700 border-gray-200 pt-[5px]">
                                    <p className="flex items-center gap-2 rounded-md p-2 pr-[45px] py-[3px] text-sm dark:text-red-500 dark:hover:bg-red-500/20 text-red-500 hover:bg-red-50">
                                        <TbLogout2 />
                                        Boss Login
                                    </p>
                                </div>
                            </div>

                        </div>)
                    }
                    {/* Menu bar show icon */}
                    {
                        mobileSidebarOpen ? <RxCross1 onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                            className="text-[1.8rem] transition-all c cursor-pointer md:hidden flex" /> : <CiMenuFries onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                                className="text-[1.8rem] transition-all c cursor-pointer md:hidden flex" />
                    }



                </div>
            </div>


            {/* mobile sidebar */}
            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden boxShadow p-4 text-center absolute bg-red-300 top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}>
                <ul className="items-start gap-5 text-sm text-textPri flex flex-col">

                    <li className="transition-all duration-500 cursor-pointer text-myBlack hover:border-b hover:border-myGreen pb-1 font-semibold text-base">
                        Home
                    </li>

                    <li onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
                        className="hover:text-primary group text-myBlack transition-all duration-500 cursor-pointer flex items-center gap-2 font-semibold text-base">
                        Categories
                        <IoIosArrowDown
                            className={`${mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"} text-textPri group-hover:text-primary transition-all duration-300`} />
                    </li>
                    {/* about us mega menu for mobile*/}
                    <div className={`${mobileAboutUsOpen ? "block" : "hidden"} group font-[500] ml-6`}>

                        <ul className="flex flex-col gap-2 text-textPri">
                            <li className="flex items-center text-textPri gap-2 hover:text-primary transition-all duration-300">
                                <BsArrowRight className=" text-sm" /> Company
                                Details
                            </li>
                            <li className="flex items-center text-textPri gap-2 hover:text-primary transition-all duration-300">
                                <BsArrowRight className=" text-sm" />Company
                                Location
                            </li>
                            <li className="flex items-center text-textPri gap-2 hover:text-primary transition-all duration-300">
                                <BsArrowRight className=" text-sm" />Team Members
                            </li>
                            <li className="flex items-center text-textPri gap-2 hover:text-primary transition-all duration-300">
                                <BsArrowRight className=" text-sm" /> Office Tour
                            </li>
                        </ul>

                        <div
                            className="flex flex-col gap-2 mt-4">
                            <div
                                className="flex items-center gap-2 text-sm text-textPri">
                                <MdDashboardCustomize
                                    className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                                <li className="flex items-center text-textPri gap-2 hover:text-primary transition-all duration-300">
                                    <MdDashboardCustomize className=" text-sm" />Full Customize
                                </li>
                            </div>

                            <div
                                className="flex items-center gap-2 text-sm text-textPri">
                                <CgIfDesign
                                    className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                                Modern Design
                            </div>

                            <div
                                className="flex items-center text-textPri gap-2 text-sm">
                                <FaCubesStacked
                                    className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                                Well Stacktured
                            </div>
                        </div>
                    </div>

                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `transition-all duration-500 cursor-pointer text-myBlack pb-1 text-base font-semibold
          ${isActive ? 'border-b border-myGreen' : 'hover:border-b hover:border-myGreen'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
        </nav>
    );
};

export default ResponsiveNavbar;
