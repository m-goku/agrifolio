import React, { useState } from 'react';
import MultiUpload from '../components/MultiUpload';
import Gallery from '../components/Gallery';

const GalleryPage = ({ data, button }: { data: any, button?: boolean }) => {

    const [isOpen, setIsOpen] = useState<any>(false);
    const closeModal = () => setIsOpen(false);



    function ModalExample({ title, children }: { title: string, children: any }) {

        return (
            <div className="flex justify-center items-center bg-gray-100">
                {/* Modal Overlay */}

                <div className="fixed overflow-y-hidden inset-0 z-50 flex lg:items-center justify-center bg-black bg-opacity-40 h-screen">
                    {/* Modal Content */}
                    <div className="bg-white lg:rounded-lg shadow-md max-w-3xl w-full max-h-screen  lg:mx-4  lg:h-4/4">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center border-b pb-2 p-6">
                            <h3 className="text-xl font-semibold text-gray-700">
                                {title}
                            </h3>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <div className="relative w-6 h-6 flex items-center justify-center">
                                    <span className="absolute w-5 h-1 bg-gray-600 transform rotate-45"></span>
                                    <span className="absolute w-5 h-1 bg-gray-600 transform -rotate-45"></span>
                                </div>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <main className="flex-1 py-6 overflow-y-auto  lg:max-h-[600px] h-full">
                            {children}
                        </main>
                    </div>
                </div>

            </div>
        );
    }



    return (
        <>
            {isOpen && <ModalExample title="Add Image">
                <div className='p-10'>
                    <MultiUpload />
                </div>
            </ModalExample>}
            <div className="min-h-screen">
                {button && <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Gallery</h1>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="btn bg-white text-green-500 px-4 py-2 rounded shadow-sm transition-all">
                        Add Image
                    </button>
                </div>}
                <Gallery gallery={data} />
            </div>
        </>
    );
};

export default GalleryPage;