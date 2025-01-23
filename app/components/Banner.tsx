import Image from "next/image";

export default function Banner() {
    return (
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
            {/* Banner Image */}
            <Image
                src="/images/1.png" // Path to your image in the public folder
                alt="Responsive Banner"
                layout="fill" // Makes the image cover the container
                objectFit="cover" // Ensures the image covers the area
                priority // Loads the image with high priority
                className="rounded-md shadow-lg"
            />

            {/* Optional Overlay Content */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                    Welcome to Our Website
                </h1>
            </div> */}
        </div>
    );
}
