"use client";
import React from "react";
import AboutUsPage from "@/app/pages/AboutUs";
import HomeProfile from "@/app/pages/HomeProfile";
import { useState, useEffect } from "react";
import Details from "../../profile/Details";
import Title from "../../profile/Title";
import Image from "next/image";
import { DATA } from "@/app/data";
import GalleryPage from "@/app/pages/GalleryPage";
import ProductsPage from "@/app/pages/ProductsPage";
import ContactsPage from "@/app/pages/ContactsPage";
import { tree } from "next/dist/build/templates/app-page";
import { useProfileStore } from "@/app/context/store";

export default function Home({ params }: { params: { name: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [profile, setProfile] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [foundProfile, setFoundProfile] = useState<boolean>(false);
  const [header, setHeader] = useState<any>("Home Page");

  const { globalStore, setGlobalStore } = useProfileStore();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/${params.name}`);
      const result = await response.json();

      if (result.status === 404) {
        setFoundProfile(false);
        setLoading(false);
        return;
      }

      if (!response.ok) {
        setFoundProfile(false);
        return;
      }
      setGlobalStore(result);
    };

    getData();
  }, [setGlobalStore]);

  useEffect(() => {
    if (globalStore) {
      //console.log(globalStore);
      setProfile(globalStore);
      setLoading(false);
      setFoundProfile(true);
    }
  }, [globalStore]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>; //PUT NETWORK ERRROR PAGE HERE

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-full bg-white transition-transform transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-64`}
      >
        {/* <div className="p-4 text-lg font-semibold border-b border-gray-100">
                    Sidebar
                </div> */}

        <div className="flex items-center space-x-4 p-3 border-b border-gray-200">
          <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0">
            <Image
              src={profile.businessProfile?.logo}
              alt="Logo"
              className="w-full h-full object-cover rounded-full"
              height={100}
              width={100}
            />
          </div>
          <h1 className="font-sans text-xl font-semibold  sm:block">
            {profile?.businessProfile?.name}
          </h1>
        </div>
        <nav className="px-5 py-6">
          <ul>
            <li className="mb-4">
              <button
                onClick={() => {
                  setActiveTab("home");
                  toggleSidebar();
                  setHeader("Home Page");
                }}
                className={` text-xl font-medium  ${
                  activeTab === "home"
                    ? " text-green-700"
                    : " text-gray-400 hover:text-green-800 "
                }`}
              >
                <p className="font-bold">Home</p>
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => {
                  setActiveTab("about");
                  toggleSidebar();
                  setHeader("About Us Page");
                }}
                className={` text-xl font-medium  ${
                  activeTab === "about"
                    ? " text-green-700"
                    : " text-gray-400 hover:text-green-800 "
                }`}
              >
                <p className="font-bold">About Us</p>
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => {
                  setActiveTab("gallery");
                  toggleSidebar();
                  setHeader("Gallery Page");
                }}
                className={` text-xl font-medium  ${
                  activeTab === "gallery"
                    ? " text-green-700"
                    : " text-gray-400 hover:text-green-800 "
                }`}
              >
                <p className="font-bold">Gallery</p>
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => {
                  setActiveTab("products");
                  toggleSidebar();
                  setHeader("Products Page");
                }}
                className={` text-xl font-medium  ${
                  activeTab === "products"
                    ? " text-green-700"
                    : " text-gray-400 hover:text-green-800 "
                }`}
              >
                <p className="font-bold">Products</p>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab("contact");
                  toggleSidebar();
                  setHeader("Contact Page");
                }}
                className={` text-xl font-medium  ${
                  activeTab === "contact"
                    ? " text-green-700"
                    : " text-gray-400 hover:text-green-800 "
                }`}
              >
                <p className="font-bold">Contact</p>
              </button>
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation Bar */}
        <header className="bg-white shadow-md p-4 flex items-center  md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-800 focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-1 bg-gray-600"></span>
              <span className="block w-6 h-1 bg-gray-600"></span>
              <span className="block w-6 h-1 bg-gray-600"></span>
            </div>
          </button>
          <h1 className="text-xl font-bold ml-10">{header}</h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 lg:p-6 overflow-y-auto">
          <>
            <div className="mx-auto  bg-white w-full md:w-5/5 ">
              {/* Content */}
              <div className="p-4">
                {activeTab === "home" && (
                  <HomeProfile
                    name={profile?.businessProfile?.heroText}
                    description={profile?.businessProfile?.heroDescription}
                    image={profile?.businessProfile?.heroImage}
                    values={profile?.businessProfile?.keyServices}
                    divide={true}
                    button={true}
                  />
                )}
                {activeTab === "about" && (
                  <AboutUsPage
                    aboutData={profile?.businessProfile?.aboutUs}
                    button={true}
                    divide={true}
                  />
                )}
                {activeTab === "gallery" && (
                  <GalleryPage button={true} data={profile?.gallery[0].data} />
                )}
                {activeTab === "products" && (
                  <ProductsPage
                    button={true}
                    productData={profile?.businessProfile?.products}
                  />
                )}
                {activeTab === "contact" && (
                  <ContactsPage
                    button={true}
                    contactData={profile?.contactInformation}
                  />
                )}
              </div>
            </div>
          </>
        </main>
      </div>
    </div>
  );
}
