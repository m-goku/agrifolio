// components/ImageUpload.tsx
'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, X, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';


export interface UploadedImage {
    public_id: string;
    secure_url: string;
    format: string;
    width: number;
    height: number;
    created_at: string;
}

export interface ImageUploadResponse {
    success: boolean;
    message: string;
    data?: UploadedImage;
}


interface ImageUploadProps {
    onUploadSuccess?: (image: UploadedImage) => void;
    onUploadError?: (error: string) => void;
    maxSize?: number; // in bytes
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onUploadSuccess,
    onUploadError,
    maxSize = 5 * 1024 * 1024, // 5MB default
}) => {
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [uploadError, setUploadError] = useState<string | null>(null);

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (!file) return;

        // Create preview
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);
        setUploadError(null);
        setUploading(true);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Upload failed');
            }

            onUploadSuccess?.(data.data);
            setUploading(false);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Upload failed';
            setUploadError(errorMessage);
            onUploadError?.(errorMessage);
            setUploading(false);
            // Clean up preview after error
            setTimeout(() => {
                setPreview(null);
                setUploadError(null);
            }, 3000);
        }
    }, [onUploadSuccess, onUploadError]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxSize,
        accept: {
            'image/*': ['.jpg', '.jpeg', '.png', '.gif']
        },
        multiple: false,
    });

    const clearPreview = () => {
        setPreview(null);
        setUploadError(null);
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <div
                {...getRootProps()}
                className={`relative border-2 border-dashed rounded-lg p-6 transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
          ${uploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-blue-400'}
          ${uploadError ? 'border-red-500 bg-red-50' : ''}
        `}
            >
                <input {...getInputProps()} disabled={uploading} />

                {preview ? (
                    <div className="relative w-full aspect-video">
                        <Image
                            src={preview}
                            alt="Upload preview"
                            fill
                            className="object-contain rounded-lg"
                        />
                        {!uploading && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    clearPreview();
                                }}
                                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center space-y-4 p-8">
                        {uploadError ? (
                            <div className="text-red-500 text-center">
                                <ImageIcon className="w-12 h-12 mx-auto mb-4 stroke-current" />
                                <p className="text-sm">{uploadError}</p>
                            </div>
                        ) : (
                            <>
                                <UploadCloud className={`w-12 h-12 ${isDragActive ? 'text-blue-500' : 'text-gray-400'}`} />
                                <div className="text-center">
                                    <p className="text-base font-medium text-gray-700">
                                        {isDragActive ? 'Drop your image here' : 'Drag & drop your image here'}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">or click to select</p>
                                    <p className="text-xs text-gray-400 mt-2">
                                        Supports: JPG, JPEG, PNG, GIF (max {Math.round(maxSize / (1024 * 1024))}MB)
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                )}

                {uploading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-lg">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                            <p className="mt-2 text-sm text-gray-600">Uploading...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageUpload;