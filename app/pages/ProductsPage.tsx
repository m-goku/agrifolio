import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { Formik } from 'formik';



const ProductsPage = ({ button, productData }: { button?: boolean, productData?: any }) => {
    const [productList, setProductList] = useState(productData);
    const [isOpen, setIsOpen] = useState<any>(null);
    const closeModal = () => setIsOpen(null);
    const [currentProduct, setCurrentProduct] = useState<any>(null);




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
            {isOpen === "product" &&
                <ModalExample title={currentProduct?.name}>
                    <>
                        <Formik
                            initialValues={{
                                productName: currentProduct?.name,
                                productDescription: currentProduct?.description,
                                productPrice: currentProduct?.price,
                                productImage: currentProduct?.image,
                            }}
                            onSubmit={(values) => {
                                console.log(values); // Log form values on submit
                            }}
                        >
                            {({ getFieldProps, handleSubmit }) => (
                                <form onSubmit={handleSubmit} className="p-6">
                                    {/* Product Name */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Product Name
                                        </label>
                                        <textarea
                                            {...getFieldProps("productName")}
                                            rows={1}
                                            id="productName"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Product Name"
                                        />
                                    </div>

                                    {/* Product Description */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Product Description
                                        </label>
                                        <textarea
                                            {...getFieldProps("productDescription")}
                                            rows={1}
                                            id="productDescription"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Product Description"
                                        />
                                    </div>

                                    {/* Product Price */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Product Price
                                        </label>
                                        <textarea
                                            {...getFieldProps("productPrice")}
                                            rows={1}
                                            id="productPrice"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Product Price"
                                        />
                                    </div>

                                    {/* Product Image */}
                                    <div>
                                        <img
                                            //onClick={}
                                            src={currentProduct?.image}
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
            {isOpen === "add" &&
                <ModalExample title="Add New Product">
                    <>
                        <Formik
                            initialValues={{
                                productName: " ",
                                productDescription: " ",
                                productPrice: " ",
                                productImage: " ",
                            }}
                            onSubmit={(values) => {
                                console.log(values); // Log form values on submit
                            }}
                        >
                            {({ getFieldProps, handleSubmit }) => (
                                <form onSubmit={handleSubmit} className="p-6">
                                    {/* Product Name */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Product Name
                                        </label>
                                        <textarea
                                            {...getFieldProps("productName")}
                                            rows={1}
                                            id="productName"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Product Name"
                                        />
                                    </div>

                                    {/* Product Description */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Product Description
                                        </label>
                                        <textarea
                                            {...getFieldProps("productDescription")}
                                            rows={1}
                                            id="productDescription"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Product Description"
                                        />
                                    </div>

                                    {/* Product Price */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Product Price
                                        </label>
                                        <textarea
                                            {...getFieldProps("productPrice")}
                                            rows={1}
                                            id="productPrice"
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            placeholder="Product Price"
                                        />
                                    </div>

                                    {/* Product Image */}
                                    <div>
                                        <img
                                            //onClick={}
                                            src={currentProduct?.image}
                                            alt="Product Image"
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



            <div className="container mx-auto p-4 h-max min-h-screen">
                {button && <div className="flex justify-end mb-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => setIsOpen("add")}
                    >Create Product</button>
                </div>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {productList.map((product: any) => (
                        <>
                            <div
                                key={product.id}
                                className="border rounded-lg p-4 shadow-lg"
                                onClick={() => { !button ? null : setIsOpen("product"); setCurrentProduct(product) }} >
                                <img src={product.image} alt={product.name} width={200} height={200} className="w-full h-48 object-cover mb-4" />
                                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                                <p className="text-gray-700 mb-2">{product.description}</p>
                                <p className={`mb-2 ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </p>
                                <p className="text-lg font-semibold">{product.price}</p>
                            </div>


                        </>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductsPage;




