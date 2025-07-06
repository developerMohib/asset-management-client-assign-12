
import { useState } from "react";

// react icons
import { IoIosArrowDown, IoIosArrowUp, IoIosSearch } from "react-icons/io";
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

const ResponsiveNavbar = () => {
    const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false)
    const [mobileServiceOpen, setMobileServiceOpen] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [accountMenuOpen, setAccountMenuOpen] = useState(false)

    return (
        <nav className="flex items-center justify-between w-full relative h-auto">

            {/* logo */}
            <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-16" />


            {/* search option */}
            <div className="relative md:flex hidden">
                <input
                    className="py-1.5 pr-4  placeholder:text-textTer text-textSec border border-borderPri pl-10 rounded-full outline-none focus:border-primary"
                    placeholder="Search..." />
                <IoIosSearch
                    className="absolute top-2 left-3 text-textPri text-xl" />
            </div>

            {/* nav links */}
            <ul className="items-center gap-5 text-sm text-textPri md:flex hidden">
                <li className="transition-all duration-500 cursor-pointer hover:text-primary">home</li>

                {/* about us mega menu */}
                <li className="transition-all duration-500 cursor-pointer text-textPri hover:text-primary flex items-center gap-1 relative group">
                    about us
                    <MdKeyboardArrowDown
                        className="text-xl text-textPri group-hover:text-primary transition-all duration-500 group-hover:rotate-[180deg]" />

                    <article
                        className="absolute hidden group-hover:block shadow-md  p-6 rounded-md boxShadow w-[500px] z-[-1] top-full -left-full group-hover:translate-y-0 -translate-y-5 group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">

                        <div className="grid grid-cols-2">
                            <ul className="flex flex-col gap-2 text-textPri">
                                <li className="flex items-center gap-2 text-textPri hover:text-primary transition-all duration-300">
                                    <BsArrowRight className=" text-sm" /> Company
                                    Details
                                </li>
                                <li className="flex items-center gap-2 text-textPri hover:text-primary transition-all duration-300">
                                    <BsArrowRight className=" text-sm" />Company
                                    Location
                                </li>
                                <li className="flex items-center gap-2 text-textPri hover:text-primary transition-all duration-300">
                                    <BsArrowRight className=" text-sm" />Team
                                    Members
                                </li>
                                <li className="flex items-center gap-2 text-textPri hover:text-primary transition-all duration-300">
                                    <BsArrowRight className=" text-sm" /> Office
                                    Tour
                                </li>
                            </ul>

                            <div
                                className="flex flex-col gap-2 border-l border-borderPri pl-7">
                                <div
                                    className="flex items-center gap-2 text-sm text-textPri">
                                    <MdDashboardCustomize
                                        className="bg-blue-200 text-textPri p-1.5 rounded-full text-[2rem]" />
                                    Full Customize
                                </div>

                                <div
                                    className="flex items-center gap-2 text-sm text-textPri">
                                    <CgIfDesign
                                        className="bg-textSec text-bgSec p-1.5 rounded-full text-3xl" />
                                    Modern Design
                                </div>

                                <div
                                    className="flex items-center gap-2 text-sm text-textPri">
                                    <FaCubesStacked
                                        className="bg-textSec text-textPri p-1.5 rounded-full text-[2rem]" />
                                    Well Stacktured
                                </div>
                            </div>
                        </div>

                        <img src="https://i.ibb.co/YRgsrsh/AD22-04.png" alt="image"
                            className="w-full object-cover mt-4 rounded-sm h-[150px]" />
                    </article>
                </li>

                {/* service mega menu */}
                <li className="transition-all duration-500 cursor-pointer text-textPri hover:text-primary flex items-center gap-1 relative group">
                    Services
                    <MdKeyboardArrowDown
                        className="text-xl text-textPri group-hover:text-primary transition-all duration-500 group-hover:rotate-[180deg]" />

                    <article
                        className="absolute hidden group-hover:block bg-white shadow-md  p-6 rounded-md boxShadow w-[500px] z-[-1] top-full -left-full dark:bg-slate-800 group-hover:translate-y-0 -translate-y-5 group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">

                        <div className="grid grid-cols-2">
                            <ul className="flex flex-col gap-2 text-textPri">
                                <li className="flex items-center gap-2 text-textPri hover:text-primary transition-all duration-300">
                                    <BsArrowRight className=" text-sm" /> Company
                                    Details
                                </li>
                                <li className="flex items-center gap-2 text-textPri hover:text-primary transition-all duration-300">
                                    <BsArrowRight className="text-textPri text-sm" />Company
                                    Location
                                </li>
                                <li className="flex items-center gap-2 text-textPri hover:text-primary transition-all duration-300">
                                    <BsArrowRight className="text-textPri text-sm" />Team
                                    Members
                                </li>
                                <li className="flex items-center gap-2 text-textPri hover:text-primary transition-all duration-300">
                                    <BsArrowRight className=" text-sm" /> Office
                                    Tour
                                </li>
                            </ul>

                            <div
                                className="flex flex-col gap-2 dark:border-slate-700 border-l border-[#e5eaf2] pl-[30px]">
                                <div
                                    className="flex items-center gap-2 text-sm text-textPri">
                                    <MdDashboardCustomize
                                        className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                                    Full Customize
                                </div>

                                <div
                                    className="flex items-center gap-2 text-textPri text-sm">
                                    <CgIfDesign
                                        className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                                    Modern Design
                                </div>

                                <div
                                    className="flex items-center gap-2 text-sm text-textPri">
                                    <FaCubesStacked
                                        className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                                    Well Stacktured
                                </div>
                            </div>
                        </div>

                        <img src="https://i.ibb.co/YRgsrsh/AD22-04.png" alt="image"
                            className="w-full object-cover mt-4 rounded-sm h-[150px]" />
                    </article>
                </li>

            </ul>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-[15px]">
                    <div className="flex items-center gap-2 cursor-pointer relative"
                        onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
                        <div className="relative">
                            <img
                                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
                                alt="avatar" className="w-[35px] h-[35px] rounded-full object-cover" />
                            <div
                                className="w-[10px] h-[10px] rounded-full bg-btnHover absolute bottom-[0px] right-0 border-2 border-borderPri"></div>
                        </div>

                        <h1 className="text-sm text-textPri sm:block hidden">Dhon
                            Deo</h1>

                        <div
                            className={`${accountMenuOpen ? "translate-y-0 opacity-100 z-[1]" : "translate-y-[10px] opacity-0 z-[-1]"} bg-white w-max rounded-md absolute dark:bg-slate-800 top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-2`}>
                            <p className="flex items-center gap-2 rounded-md p-2 pr-[45px] py-[3px] text-sm text-textPri dark:hover:bg-slate-900/50 hover:bg-gray-50">
                                <FiUser />
                                View Profile
                            </p>
                            <p className="flex items-center gap-2 rounded-md p-2 pr-[45px] py-[3px] text-sm dark:hover:bg-slate-900/50 text-textPri hover:bg-gray-50">
                                <IoSettingsOutline />
                                Settings
                            </p>
                            <p className="flex items-center gap-2 rounded-md p-2 pr-[45px] py-[3px] text-sm dark:hover:bg-slate-900/50 text-textPri hover:bg-gray-50">
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

                        <IoIosArrowUp
                            className={`${accountMenuOpen ? "rotate-0" : "rotate-[180deg]"} transition-all duration-300 text-textPri sm:block hidden`} />

                    </div>

                    <CiMenuFries onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                        className="text-[1.8rem] c cursor-pointer md:hidden flex" />
                </div>



            </div>

            {/* mobile sidebar */}
            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden boxShadow p-4 text-center absolute bg-bgPri top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}>
                <ul className="items-start gap-5 text-sm text-textPri flex flex-col">

                    <li className="hover:text-primary text-textPri group transition-all duration-500 cursor-pointer flex items-center gap-2">
                        Home
                    </li>

                    <li onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
                        className="hover:text-primary group text-textPri transition-all duration-500 cursor-pointer flex items-center gap-2">
                        About Us
                        <IoIosArrowDown
                            className={`${mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"} text-textPri group-hover:text-primary transition-all duration-300`} />
                    </li>

                    {/* about us mega menu */}
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
                                Full Customize
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


                    <li onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                        className="hover:text-primary group text-textPri transition-all duration-500 cursor-pointer flex items-center gap-2">
                        Service
                        <IoIosArrowDown
                            className={`${mobileServiceOpen ? "rotate-0" : "rotate-[180deg]"} text-textPri group-hover:text-primary transition-all duration-300`} />
                    </li>

                    {/* service mega menu */}
           


                </ul>
            </aside>
        </nav>
    );
};

export default ResponsiveNavbar;
