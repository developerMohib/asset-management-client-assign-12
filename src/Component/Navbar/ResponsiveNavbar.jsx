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


const ResponsiveNavbar = () => {
    const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [accountMenuOpen, setAccountMenuOpen] = useState(false);
    const [logUser] = useState(true);
    const accountMenuRef = useRef(null);
    const mobileMenuRef = useRef(null);

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
        <nav className="flex items-center justify-between w-full h-auto px-4 py-3 bg-white shadow-sm relative z-50">
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
                    className="w-full py-2 pr-4 placeholder:text-gray-400 text-gray-800 border border-gray-300 pl-10 rounded-full outline-none focus:border-green-500 focus:ring-1 focus:ring-green-200 transition-all"
                    placeholder="Search..." 
                />
                <IoIosSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>

            {/* Desktop Navigation */}
            <ul className="items-center gap-5 text-sm hidden md:flex">
                <li className="hover:text-green-600 transition-colors">
                    <Link to='/' className="font-medium text-gray-800 hover:text-green-600">
                        Home
                    </Link>
                </li>

                {/* Category mega menu */}
                <li className="relative group">
                    <div className="flex items-center gap-1 cursor-pointer font-medium text-gray-800 hover:text-green-600">
                        Categories
                        <MdKeyboardArrowDown className="text-xl text-gray-500 group-hover:text-green-600 transition-transform group-hover:rotate-180" />
                    </div>

                    <div className="absolute hidden group-hover:block left-1/2 transform -translate-x-1/2 top-full mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-100 z-30 p-4">
                        <div className="grid grid-cols-2 gap-4">
                            <ul className="space-y-2">
                                {['Company Details', 'Company Location', 'Team Members', 'Office Tour'].map((item, index) => (
                                    <li key={index}>
                                        <Link 
                                            to="/" 
                                            className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
                                        >
                                            <BsArrowRight className="text-sm" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="space-y-4 border-l border-gray-200 pl-4">
                                {[
                                    { icon: <MdDashboardCustomize className="bg-gray-200 text-gray-800 p-1.5 rounded-full text-2xl" />, text: "Full Customize" },
                                    { icon: <CgIfDesign className="bg-gray-200 text-gray-800 p-1.5 rounded-full text-2xl" />, text: "Modern Design" },
                                    { icon: <FaCubesStacked className="bg-gray-200 text-gray-800 p-1.5 rounded-full text-2xl" />, text: "Well Stacktured" }
                                ].map((item, index) => (
                                    <Link 
                                        key={index} 
                                        to="/" 
                                        className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
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
                                `font-medium ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-800 hover:text-green-600'} pb-1`
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
            <div className="relative flex justify-end lg:hidden md:hidden max-w-md mx-4">                
                <CiHeart className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-xl" />
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
                                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg"
                                alt="User avatar"
                                className="w-9 h-9 rounded-full border-2 border-green-500 object-cover"
                            />
                        </button>

                        {accountMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                                {[
                                    { icon: <FiUser />, text: "View Profile" },
                                    { icon: <IoSettingsOutline />, text: "Settings" },
                                    { icon: <FiUser />, text: "Manage Profile" }
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        to="#"
                                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                                    >
                                        <span className="mr-2">{item.icon}</span>
                                        {item.text}
                                    </Link>
                                ))}
                                <div className="border-t border-gray-200 my-1"></div>
                                <Link
                                    to="#"
                                    className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                                >
                                    <span className="mr-2"><TbLogout2 /></span>
                                    Logout
                                </Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="relative">
                        <button
                            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                        >
                            <FiUser className="text-base" />
                            <span className="font-medium">Log in</span>
                        </button>

                        {accountMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                                {[
                                    { icon: <FiUser />, text: "Login" },
                                    { icon: <IoSettingsOutline />, text: "Employee Login" },
                                    { icon: <FiUser />, text: "Manager Login" }
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        to="#"
                                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                                    >
                                        <span className="mr-2">{item.icon}</span>
                                        {item.text}
                                    </Link>
                                ))}
                                <div className="border-t border-gray-200 my-1"></div>
                                <Link
                                    to="#"
                                    className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                                >
                                    <span className="mr-2"><TbLogout2 /></span>
                                    Boss Login
                                </Link>
                            </div>
                        )}
                    </div>
                )}

                {/* Mobile menu button */}
                <button 
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                    className="md:hidden text-gray-700 focus:outline-none mobile-menu-button"
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
                className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform ${
                    mobileSidebarOpen ? "translate-x-0" : "translate-x-full"
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

                    <div className="relative mb-4">
                        <input
                            className="w-full py-2 pr-4 pl-10 border border-gray-300 rounded-full outline-none focus:border-green-500"
                            placeholder="Search..."
                        />
                        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>

                    <ul className="space-y-2">
                        <li>
                            <Link 
                                to="/" 
                                className="block py-2 px-3 rounded-md font-medium text-gray-800 hover:bg-green-50 hover:text-green-600"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
                                className="w-full flex justify-between items-center py-2 px-3 rounded-md font-medium text-gray-800 hover:bg-green-50 hover:text-green-600"
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
                                                className="block py-1.5 px-3 rounded-md text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 flex items-center gap-2"
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
                                                className="block py-1.5 px-3 rounded-md text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 flex items-center gap-3"
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
                                        `block py-2 px-3 rounded-md font-medium ${
                                            isActive ? 'text-green-600 bg-green-50' : 'text-gray-800 hover:bg-green-50 hover:text-green-600'
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