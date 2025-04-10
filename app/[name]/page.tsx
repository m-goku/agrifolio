"use client";

import { Key, useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HomeProfile from "../pages/HomeProfile";
import AboutUsPage from "../pages/AboutUs";

import GalleryPage from "../pages/GalleryPage";
import ContactsPage from "../pages/ContactsPage";
import ProductsPage from "../pages/ProductsPage";
import { useProfileStore } from "../context/store";

const Card = ({ params }: { params: { name: string } }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState<any>("");
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
      const response = await fetch(`/api/${params.name}`, {
        cache: "no-store",
      });
      const result = await response.json();

      if (result.status === 404) {
        setFoundProfile(false);
        setLoading(false);
        return;
      }

      if (!response.ok) {
        setFoundProfile(false);
        setLoading(false);
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
  }, [globalStore]); // re-fetch when the id in the params changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>; //PUT NETWORK ERRROR PAGE HERE

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return foundProfile ? (
    <div className=" bg-gray-50 py-4 lg:w-5/5 lg:px-10">
      <div className="flex items-center justify-between border-b border-gray-100 pb-2 px-4">
        {/* Placeholder Logo */}
        <div className="flex items-center space-x-4 ">
          <div className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0">
            <Image
              src={profile.businessProfile?.logo}
              alt="Logo"
              className="w-full h-full object-cover rounded-full"
              height={100}
              width={100}
            />
          </div>
          <h1 className="font-sans text-lg font-semibold  sm:block">
            {profile?.businessProfile?.name}
          </h1>
        </div>

        {/* Desktop Tabs */}

        <nav className="hidden md:flex space-x-4 ml-auto">
          <button
            onClick={() => setActiveTab("home")}
            className={`px-4 py-2  font-medium border-b-2 ${
              activeTab === "home"
                ? "border-green-600 text-green-600"
                : "border-transparent text-gray-500 hover:text-green-800 "
            }`}
          >
            <p className="font-bold">Home</p>
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`px-4 py-2  font-medium border-b-2 ${
              activeTab === "about"
                ? "border-green-600 text-green-600"
                : "border-transparent text-gray-500 hover:text-green-800 "
            }`}
          >
            <p className="font-bold">About Us</p>
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`px-4 py-2  font-medium border-b-2 ${
              activeTab === "gallery"
                ? "border-green-600 text-green-600"
                : "border-transparent text-gray-500 hover:text-green-800 "
            }`}
          >
            <p className="font-bold">Gallery</p>
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2  font-medium border-b-2 ${
              activeTab === "products"
                ? "border-green-600 text-green-600"
                : "border-transparent text-gray-500 hover:text-green-800 "
            }`}
          >
            <p className="font-bold">Products</p>
          </button>

          <button
            onClick={() => setActiveTab("contact")}
            className={`px-4 py-2  font-medium border-b-2 ${
              activeTab === "contact"
                ? "border-green-600 text-green-600"
                : "border-transparent text-gray-500 hover:text-green-800 "
            }`}
          >
            <p className="font-bold">Contact</p>
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
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
                                    <button
                                        onClick={() => {
                                            setActiveTab("home");
                                            toggleDropdown();
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === "home" ? "text-blue-500" : "text-gray-700"
                                            } hover:bg-gray-100`}
                                    >
                                        Home
                                    </button>
                                    <button
                                        onClick={() => {
                                            setActiveTab("about");
                                            toggleDropdown();
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === "about" ? "text-blue-500" : "text-gray-700"
                                            } hover:bg-gray-100`}
                                    >
                                        About Us
                                    </button>
                                    <button
                                        onClick={() => {
                                            setActiveTab("gallery");
                                            toggleDropdown();
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === "gallery" ? "text-blue-500" : "text-gray-700"
                                            } hover:bg-gray-100`}
                                    >
                                        Gallery
                                    </button>
                                    <button
                                        onClick={() => {
                                            setActiveTab("products");
                                            toggleDropdown();
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === "products" ? "text-blue-500" : "text-gray-700"
                                            } hover:bg-gray-100`}
                                    >
                                        Products
                                    </button>
                                    <button
                                        onClick={() => {
                                            setActiveTab("contact");
                                            toggleDropdown();
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === "contact" ? "text-blue-500" : "text-gray-700"
                                            } hover:bg-gray-100`}
                                    >
                                        Contact
                                    </button>
                                </div>
                            )} */}
        </div>
      </div>

      <div className="md:hidden lg:hidden">
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
                  <p className="font-bold">Services</p>
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
      </div>

      {/* Content */}
      <div className="p-4 h-full">
        {activeTab === "home" && (
          <HomeProfile
            name={profile?.businessProfile?.heroText}
            description={profile?.businessProfile?.heroDescription}
            image={profile?.businessProfile?.heroImage}
            values={profile?.businessProfile?.keyServices}
          />
        )}

        {activeTab === "about" && (
          <AboutUsPage aboutData={profile?.businessProfile?.aboutUs} />
        )}
        {activeTab === "gallery" && (
          <GalleryPage data={profile?.gallery[0].data} />
        )}

        {activeTab === "products" && (
          <ProductsPage
            button={false}
            productData={profile?.businessProfile?.services}
          />
        )}

        {activeTab === "contact" && (
          <ContactsPage contactData={profile?.contactInformation} />
        )}
      </div>
      <Footer />
    </div>
  ) : (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-extrabold md:text-8xl">404</h1>
          <p className="text-xl md:text-3xl">Oops! Page not found.</p>
          <p className="text-md md:text-xl">
            The page you're looking for might have been moved or deleted.
          </p>
          <a
            href="/"
            className="mt-4 inline-block px-8 py-3 text-lg font-semibold bg-white rounded-md shadow-lg hover:bg-indigo-100 transition duration-300"
          >
            Go back to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
