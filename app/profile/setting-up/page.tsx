'use client';

import { useBusinessContext } from '@/app/context/BusinessContext';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProfileSetupPage = () => {
    const { state, dispatch } = useBusinessContext();
    const router = useRouter()

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`http://192.168.0.129:3001/profile/create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzNkNTM1ZmJjNGU4YWUxZTEyNTE2NGUiLCJpYXQiOjE3MzIwNzI1MDF9.3PglpgyTtY0bldzVaET37_gubAmCk2L4zrlvUsrTZMg"
                    },
                    body: JSON.stringify(state),
                });

                if (!response.ok) {
                    const errorDetails = await response.text(); // Fetch the error message
                    console.error("Error Response:", errorDetails);
                    setError(`Error: ${response.status} - ${errorDetails}`);
                    return;
                }

                const result = await response.json();
                console.log(result)

                if (result.status === "SUCCESS") {
                    dispatch({ type: 'RESET_STATE' });
                    router.push('/profile/dashboard')
                }

            } catch (err) {
                setError(err instanceof Error ? err.message : "An unknown error occurred");
            } finally {
                //setLoading(false);
            }
        };

        getData();
    }, []); // Re-fetch when the name in the params changes



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            {/* Logo or Icon */}
            <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center animate-bounce">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="white"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.88 3.549A9 9 0 1121 12h-5l-4-9H4l4 9H3a9 9 0 0113.88-8.451z"
                        />
                    </svg>
                </div>
            </div>

            {/* Loading Text */}
            <h1 className="text-2xl font-semibold text-gray-700 text-center">
                Setting Up Your Profile
            </h1>
            <p className="mt-2 text-gray-500 text-center">
                Please wait while we set everything up for you.
            </p>

            {/* Progress Animation */}
            {/* <div className="w-full mt-8 max-w-md">
                <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div className="absolute h-full w-1/3 bg-blue-500 animate-progress rounded-full"></div>
                </div>
            </div> */}
        </div>
    );
};

export default ProfileSetupPage;
