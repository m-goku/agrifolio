'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, X, FileVideo2, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export interface UploadedFile {
    public_id: string;
    secure_url: string;
    format: string;
    width?: number;
    height?: number;
    created_at: string;
}

export interface FileUploadResponse {
    success: boolean;
    message: string;
    data?: UploadedFile;
}

interface FileUploadProps {
    onUploadSuccess?: (uploadedFiles: UploadedFile[]) => void;
    onUploadError?: (error: string) => void;
    maxSize?: number; // in bytes
}

const MultiUpload: React.FC<FileUploadProps> = ({
    onUploadSuccess,
    onUploadError,
    maxSize = 10 * 1024 * 1024, // 10MB default
}) => {
    const [uploading, setUploading] = useState(false);
    const [previews, setPreviews] = useState<{ file: File; url: string }[]>([]);
    const [uploadError, setUploadError] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const newPreviews = acceptedFiles.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));
        setPreviews((prev) => [...prev, ...newPreviews]);
        setUploadError(null);
    }, []);

    const handleUpload = async () => {
        if (previews.length === 0) {
            setUploadError('No files selected.');
            return;
        }

        setUploading(true);
        const uploadedFiles: UploadedFile[] = [];

        try {
            for (const preview of previews) {
                const formData = new FormData();
                formData.append('file', preview.file);

                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Upload failed');
                }

                uploadedFiles.push(data.data);
            }

            onUploadSuccess?.(uploadedFiles);
            setPreviews([]);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Upload failed';
            setUploadError(errorMessage);
            onUploadError?.(errorMessage);
        } finally {
            setUploading(false);
        }
    };

    const clearPreview = (index: number) => {
        setPreviews((prev) => prev.filter((_, i) => i !== index));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxSize,
        accept: {
            'image/*': ['.jpg', '.jpeg', '.png', '.gif'],
            'video/*': ['.mp4', '.avi', '.mov', '.mkv'],
        },
        multiple: true,
    });

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div
                {...getRootProps()}
                className={`relative border-2 border-dashed rounded-lg p-6 transition-colors
                ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
                ${uploadError ? 'border-red-500 bg-red-50' : ''}
            `}
            >
                <input {...getInputProps()} disabled={uploading} />

                {previews.length === 0 ? (
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
                                        {isDragActive ? 'Drop your files here' : 'Drag & drop your files here'}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">or click to select</p>
                                    <p className="text-xs text-gray-400 mt-2">
                                        Supports: Images (JPG, JPEG, PNG, GIF) & Videos (MP4, AVI, MOV, MKV) - max{' '}
                                        {Math.round(maxSize / (1024 * 1024))}MB per file
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {previews.map((preview, index) => (
                            <div key={index} className="relative w-full aspect-video">
                                {preview.file.type.startsWith('image/') ? (
                                    <Image
                                        src={preview.url}
                                        alt={`Preview ${index + 1}`}
                                        fill
                                        className="object-contain rounded-lg"
                                    />
                                ) : (
                                    <video
                                        src={preview.url}
                                        controls
                                        className="object-contain rounded-lg w-full h-full"
                                    />
                                )}
                                {!uploading && (
                                    <button
                                        onClick={() => clearPreview(index)}
                                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                    >
                                        <X size={16} />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {previews.length > 0 && (
                <div className="mt-4 flex justify-between items-center">
                    <button
                        onClick={() => setPreviews([])}
                        className="btn bg-gray-300 text-gray-800 hover:bg-gray-400"
                        disabled={uploading}
                    >
                        Clear All
                    </button>
                    <button
                        onClick={handleUpload}
                        className="btn bg-blue-600 text-white hover:bg-blue-700"
                        disabled={uploading}
                    >
                        {uploading ? 'Uploading...' : 'Upload All'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default MultiUpload;
