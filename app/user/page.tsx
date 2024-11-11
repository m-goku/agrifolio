"use client";

import { useState } from "react";

import { DATA } from "../data";
import Title from "./Title";
import Components from "./Components";
import LabelDetails from "./LableDetails";

const Card = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const data = DATA[0];

  return (
    <div className="mx-auto p-4 rounded-lg  bg-white w-full md:w-4/5 mt-10">
      <div className="flex items-center justify-between border-b border-gray-200 pb-2">
        {/* Placeholder Logo */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0">
            <img
              src="https://via.placeholder.com/40"
              alt="Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="font-sans text-base font-semibold  sm:block">
            {data.businessProfile.name}
          </h1>
        </div>

        {/* Desktop Tabs */}

        <nav className="hidden md:flex space-x-4 ml-auto">
          <button
            onClick={() => setActiveTab("about")}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === "about"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-blue-500 hover:border-gray-300"
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === "profile"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-blue-500 hover:border-gray-300"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === "contact"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500 hover:text-blue-500 hover:border-gray-300"
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
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
              <button
                onClick={() => {
                  setActiveTab("about");
                  toggleDropdown();
                }}
                className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                  activeTab === "about" ? "text-blue-500" : "text-gray-700"
                } hover:bg-gray-100`}
              >
                About Us
              </button>
              <button
                onClick={() => {
                  setActiveTab("profile");
                  toggleDropdown();
                }}
                className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                  activeTab === "profile" ? "text-blue-500" : "text-gray-700"
                } hover:bg-gray-100`}
              >
                Profile
              </button>
              <button
                onClick={() => {
                  setActiveTab("contact");
                  toggleDropdown();
                }}
                className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                  activeTab === "contact" ? "text-blue-500" : "text-gray-700"
                } hover:bg-gray-100`}
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "about" && (
          <>
            <div className="border-b border-gray-200 ">
              <Title title="What We Do" />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.businessProfile.businessTypes.map((b, i) => (
                  <Components
                    key={i}
                    details={b}
                    icon="https://via.placeholder.com/300"
                  />
                ))}
              </div>
              <div className="mb-10" />
            </div>
            <div className="border-b border-gray-200">
              <Title title="History & Mission" />
              <Components details={data.businessProfile.historyAndMission} />
              <div className="mb-10" />
            </div>
            <div className="border-b border-gray-200">
              <Title title="Our Values" />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.businessProfile.values.map((b) => (
                  <Components
                    details={b}
                    icon="https://via.placeholder.com/300"
                  />
                ))}
              </div>
              <div className="mb-10" />
            </div>
            <div className="border-b border-gray-200">
              <Title title="Sustainability Practices" />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.businessProfile.sustainabilityPractices.map((b) => (
                  <Components
                    details={b}
                    icon="https://via.placeholder.com/300"
                  />
                ))}
              </div>
              <div className="mb-10" />
            </div>
            <div className="border-b border-gray-200">
              <Title title="Agricultural Expertise" />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.businessProfile.agriculturalExpertise.map((b) => (
                  <Components
                    details={b}
                    icon="https://via.placeholder.com/300"
                  />
                ))}
              </div>
              <div className="mb-10" />
            </div>
          </>
        )}
        {activeTab === "profile" && (
          <p>
            Velit non irure adipisicing aliqua ullamco irure incididunt irure
            non esse consectetur nostrud minim non minim occaecat.
          </p>
        )}
        {activeTab === "contact" && (
          <>
            <div className="border-b border-gray-200">
              <Title title="Location" />
              <LabelDetails
                details={data.contactInformation.location.address}
              />
              <LabelDetails details={data.contactInformation.location.city} />
              <LabelDetails
                details={`${data.contactInformation.location.region} - ${data.contactInformation.location.country}`}
              />
            </div>
            <div className="border-b border-gray-200">
              <Title title="Contact Information" />
              <LabelDetails details={data.contactInformation.contact.email} />
              <LabelDetails
                details={data.contactInformation.contact.businessNumber}
              />
              <LabelDetails
                details={data.contactInformation.contact.phoneNumber}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
