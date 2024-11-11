// pages/index.tsx
"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MultiSelect from "@/app/components/MultiSelect";

const agribusinessOptions = [
  { value: "farming", label: "Farming" },
  { value: "agriculture_supply", label: "Agriculture Supply" },
  { value: "agrichemicals", label: "Agrichemicals" },
  { value: "agriculture_technology", label: "Agriculture Technology" },
  { value: "livestock", label: "Livestock" },
  { value: "food_delivery", label: "Food Delivery" },
  { value: "food_processing", label: "Food Processing" },
];

const sustainabilityOptions = [
  { value: "water_management", label: "Water Management" },
  { value: "agroforestry", label: "Agroforestry" },
  { value: "cover_crop", label: "Cover Crop" },
  { value: "organic_farming", label: "Organic Farming" },
];

const expertiseOptions = [
  { value: "value_chain", label: "Value Chain" },
  { value: "problem_solving", label: "Problem Solving" },
  { value: "team_work", label: "Team Work" },
  { value: "time_management", label: "Time Management" },
  { value: "leadership", label: "Leadership" },
  { value: "adaptability", label: "Adaptability" },
];

const AgribusinessForm = () => {
  const formik = useFormik({
    initialValues: {
      history: "",
      values: "",
      agribusinessType: [],
      sustainability: [],
      expertise: [],
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
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      businessNumber: Yup.string().required("Business number is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      country: Yup.string().required("Country is required"),
      region: Yup.string().required("Region is required"),
      city: Yup.string().required("City is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md"
    >
      <h1 className="text-2xl font-bold mb-8">About Your Agribusiness</h1>

      {/* Type of Agribusiness */}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Agribusiness Type
        </label>
        <MultiSelect
          options={agribusinessOptions}
          value={formik.values.agribusinessType}
          onChange={(value) => formik.setFieldValue("agribusinessType", value)}
          placeholder="Select Agribusiness Type"
        />
      </div>

      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Type of Agribusiness
        </label>
        <select
          id="agribusinessType"
          {...formik.getFieldProps("agribusinessType")}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select Type</option>
          {agribusinessOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {formik.touched.agribusinessType && formik.errors.agribusinessType ? (
          <div className="text-red-500 text-sm">
            {formik.errors.agribusinessType}
          </div>
        ) : null}
      </div> */}

      {/* History and Mission */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          History and Mission
        </label>
        <textarea
          rows={2}
          id="history"
          {...formik.getFieldProps("history")}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter history and mission"
        />
      </div>

      {/* Values */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Values
        </label>
        <textarea
          rows={2}
          id="values"
          {...formik.getFieldProps("values")}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter values"
        />
      </div>

      {/* Sustainability Practices */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Sustainability Practices
        </label>
        <MultiSelect
          options={sustainabilityOptions}
          value={formik.values.sustainability}
          onChange={(value) => formik.setFieldValue("sustainability", value)}
          placeholder="Select sustainability practices"
        />
      </div>

      {/* Agricultural Expertise */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Agricultural Expertise
        </label>
        <MultiSelect
          options={expertiseOptions}
          value={formik.values.expertise}
          onChange={(value) => formik.setFieldValue("expertise", value)}
          placeholder="Select expertise areas"
        />
      </div>

      {/* Location Information */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Location Information
        </label>
        <input
          type="text"
          id="country"
          placeholder="Country"
          {...formik.getFieldProps("country")}
          className="w-full border border-gray-300 rounded-md p-2 mt-2"
        />
        {formik.touched.country && formik.errors.country ? (
          <div className="text-red-500 text-sm">{formik.errors.country}</div>
        ) : null}
        <input
          type="text"
          id="region"
          placeholder="Region"
          {...formik.getFieldProps("region")}
          className="w-full border border-gray-300 rounded-md p-2 mt-2"
        />
        {formik.touched.region && formik.errors.region ? (
          <div className="text-red-500 text-sm">{formik.errors.region}</div>
        ) : null}
        <input
          type="text"
          id="city"
          placeholder="City"
          {...formik.getFieldProps("city")}
          className="w-full border border-gray-300 rounded-md p-2 mt-2"
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="text-red-500 text-sm">{formik.errors.city}</div>
        ) : null}
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...formik.getFieldProps("email")}
          className="w-full border border-gray-300 rounded-md p-2 mt-2"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
        <input
          type="text"
          id="businessNumber"
          placeholder="Business Number"
          {...formik.getFieldProps("businessNumber")}
          className="w-full border border-gray-300 rounded-md p-2 mt-2"
        />
        {formik.touched.businessNumber && formik.errors.businessNumber ? (
          <div className="text-red-500 text-sm">
            {formik.errors.businessNumber}
          </div>
        ) : null}
        <input
          type="text"
          id="phoneNumber"
          placeholder="Phone Number"
          {...formik.getFieldProps("phoneNumber")}
          className="w-full border border-gray-300 rounded-md p-2 mt-2"
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="text-red-500 text-sm">
            {formik.errors.phoneNumber}
          </div>
        ) : null}
      </div>

      {/* Service Areas */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Service Areas (seperate with commas)
        </label>
        <textarea
          rows={2}
          id="serviceAreas"
          {...formik.getFieldProps("serviceAreas")}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter service areas"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md"
      >
        Next
      </button>
    </form>
  );
};

export default AgribusinessForm;
