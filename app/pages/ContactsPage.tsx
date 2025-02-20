import { Formik } from 'formik';
import React, { useState } from 'react';

const ContactsPage = ({ button, contactData }: { button?: boolean, contactData?: any }) => {

    const [isOpen, setIsOpen] = useState<any>(null);
    const closeModal = () => setIsOpen(null);

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
            {/* ************ CONTACT MODAL ************* */}
            {isOpen === "edit" &&
                <ModalExample title="Contact Information">
                    <>
                        <Formik
                            initialValues={{
                                email: "Welcome to Mike", // Initial value for name
                                description: "example@example.com",          // Initial value for email
                            }}
                            onSubmit={(values) => {
                                console.log(values); // Log form values on submit
                            }}
                        >
                            {({ getFieldProps, handleSubmit }) => (
                                <form onSubmit={handleSubmit} className="p-6">
                                    {/* Hero Heading (name) */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Hero Headng
                                        </label>
                                        <textarea
                                            {...getFieldProps("heading")}
                                            rows={1}
                                            id="heading"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Enter Hero Heading"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <textarea
                                            {...getFieldProps("heading")}
                                            rows={1}
                                            id="email"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="What is your business email?"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Phone Number
                                        </label>
                                        <textarea
                                            {...getFieldProps("heading")}
                                            rows={1}
                                            id="phone"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="What is your business phone number?"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Location
                                        </label>
                                        <textarea
                                            {...getFieldProps("heading")}
                                            rows={1}
                                            id="location"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Where is your business located?"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Service Areas
                                        </label>
                                        <textarea
                                            {...getFieldProps("heading")}
                                            rows={1}
                                            id="serviceAreas"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Which areas does your business serve?"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Working Hours
                                        </label>
                                        <textarea
                                            {...getFieldProps("heading")}
                                            rows={1}
                                            id="workingHours"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="What are your business working hours?"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Additional Information (Optional)
                                        </label>
                                        <textarea
                                            {...getFieldProps("heading")}
                                            rows={1}
                                            id="additionalInfo"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Enter Additional Information"
                                        />
                                    </div>


                                    {/* Submit Button */}
                                    <div className="mt-20 flex justify-end space-x-2">
                                        <button
                                            onClick={closeModal}
                                            className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-400"
                                        >
                                            Discard
                                        </button>
                                        <button
                                            type="submit"
                                            onClick={closeModal}
                                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </>
                </ModalExample>}


            {/* ************ CONTACT ************* */}
            {
                button &&
                <div className="flex w-full justify-end px-4 ">
                    <button
                        onClick={() => setIsOpen("edit")}
                        className="btn bg-white text-blue-500 px-4 py-2 rounded shadow-md transition-all"
                    >
                        Edit
                    </button>
                </div>
            }
            <div className="min-h-screen" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h1 className='mb-5 font-bold'>Contact Us</h1>
                <div style={{ marginBottom: '20px' }}>
                    <h2 className='font-bold'>Email</h2>
                    <p>{contactData?.email}</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h2 className='font-bold'>Phone Number</h2>
                    <p>{contactData?.phone}</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h2 className='font-bold'>Location</h2>
                    <p>{contactData?.city}, {contactData?.region}, {contactData?.country}</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h2 className='font-bold'>Service Areas</h2>
                    <p>{contactData?.city}, {contactData?.region}, Surrounding Areas</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h2 className='font-bold'>Working Hours</h2>
                    <p>{contactData?.workingHours}</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h2 className='font-bold'>Additional Information</h2>
                    <p>{contactData?.additionalInfo}</p>
                </div>
            </div>
        </>
    );
};

export default ContactsPage;