import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Formik } from "formik";
import { useProfileStore } from "../context/store";

const ProductsPage = ({
  button,
  productData,
}: {
  button?: boolean;
  productData?: any;
}) => {
  const [productList, setProductList] = useState(productData);
  // console.log(productList);
  const [isOpen, setIsOpen] = useState<any>(null);
  const closeModal = () => setIsOpen(null);
  const [currentProduct, setCurrentProduct] = useState<any>(null);

  const { globalStore, setGlobalStore, setBusinessProfile } = useProfileStore();

  function ModalExample({ title, children }: { title: string; children: any }) {
    return (
      <div className="flex justify-center items-center bg-gray-100">
        {/* Modal Overlay */}

        <div className="fixed overflow-y-hidden inset-0 z-50 flex lg:items-center justify-center bg-black bg-opacity-40 h-screen">
          {/* Modal Content */}
          <div className="bg-white lg:rounded-lg shadow-md max-w-3xl w-full max-h-screen  lg:mx-4  lg:h-4/4">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-2 p-6">
              <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
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
      {isOpen === "product" && (
        <ModalExample title={currentProduct?.name}>
          <>
            <Formik
              initialValues={{
                serviceId: currentProduct?.serviceId,
                serviceTitle: currentProduct?.serviceTitle,
                serviceDescription: currentProduct?.serviceDescription,
                serviceCategory: currentProduct?.serviceCategory,
                location: currentProduct?.location,
                priceRange: currentProduct?.priceRange,
                availability: currentProduct?.availability,
                image: currentProduct?.image,
              }}
              onSubmit={(values) => {
                closeModal();

                (currentProduct["serviceId"] = currentProduct?.serviceId),
                  (currentProduct["serviceTitle"] = values.serviceTitle),
                  (currentProduct["serviceDescription"] =
                    values.serviceDescription);
                (currentProduct["serviceCategory"] = values.serviceCategory),
                  (currentProduct["location"] = values.location);
                currentProduct["priceRange"] = values.priceRange;
                currentProduct["availability"] = values.availability;
                currentProduct["image"] = values.image;

                // - MAKE DATABASE CALL TO uPDATE THE SERVICES
              }}
            >
              {({ getFieldProps, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-6">
                  {/* Service Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Service Name
                    </label>
                    <textarea
                      {...getFieldProps("serviceTitle")}
                      rows={1}
                      id="serviceTitle"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="Service Title"
                    />
                  </div>

                  {/* Product Description */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Service Description
                    </label>
                    <textarea
                      {...getFieldProps("serviceDescription")}
                      rows={3}
                      id="serviceDescription"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="Service Description"
                    />
                  </div>

                  {/* Product Price */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Service Category
                    </label>
                    <textarea
                      {...getFieldProps("serviceCategory")}
                      rows={1}
                      id="serviceCategory"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="Product Price"
                    />
                  </div>
                  {/* Product Price */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Service Locations
                    </label>
                    <textarea
                      {...getFieldProps("location")}
                      rows={1}
                      id="location"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="Service Locations"
                    />
                  </div>

                  {/* Product Price */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Price Ranges
                    </label>
                    <textarea
                      {...getFieldProps("priceRange")}
                      rows={1}
                      id="priceRange"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="Price Ranges"
                    />
                  </div>
                  {/* Product Price */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Service Availability
                    </label>
                    <textarea
                      {...getFieldProps("availability")}
                      rows={1}
                      id="availability"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder=" Service Availability"
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
                      onClick={() => handleSubmit}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </>
        </ModalExample>
      )}
      {isOpen === "add" && (
        <ModalExample title="Add New Product">
          <>
            <Formik
              initialValues={{
                serviceTitle: "",
                serviceDescription: "",
                serviceCategory: "",
                location: "",
                priceRange: "",
                availability: "",
                image: "",
              }}
              onSubmit={(values) => {
                closeModal();
                let randId = Math.floor(Math.random() * 1000);
                const newService = {
                  serviceId: randId,
                  serviceTitle: values.serviceTitle,
                  serviceDescription: values.serviceDescription,
                  serviceCategory: values.serviceCategory,
                  location: values.location,
                  priceRange: values.priceRange,
                  availability: values.availability,
                  image: values.image,
                };
                console.log(newService);
                // - ADD TO DATABASE
              }}
            >
              {({ getFieldProps, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-6">
                  {/* Service Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Service Name
                    </label>
                    <textarea
                      {...getFieldProps("serviceTitle")}
                      rows={1}
                      id="serviceTitle"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="Service Title"
                    />
                  </div>

                  {/* Product Description */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Service Description
                    </label>
                    <textarea
                      {...getFieldProps("serviceDescription")}
                      rows={3}
                      id="serviceDescription"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="Service Description"
                    />
                  </div>

                  {/* Product Price */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Service Category
                    </label>
                    <textarea
                      {...getFieldProps("serviceCategory")}
                      rows={1}
                      id="serviceCategory"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="Product Price"
                    />
                  </div>
                  {/* Product Price */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Service Locations
                    </label>
                    <textarea
                      {...getFieldProps("location")}
                      rows={1}
                      id="location"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="Service Locations"
                    />
                  </div>

                  {/* Product Price */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Price Ranges
                    </label>
                    <textarea
                      {...getFieldProps("priceRange")}
                      rows={1}
                      id="priceRange"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder="Price Ranges"
                    />
                  </div>
                  {/* Product Price */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Service Availability
                    </label>
                    <textarea
                      {...getFieldProps("availability")}
                      rows={1}
                      id="availability"
                      className="w-full border border-gray-300 rounded-md p-2"
                      placeholder=" Service Availability"
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
                      onClick={() => handleSubmit}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </>
        </ModalExample>
      )}

      <div className="container mx-auto p-4 h-max min-h-screen">
        {button && (
          <div className="flex justify-end mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setIsOpen("add")}
            >
              Create Product
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {productList.map((product: any) => (
            <>
              <div
                key={product.serviceId}
                className="border rounded-lg p-4 shadow-lg"
                onClick={() => {
                  !button ? null : setIsOpen("product");
                  setCurrentProduct(product);
                }}
              >
                <img
                  src={product.image}
                  alt={product.serviceTitle}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover mb-4"
                />
                <h2 className="text-xl font-bold mb-2">
                  {product.serviceTitle}
                </h2>
                <p className="text-gray-700 mb-2">
                  {product.serviceDescription}
                </p>
                <p className="text-gray-700 mb-2">{product.serviceCategory}</p>
                <p className="text-gray-700 mb-2">{product.availability}</p>
                <p className="text-gray-700 mb-2">{product.location}</p>
                <p className="text-lg font-semibold">{product.priceRange}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
