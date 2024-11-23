// components/CopyLinkButton.tsx'
'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const CopyLinkButton: React.FC = () => {
    const [copied, setCopied] = useState(false);

    // Handle the copy action
    const handleCopyClick = () => {
        // Get the current URL
        const url = 'google.com'

        // Copy to clipboard using the Clipboard API
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);

            // Reset copied state after 2 seconds
            setTimeout(() => setCopied(false), 2000);
        }).catch((err) => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className=' justify-center  mt-20 flex-col space-y-4'>

            <button
                onClick={handleCopyClick}
                className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
                {/* Change the text or add an icon based on the `copied` state */}
                {copied ? (
                    <span>Copied!</span>
                ) : (
                    <span>Copy Profile Link</span>
                )}
            </button>

            <Link
                href={'/profile'}
                className="">
                <p>View Profile</p>
            </Link>
        </div>
    );
};

export default CopyLinkButton;
