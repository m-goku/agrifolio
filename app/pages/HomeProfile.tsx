import FeatureCard from "../components/FeatureCard";
import React, { useState } from "react";
import { Formik } from "formik";


export default function HomeProfile({ name, description, image, divide, button, values }: { name: string, description: string, image?: string, divide?: boolean, button?: boolean, values?: any }) {

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
            {/* ............HERO MODAL............. */}
            {isOpen === "Welcome" &&
                <ModalExample title="Hero Section">
                    <>

                        <Formik
                            initialValues={{
                                heading: name, // Initial value for name
                                description: description,          // Initial value for email
                                image: image
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

                                    {/* Email */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            What is your business about?
                                        </label>
                                        <textarea
                                            {...getFieldProps("description")}
                                            rows={4}
                                            id="description"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Enter hero description..."
                                        />
                                    </div>

                                    <div>
                                        <img
                                            id="image"
                                            //onClick={}
                                            src={image}
                                            alt="Our Process"
                                            className="rounded-md shadow-sm"
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

            {/* ............CORE VALUES MODAL................. */}
            {isOpen === "Core" &&
                <ModalExample title="Our Core Values">
                    <>

                        <Formik
                            initialValues={{
                                title_1: values[0].title,
                                title_2: values[1].title,
                                title_3: values[2].title,
                                values_1: values[0].content,
                                values_2: values[1].content,
                                values_3: values[2].content,
                            }}
                            onSubmit={(values) => {
                                console.log(values); // Log form values on submit
                            }}
                        >
                            {({ getFieldProps, handleSubmit }) => (
                                <form onSubmit={handleSubmit} className="p-6">

                                    {/* Values 1 */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            What is your first core value?
                                        </label>
                                        <textarea
                                            {...getFieldProps("title_1")}
                                            rows={1}
                                            id="title_1"
                                            className="w-full border border-gray-300 rounded-md p-2 mb-2"
                                            placeholder="Enter your core values"
                                        />
                                        <label className="block text-sm font-medium text-gray-700">
                                            About your First core value
                                        </label>
                                        <textarea
                                            {...getFieldProps("values_1")}
                                            rows={3}
                                            id="values_1"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Enter your core values"
                                        />
                                    </div>
                                    {/* Values 2 */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            What is your second core value?
                                        </label>
                                        <textarea
                                            {...getFieldProps("title_2")}
                                            rows={1}
                                            id="title_2"
                                            className="w-full border border-gray-300 rounded-md p-2 mb-2"
                                            placeholder="Enter your core values"
                                        />
                                        <label className="block text-sm font-medium text-gray-700">
                                            About your second core value
                                        </label>
                                        <textarea
                                            {...getFieldProps("values_2")}
                                            rows={3}
                                            id="values_2"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Enter your core values"
                                        />
                                    </div>
                                    {/* Values 3 */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            What is your third core value?
                                        </label>
                                        <textarea
                                            {...getFieldProps("title_3")}
                                            rows={1}
                                            id="title_3"
                                            className="w-full border border-gray-300 rounded-md p-2 mb-2"
                                            placeholder="Enter your core values"
                                        />
                                        <label className="block text-sm font-medium text-gray-700">
                                            About your third core value
                                        </label>
                                        <textarea
                                            {...getFieldProps("values_3")}
                                            rows={3}
                                            id="values_3"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Enter your core values"
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


            <div className="bg-gray-50 items-center flex flex-col justify-center ">
                {/* ..........HERO CONTENT................... */}
                {
                    button &&
                    <div className="flex w-full justify-end px-4 mt-3">
                        <button
                            onClick={() => setIsOpen("Welcome")}
                            className="btn bg-white text-green-800 px-4 py-2 rounded shadow-md transition-all"
                        >
                            Edit
                        </button>
                    </div>
                }
                <div className=" pt-10 pb-10 flex w-full justify-center">
                    <div className="hero-content flex-col lg:flex-row-reverse ">
                        <img
                            src={image}
                            alt="Hero Image"
                            className="rounded-md shadow-sm"
                            height={400}
                            width={600}
                        />
                        <div className="hero bg-base-200 ">
                            <div className="hero-content text-center w-full">
                                <div >
                                    {/* <h1 className="lg:text-7xl md:text-4xl text-3xl font-bold text-green-800">Welcome To</h1> */}
                                    <h1 className="lg:text-5xl text-3xl font-bold text-green-800">{name}</h1>
                                    <p className="py-6">
                                        {description}
                                    </p>
                                    {/* <button className="btn btn-primary">Get Started</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {divide && <div className="divider divider-neutral bg-white "></div>}

                {/* ..............CORE VALUES CONTENT.............. */}
                {button &&
                    <div className="flex w-full justify-end px-4 ">
                        <button
                            onClick={() => setIsOpen("Core")}
                            type="submit"
                            className="btn bg-white text-green-800 px-4 py-2 rounded shadow-md transition-all"
                        >
                            Edit
                        </button>
                    </div>}
                <div>
                    <h1 className="flex justify-center text-3xl mb-10 font-bold text-green-800 ">Our Core Values</h1>
                    <div className="flex flex-col md:flex-row md:justify-center md:space-x-4 p-4 ">
                        <div className="flex-grow md:w-1/3">
                            <FeatureCard
                                //icon="https://cdn-icons-png.flaticon.com/128/1001/1001371.png"
                                title={values[0].title}
                                description={values[0].content}
                            />
                        </div>
                        <div className="flex-grow md:w-1/3">
                            <FeatureCard
                                //icon="https://cdn-icons-png.flaticon.com/128/3214/3214746.png"
                                title={values[1].title}
                                description={values[1].content}
                            />
                        </div>
                        <div className="flex-grow md:w-1/3">
                            <FeatureCard
                                //icon="https://cdn-icons-png.flaticon.com/128/5405/5405826.png"
                                title={values[2].title}
                                description={values[2].content}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
