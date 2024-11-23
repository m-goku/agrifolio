// app/upload/page.tsx
'use client';

import React, { useState } from 'react';
import MultiUpload, { UploadedFile } from '@/app/components/MultiUpload';
import Link from 'next/link';

export default function UploadPage() {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

    const handleUploadSuccess = (files: UploadedFile[]) => {
        setUploadedFiles((prev) => [...prev, ...files]);
    };

    const handleUploadError = (error: string) => {
        console.error('Upload error:', error);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Add Your Files
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Do you have images or videos to upload? Add them below.
                    </p>
                </div>

                {/* Multi-File Upload */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <MultiUpload
                        onUploadSuccess={handleUploadSuccess}
                        onUploadError={handleUploadError}
                        maxSize={10 * 1024 * 1024} // 10MB limit
                    />
                </div>



                {/* Footer */}
                <div className="flex justify-between px-5 items-center mt-8">
                    <Link href={'/'}>
                        <p className="text-blue-600">Upload Later</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
