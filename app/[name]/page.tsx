"use client";

import { useEffect, useState } from "react";

import { DATA } from "../data";
import Title from "../profile/Title";
import Tags from "../profile//Tags";
import Details from "../profile//Details";
import { useRouter } from "next/navigation";
const Card = ({ params }: { params: { name: string } }) => {
    const router = useRouter()
    interface Post {

    }

    const [activeTab, setActiveTab] = useState("about");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [profile, setProfile] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [foundProfile, setFoundProfile] = useState<boolean>(false);

    // useEffect(() => {
    //     const getData = async () => {
    //         try {

    //             const response = await fetch(`http://192.168.43.186:3001/post/${params.name}`, {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //             });

    //             if (response.status === 404) {
    //                 setFoundProfile(false)
    //                 return
    //             }

    //             if (!response.ok) {
    //                 setFoundProfile(false)
    //                 return
    //             }

    //             const result = await response.json();
    //             setProfile(result);
    //             setFoundProfile(true);
    //         } catch (err) {
    //             setError(err instanceof Error ? err.message : 'An unknown error occurred');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     getData();
    // }, [params.name]); // re-fetch when the id in the params changes

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const data = DATA[0];


    return (
        foundProfile ?
            (
                <div className="mx-auto p-4 rounded-lg  bg-white w-full md:w-4/5 ">
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
                                {profile?.post?.title}
                            </h1>
                        </div>

                        {/* Desktop Tabs */}

                        <nav className="hidden md:flex space-x-4 ml-auto">
                            <button
                                onClick={() => setActiveTab("about")}
                                className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === "about"
                                    ? "border-green-500 text-green-500"
                                    : "border-transparent text-gray-500 hover:text-green-500 hover:border-gray-300"
                                    }`}
                            >
                                About Us
                            </button>
                            <button
                                onClick={() => setActiveTab("gallery")}
                                className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === "galery"
                                    ? "border-green-500 text-green-500"
                                    : "border-transparent text-gray-500 hover:text-green-500 hover:border-gray-300"
                                    }`}
                            >
                                Gallery
                            </button>
                            <button
                                onClick={() => setActiveTab("contact")}
                                className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === "contact"
                                    ? "border-green-500 text-green-500"
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
                                            setActiveTab("contact");
                                            toggleDropdown();
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-sm font-medium ${activeTab === "contact" ? "text-blue-500" : "text-gray-700"
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
                                    <div
                                        className="grid-cols2 md:grid-cols-2 lg:grid-cols-3"
                                    >
                                        {data.businessProfile.businessTypes.map((b, i) => (
                                            <Tags
                                                key={i}
                                                details={b}
                                            />
                                        ))}
                                    </div>
                                    <Details
                                        details={data.businessProfile.businessTypesDetails}
                                    />
                                    <div className="mb-10" />
                                </div>
                                <div className="border-b border-gray-200">
                                    <Title title="History & Mission" />
                                    <Details details={data.businessProfile.historyAndMission} />
                                    <div className="mb-10" />
                                </div>
                                <div className="border-b border-gray-200">
                                    <Title title="Our Values" />
                                    <div className="grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                                        {data.businessProfile.values.map((b, i) => (
                                            <Tags
                                                key={i}
                                                details={b}
                                            />
                                        ))}
                                    </div>
                                    <Details details={data.businessProfile.valuesDetails} />
                                    <div className="mb-10" />
                                </div>
                                <div className="border-b border-gray-200">
                                    <Title title="Sustainability Practices" />
                                    <div className="grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                                        {data.businessProfile.sustainabilityPractices.map((b, i) => (
                                            <Tags
                                                key={i}
                                                details={b}
                                            />
                                        ))}
                                    </div>
                                    <Details details={data.businessProfile.sustainabilityDetails} />
                                    <div className="mb-10" />
                                </div>
                                <div className="border-b border-gray-200">
                                    <Title title="Agricultural Expertise" />
                                    <div className="grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                                        {data.businessProfile.agriculturalExpertise.map((b, i) => (
                                            <Tags
                                                key={i}
                                                details={b}
                                            />
                                        ))}
                                    </div>
                                    <Details details={data.businessProfile.expertiseDetails} />
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
                                    <Details
                                        details={data.contactInformation.location.address}
                                    />
                                    <Details details={data.contactInformation.location.city} />
                                    <Details
                                        details={`${data.contactInformation.location.region} - ${data.contactInformation.location.country}`}
                                    />
                                </div>
                                <div className="border-b border-gray-200">
                                    <Title title="Contact Information" />
                                    <Details details={data.contactInformation.contact.email} />
                                    <Details
                                        details={data.contactInformation.contact.businessNumber}
                                    />
                                    <Details
                                        details={data.contactInformation.contact.phoneNumber}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <>
                    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r">
                        <div className="text-center space-y-6">
                            <h1 className="text-6xl font-extrabold md:text-8xl">404</h1>
                            <p className="text-2xl md:text-3xl">Oops! Page not found.</p>
                            <p className="text-lg md:text-xl">
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
                </>)
    );
};

export default Card;
