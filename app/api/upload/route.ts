// app/api/upload/route.ts

import { NextResponse } from 'next/server';
import cloudinary from '@/app/lib/cloudinary';
import { Readable } from 'stream';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { success: false, message: 'No file provided' },
                { status: 400 }
            );
        }

        // Convert File to Buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Create a stream from the buffer
        const stream = Readable.from(buffer);

        // Upload to Cloudinary using stream
        const uploadPromise = new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: 'uploads',
                    resource_type: 'auto',
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );

            stream.pipe(uploadStream);
        });

        const result: any = await uploadPromise;

        return NextResponse.json({
            success: true,
            message: 'Upload successful',
            data: {
                public_id: result.public_id,
                secure_url: result.secure_url,
                format: result.format,
                width: result.width,
                height: result.height,
                created_at: result.created_at,
            },
        });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error ? error.message : 'Upload failed',
            },
            { status: 500 }
        );
    }
}