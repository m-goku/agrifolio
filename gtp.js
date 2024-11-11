import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AgribusinessForm = () => {
  const [enableHistory, setEnableHistory] = useState(false);
  const [enableValues, setEnableValues] = useState(false);
  const [enableSustainability, setEnableSustainability] = useState(false);
  const [enableExpertise, setEnableExpertise] = useState(false);

  const formik = useFormik({
    initialValues: {
      agribusinessType: "",
      history: "",
      values: "",
      sustainability: "",
      expertise: "",
      country: "",
      region: "",
      city: "",
      email: "",
      businessNumber: "",
      phoneNumber: "",
      serviceAreas: "",
    },
    validationSchema: Yup.object({
      agribusinessType: Yup.string().required(
        "Type of Agribusiness is required"
      ),
      country: Yup.string().required("Country is required"),
      region: Yup.string().required("Region is required"),
      city: Yup.string().required("City is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      businessNumber: Yup.string().required("Business number is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-4 sm:p-8 max-w-3xl mx-auto space-y-6"
    >
      <h1 className="text-2xl font-bold mb-8 text-center">
        Agribusiness Profile Form
      </h1>

      {/* Type of Agribusiness */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Type of Agribusiness
        </label>
        <select
          id="agribusinessType"
          {...formik.getFieldProps("agribusinessType")}
          className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Type</option>
          <option value="farming">Farming</option>
          <option value="agriculture_supply">Agriculture Supply</option>
          <option value="agrichemicals">Agrichemicals</option>
          <option value="agriculture_technology">Agriculture Technology</option>
          <option value="livestock">Livestock</option>
          <option value="food_delivery">Food Delivery</option>
          <option value="food_processing">Food Processing</option>
        </select>
        {formik.touched.agribusinessType && formik.errors.agribusinessType ? (
          <div className="text-red-500 text-sm">
            {formik.errors.agribusinessType}
          </div>
        ) : null}
      </div>

      {/* Optional Sections with Checkboxes */}
      {/* History and Mission */}
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={enableHistory}
            onChange={() => setEnableHistory(!enableHistory)}
            className="mr-2"
          />
          <span className="text-sm font-medium text-gray-700">
            History and Mission (optional)
          </span>
        </label>
        {enableHistory && (
          <input
            type="text"
            id="history"
            {...formik.getFieldProps("history")}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter history and mission"
          />
        )}
      </div>

      {/* Repeat for other optional fields (Values, Sustainability Practices, Expertise) */}
      {/* Sustainability Practices */}
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={enableSustainability}
            onChange={() => setEnableSustainability(!enableSustainability)}
            className="mr-2"
          />
          <span className="text-sm font-medium text-gray-700">
            Sustainability Practices (optional)
          </span>
        </label>
        {enableSustainability && (
          <select
            id="sustainability"
            {...formik.getFieldProps("sustainability")}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Sustainability Practice</option>
            <option value="water_management">Water Management</option>
            <option value="agroforestry">Agroforestry</option>
            <option value="cover_crop">Cover Crop</option>
            <option value="organic_farming">Organic Farming</option>
          </select>
        )}
      </div>

      {/* Location Information */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-4">Location Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              {...formik.getFieldProps("country")}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="region"
              className="block text-sm font-medium text-gray-700"
            >
              Region
            </label>
            <input
              type="text"
              id="region"
              {...formik.getFieldProps("region")}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Repeat similarly for City, Email, Business Number, and Phone Number */}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default AgribusinessForm;
