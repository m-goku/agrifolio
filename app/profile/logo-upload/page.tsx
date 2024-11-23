// app/upload/page.tsx
'use client';

import { useState } from 'react';
import ImageUpload from '@/app/components/ImageUpload';
import Image from 'next/image';
import Link from 'next/link';

export default function UploadPage() {

    interface UploadedImage {
        public_id: string;
        secure_url: string;
        format: string;
        width: number;
        height: number;
        created_at: string;
    }

    const [uploadedImage, setUploadedImages] = useState<UploadedImage>();

    const handleUploadSuccess = (image: UploadedImage) => {
        setUploadedImages(image);
    };

    const handleUploadError = (error: string) => {
        console.error('Upload error:', error);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Add Your Logo
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Do you have a Logo? Upload it below.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <ImageUpload
                        onUploadSuccess={handleUploadSuccess}
                        onUploadError={handleUploadError}
                        maxSize={5 * 1024 * 1024} // 5MB
                    />
                </div>

                {/* {uploadedImages.length > 0 && (
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Uploaded Images
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {uploadedImages.map((image) => (
                                <div
                                    key={image.public_id}
                                    className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden"
                                >
                                    <Image
                                        src={image.secure_url}
                                        alt="Uploaded image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )} */}
                <p>{uploadedImage?.secure_url}</p>
                <div className=' flex justify-between px-5 items-center h-full'>
                    <Link href={'/'}><p className='text-blue-600'>Upload Later</p></Link>
                    <button className='btn bg-blue-600 text-white hover:bg-slate-800'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}