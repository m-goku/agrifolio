"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when the user navigates
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          My AgriFolio
        </Link>
      </div>

      {/* Drawer and button only visible on mobile */}
      <div className="flex-none lg:hidden">
        <button
          className="btn btn-ghost"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="justify-center items-center">
            <img
              src={"https://cdn-icons-png.flaticon.com/128/7216/7216128.png"}
              alt="icon"
              className="size-10"
            />
          </div>
        </button>
      </div>

      {/* Inline menu links for desktop */}
      <div className="hidden lg:flex">
        <Link href="/" className="mr-5">
          Login
        </Link>
        <Link href="/">
          <button className="btn btn-active btn-primary btn-sm bg-slate-700 text-white hover:bg-slate-800 hover:text-white mr-5">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Drawer for mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-base-200 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden flex flex-col `}
      >
        <button
          className="absolute top-4 right-4 btn btn-sm btn-ghost"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          X
        </button>
        <div className="p-4 mt-10">
          <Link href="/" className="block mb-4">
            Login
          </Link>
          <Link href="/" className="block mb-4">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Overlay when the drawer is open, only on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
