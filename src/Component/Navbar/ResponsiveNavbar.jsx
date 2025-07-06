import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/corporate-solution.png";
import { Link, NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";

const ResponsiveNavbar = () => {
    const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [accountMenuOpen, setAccountMenuOpen] = useState(false);
    const [logUser] = useState(true);
    const accountMenuRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const userRole = "guest";

    const getDashboardLink = (role) => {
        if (role === "admin") return "/admin-dashboard";
        if (role === "manager") return "/manager-dashboard";
        if (role === "employee") return "/employee-dashboard";
        return "/dashboard";
    }


    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
                setAccountMenuOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-menu-button')) {
                setMobileSidebarOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navLinks = [
        { name: "Products", path: "/products" },
        { name: "New Arrival", path: "/new-arrival" },
        { name: "Sustainability", path: "/sustainability" },
        { name: "About Us", path: "/about-us" },
        { name: "Contact Us", path: "/contact-us" },
    ];

    return (
        <nav className="flex items-center justify-between w-full h-auto px-4 py-3 bg-myWhite shadow-sm relative z-50">
            {/* Logo */}
            <Link to="/">
                <img
                    src={logo || 'https://i.ibb.co/0BZfPq6/darklogo.png'}
                    alt="logo"
                    className="w-10 h-10 object-contain"
                />
            </Link>

            {/* Search option - hidden on small screens */}
            <div className="relative md:flex flex-1 max-w-md mx-4">
                <input
                    className="w-full py-2 pr-4 placeholder:text-placeholder text-textPri border border-borderPri pl-10 rounded-full outline-none focus:border-myGreen focus:ring-1 focus:ring-green-200 transition-all"
                    placeholder="Search..."
                />
                <IoIosSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-textTer text-xl" />
            </div>

            {/* Desktop Navigation */}
            <ul className="items-center gap-5 text-sm hidden md:flex mr-3">
                <li className="hover:border-b hover:border-myGreen transition-colors pb-1 ">
                    <Link to='/' className="font-medium text-textPri hover:text-myGreen">
                        Home
                    </Link>
                </li>

                {/* Category mega menu */}
                <li className="relative group">
                    <div className="flex items-center gap-1 cursor-pointer font-medium text-textPri hover:text-myGreen">
                        Categories
                        <MdKeyboardArrowDown className="text-xl text-textTer group-hover:text-myGreen transition-transform group-hover:rotate-180" />
                    </div>

                    <div className="absolute hidden group-hover:block left-1/2 transform -translate-x-1/2 top-full w-96 bg-myWhite rounded-lg shadow-xl border border-borderPri z-30 p-4">
                        <div className="grid grid-cols-2 gap-4">
                            <ul className="space-y-2">
                                {['Company Details', 'Company Location', 'Team Members', 'Office Tour'].map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to="/"
                                            className="flex items-center gap-2 text-textPri hover:text-myGreen hover:translate-x-1 duration-150 transition-colors"
                                        >
                                            <BsArrowRight className="text-sm" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="space-y-4 border-l border-borderTer pl-4">
                                {[
                                    { icon: <MdDashboardCustomize className="bg-borderTer text-textPri p-1.5 rounded-full text-3xl" />, text: "Full Customize", link: "/" },
                                    { icon: <CgIfDesign className="bg-borderTer text-textPri p-1.5 rounded-full text-3xl" />, text: "Modern Design", link: "/" },
                                    { icon: <FaCubesStacked className="bg-borderTer text-textPri p-1.5 rounded-full text-3xl" />, text: "Well Stacktured", link: "/" }
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.link}
                                        className="flex items-center gap-3 text-textPri hover:text-myGreen duration-150 hover:translate-x-1 transition-colors"
                                    >
                                        {item.icon}
                                        {item.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <img
                            src="https://i.ibb.co/YRgsrsh/AD22-04.png"
                            alt="Corporate solution"
                            className="w-full h-32 object-cover mt-4 rounded"
                        />
                    </div>
                </li>

                {navLinks.map((link) => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                `font-medium ${isActive ? 'text-myGreen border-b-2 border-myGreen' : 'text-textPri hover:text-myGreen hover:border-myGreen hover:border-b'} pb-1`
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* User/Auth Section */}
            <div className="flex items-center gap-4">

                {/* wish list option - hidden on big screens */}
                <div className="relative flex justify-center max-w-md mx-4">
                    <Link to="/wish-list"><CiHeart className="absolute top-1/2 -left-1 transform -translate-y-1/2 text-gray-500 text-3xl mr-3 hover:text-myGreen" /></Link>
                </div>

                {logUser ? (
                    <div ref={accountMenuRef} className="relative">
                        <button
                            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                            className="flex items-center gap-2 focus:outline-none"
                            aria-expanded={accountMenuOpen}
                            aria-label="User menu"
                        >
                            <img
                                src="https://i.ibb.co/0BZfPq6/darklogo.png"
                                alt="User avatar"
                                className="w-9 h-9 rounded-full border-2 border-myGreen object-cover"
                            />
                        </button>

                        {/* {accountMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-myWhite rounded-md shadow-lg py-1 z-50 border border-borderTer">
                                {[
                                    { icon: <TbLayoutDashboard />, text: "Dashboard", link: "/dashboard" },
                                    { icon: <FiUser />, text: "View Profile", link: "/view-profile" },
                                    { icon: <IoSettingsOutline />, text: "Settings", link: "/settings" },
                                    { icon: <MdManageAccounts />, text: "Manage Profile", link: "/manage-profile" }
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.link}
                                        className="flex items-center px-4 py-2 text-sm text-textPri hover:bg-green-50 hover:text-myGreen"
                                    >
                                        <span className="mr-2">{item.icon}</span>
                                        {item.text}
                                    </Link>
                                ))}
                                <div className="border-t border-borderTer my-1"></div>
                                <button
                                    className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-red-50 w-full"
                                >
                                    <span className="mr-2"><TbLogout2 /></span>
                                    Logout
                                </button>
                            </div>
                        )} */}


                        {accountMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-myWhite rounded-md shadow-lg py-1 z-50 border border-borderTer">

                                {/* ROLE-BASED DASHBOARD */}
                                {userRole !== "guest" && (
                                    <>
                                    <div className="mx-auto text-center py-2 border-b border-borderPri">
                                        <h1 className="font-semibold"> User Email </h1>
                                    </div>
                                        <Link
                                            to={getDashboardLink(userRole)}
                                            className="flex items-center px-4 py-2 text-sm text-textPri hover:bg-green-50 hover:text-myGreen"
                                        >
                                            <span className="mr-2"><TbLayoutDashboard /></span> Dashboard
                                        </Link>
                                        <Link
                                            to={getDashboardLink(userRole)} className="flex items-center px-4 py-2 text-sm text-textPri hover:bg-green-50 hover:text-myGreen">
                                            <span className="mr-2"><FiUser /></span> View Profile
                                        </Link>
                                        <Link
                                            to={getDashboardLink(userRole)} className="flex items-center px-4 py-2 text-sm text-textPri hover:bg-green-50 hover:text-myGreen">
                                            <span className="mr-2"><IoSettingsOutline /></span> Settings
                                        </Link>
                                        {userRole === "admin" && (<Link to={getDashboardLink(userRole)} className="flex items-center px-4 py-2 text-sm text-textPri hover:bg-green-50 hover:text-myGreen">
                                            <span className="mr-2"><MdManageAccounts /></span> Manage Profile
                                        </Link>)}
                                    </>
                                )}

                                {/* GUEST MENU */}
                                {userRole === "guest" && (
                                    <>
                                    
                                    <div className="mx-auto text-center py-2 border-b border-borderPri">
                                        <h1 className="font-semibold"> User Email </h1>
                                    </div>

                                        <Link
                                            to={getDashboardLink(userRole)}
                                            className="flex items-center px-4 py-2 text-sm text-textPri hover:bg-green-50 hover:text-myGreen"
                                        >
                                            <span className="mr-2"><TbLayoutDashboard /></span> Dashboard
                                        </Link>
                                        <Link
                                            to={getDashboardLink(userRole)} className="flex items-center px-4 py-2 text-sm text-textPri hover:bg-green-50 hover:text-myGreen">
                                            <span className="mr-2"><FiUser /></span> View Profile
                                        </Link>
                                        <Link
                                            to={getDashboardLink(userRole)} className="flex items-center px-4 py-2 text-sm text-textPri hover:bg-green-50 hover:text-myGreen">
                                            <span className="mr-2"><IoSettingsOutline /></span> Settings
                                        </Link>
                                    </>
                                )}

                                <div className="border-t border-borderTer my-1"></div>

                                {/* LOGOUT */}
                                {userRole && (
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem("user");
                                            window.location.reload();
                                        }}
                                        className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-red-50 w-full"
                                    >
                                        <span className="mr-2"><TbLogout2 /></span> Logout
                                    </button>
                                )}
                            </div>
                        )}

                    </div>
                ) : (
                    <div className="relative">
                        <button
                            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-green-50 text-myGreen hover:bg-green-100 transition-colors"
                        >
                            <FiUser className="text-base" />
                            <span className="font-medium">Log in</span>
                        </button>


                        {accountMenuOpen && (
                            <div onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                                aria-expanded={accountMenuOpen} ref={accountMenuRef}
                                aria-label="Login menu" className="absolute right-0 mt-2 w-48 bg-myWhite rounded-md shadow-lg py-1 z-50 border border-borderTer">
                                {[
                                    { icon: <FiUser />, text: "Login", link: "/login" },
                                    { icon: <IoSettingsOutline />, text: "Register as Employee", link: "login-employee" },
                                    { icon: <FiUser />, text: "Register as Manager", link: "login-manager" }
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.link}
                                        className="flex items-center px-4 py-2 text-sm text-textPri hover:bg-green-50 hover:text-myGreen"
                                    >
                                        <span className="mr-2">{item.icon}</span>
                                        {item.text}
                                    </Link>
                                ))}
                                <div className="border-t border-borderTer my-1"></div>
                                <Link
                                    to="/admin-login"
                                    className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                                >
                                    <span className="mr-2"><TbLogout2 /></span>
                                    Admin Login
                                </Link>
                            </div>
                        )}
                    </div>
                )}

                {/* Mobile menu button */}
                <button
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                    className="md:hidden text-textPri focus:outline-none mobile-menu-button"
                    aria-label="Toggle menu"
                >
                    {mobileSidebarOpen ? (
                        <RxCross1 className="text-2xl" />
                    ) : (
                        <CiMenuFries className="text-2xl" />
                    )}
                </button>
            </div>

            {/* Mobile Sidebar */}
            <aside
                ref={mobileMenuRef}
                className={`fixed inset-y-0 left-0 w-64 bg-myWhite shadow-xl transform ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:hidden transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="flex flex-col h-full p-4 overflow-y-auto">
                    <div className="mb-4 border-b pb-4">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo || 'https://i.ibb.co/0BZfPq6/darklogo.png'}
                                alt="logo"
                                className="w-10 h-10 mr-2"
                            />
                            <span className="font-bold text-lg">Corporate Solution</span>
                        </Link>
                    </div>

                    <ul className="space-y-2">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 rounded-md font-medium text-textPri hover:bg-green-50 hover:text-myGreen"
                            >
                                Home two
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
                                className="w-full flex justify-between items-center py-2 px-3 rounded-md font-medium text-textPri hover:bg-green-50 hover:text-myGreen"
                            >
                                <span>Categories</span>
                                <IoIosArrowDown className={`transition-transform ${mobileAboutUsOpen ? "rotate-180" : ""}`} />
                            </button>

                            {mobileAboutUsOpen && (
                                <div className="pl-6 mt-2 space-y-3">
                                    <div className="space-y-2">
                                        {['Company Details', 'Company Location', 'Team Members', 'Office Tour'].map((item, index) => (
                                            <Link
                                                key={index}
                                                to="/"
                                                className="py-1.5 px-3 rounded-md text-sm text-textPri hover:bg-green-50 hover:text-myGreen flex items-center gap-2"
                                            >
                                                <BsArrowRight className="text-xs" />
                                                {item}
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="space-y-3 mt-3">
                                        {[
                                            { icon: <MdDashboardCustomize className="bg-blue-100 text-blue-800 p-1 rounded-full" />, text: "Full Customize" },
                                            { icon: <CgIfDesign className="bg-orange-100 text-orange-800 p-1 rounded-full" />, text: "Modern Design" },
                                            { icon: <FaCubesStacked className="bg-yellow-100 text-yellow-800 p-1 rounded-full" />, text: "Well Stacktured" }
                                        ].map((item, index) => (
                                            <Link
                                                key={index}
                                                to="/"
                                                className="py-1.5 px-3 rounded-md text-sm text-textPri hover:bg-green-50 hover:text-myGreen flex items-center gap-3"
                                            >
                                                {item.icon}
                                                {item.text}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>

                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `block py-2 px-3 rounded-md font-medium ${isActive ? 'text-myGreen bg-green-50' : 'text-textPri hover:bg-green-50 hover:text-myGreen'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </nav>
    );
};

export default ResponsiveNavbar;