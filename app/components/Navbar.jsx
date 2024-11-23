"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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
          <button onClick={toggleDropdown} className="focus:outline-none">
            {/* Hamburger Icon */}
            {!dropdownOpen ? (
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
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
          {dropdownOpen && (

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
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
