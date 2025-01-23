import { SetStateAction, useState } from "react";

export default function Gallery({ gallery }: { gallery: any }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);


    const openModal = (index: SetStateAction<number>) => {
        setCurrentImage(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % gallery.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    return (
        <div className="min-h-screen p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.map((image: any, index: number) => (
                    <div
                        key={index}
                        className="relative w-full h-56 bg-gray-300 rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => openModal(index)}
                    >
                        <img
                            src={image?.url}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}

            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <button
                        className="absolute top-4 right-4 text-white text-xl"
                        onClick={closeModal}
                    >
                        ✕
                    </button>
                    <div className="relative">
                        <button
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                            onClick={prevImage}
                        >
                            ◀
                        </button>
                        <img
                            src={gallery[currentImage].url}
                            alt={`Gallery modal image ${currentImage + 1}`}
                            className="max-w-full max-h-[80vh] object-contain"
                        />
                        <button
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                            onClick={nextImage}
                        >
                            ▶
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
