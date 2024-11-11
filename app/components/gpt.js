import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MultiSelect from "./components/MultiSelect";

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
  const [selectedSustainability, setSelectedSustainability] = useState([]);
  const [selectedExpertise, setSelectedExpertise] = useState([]);

  const formik = useFormik({
    initialValues: {
      agribusinessType: "",
      sustainability: [],
      expertise: [],
    },
    validationSchema: Yup.object({
      agribusinessType: Yup.string().required(
        "Type of Agribusiness is required"
      ),
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
      <h1 className="text-2xl font-bold mb-8">Agribusiness Profile Form</h1>

      {/* Type of Agribusiness */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Type of Agribusiness
        </label>
        <select
          id="agribusinessType"
          {...formik.getFieldProps("agribusinessType")}
          className="select select-bordered w-full"
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
      </div>

      {/* Sustainability Practices */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Sustainability Practices
        </label>
        <MultiSelect
          options={sustainabilityOptions}
          value={selectedSustainability}
          onChange={(value) => {
            setSelectedSustainability(value);
            formik.setFieldValue("sustainability", value);
          }}
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
          value={selectedExpertise}
          onChange={(value) => {
            setSelectedExpertise(value);
            formik.setFieldValue("expertise", value);
          }}
          placeholder="Select expertise areas"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md"
      >
        Submit
      </button>
    </form>
  );
};

export default AgribusinessForm;
