"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  // Close the menu when the user navigates
  useEffect(() => {
    const handleRouteChange = () => setDropdownOpen(false);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <nav className="navbar bg-base-100 pt-5 px-4">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl text-slate-800">
          My AgriFolio
        </Link>

        <div className="md:hidden lg:hidden">
          <aside
            className={`fixed top-0 left-0 h-screen w-full bg-white transition-transform transform z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
              } md:translate-x-0 md:relative md:w-64`}
          >
            {/* <div className="p-4 text-lg font-semibold border-b border-gray-100">
                    Sidebar
                </div> */}

            <div className="flex items-center space-x-4 p-3 border-b border-gray-200">
              <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0">
                {/* <Image
                src={profile.businessProfile?.logo}
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
                height={100}
                width={100}
              /> */}
              </div>
              <h1 className="font-sans text-xl font-semibold  sm:block">
                My Agrifolio
              </h1>
            </div>
            <nav className="px-5 py-6">
              <ul>
                <li className="mb-4">
                  <Link href="auth/login">
                    <button
                      onClick={() => {
                        toggleSidebar();
                      }}
                      className={` text-xl font-medium  ${activeTab === "login"
                        ? " text-green-700"
                        : " text-gray-400 hover:text-green-800 "
                        }`}
                    >
                      <p className="font-bold">Login</p>

                    </button>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="auth/sign-up">
                    <button
                      onClick={() => {

                        toggleSidebar();

                      }}
                      className={` text-xl font-medium  ${activeTab === "signup"
                        ? " text-green-700"
                        : " text-gray-400 hover:text-green-800 "
                        }`}
                    >
                      <p className="font-bold">Sign Up</p>

                    </button>
                  </Link>
                </li>

              </ul>
            </nav>

            {/* Close Button on Mobile */}
            <button
              className="absolute top-4 right-4 md:hidden pt-3"
              onClick={toggleSidebar}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className="absolute w-6 h-1 bg-gray-600 transform rotate-45"></span>
                <span className="absolute w-6 h-1 bg-gray-600 transform -rotate-45"></span>
              </div>
            </button>
          </aside>
        </div>


        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link
            href="auth/login"
            className="btn btn-outline btn-primary text-sm px-4 py-2"
          >
            Login
          </Link>
          <Link
            href="auth/sign-up"
            className="btn btn-primary text-sm px-4 py-2"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Dropdown */}
        <div className="relative md:hidden">
          <button onClick={toggleSidebar} className="focus:outline-none">
            {/* Hamburger Icon */}
            {!dropdownOpen ? (
              <div className="space-y-1">
                <span className="block w-6 h-1 bg-gray-600"></span>
                <span className="block w-6 h-1 bg-gray-600"></span>
                <span className="block w-6 h-1 bg-gray-600"></span>
              </div>
            ) : (
              // Close Icon
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className="absolute w-6 h-0.5 bg-gray-600 transform rotate-45"></span>
                <span className="absolute w-6 h-0.5 bg-gray-600 transform -rotate-45"></span>
              </div>
            )}
          </button>

          {/* Dropdown Menu */}
          {/* {dropdownOpen && (

            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 z-10">
              <Link href="auth/login">
                <button className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === "home" ? "text-blue-500" : "text-gray-700"
                  } hover:bg-gray-100`}
                >
                  Login
                </button>
              </Link>
              <Link href="auth/sign-up">
                <button
                  className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === "about" ? "text-blue-500" : "text-gray-700"
                    } hover:bg-gray-100`}
                >
                  Sign Up
                </button>
              </Link>

            </div>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
