// pages/index.tsx
"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MultiSelect from "@/app/components/MultiSelect";
import { useRouter } from 'next/navigation'
import ImageUpload from "@/app/components/ImageUpload";
import { useBusinessContext } from "@/app/context/BusinessContext";




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

const valuesOptions = [
  { value: "technological_excellence", label: "Technological excellence" },
  { value: "sustainable_innovation", label: "Sustainable innovation" },
  { value: "farmer_first", label: "Farmer-first approach" },
  { value: "environmental_stewardship", label: "Environmental stewardship" },
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

  //GETTING GLOBAL STATE VALUES
  const { state, dispatch } = useBusinessContext();
  //console.log(state)


  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      name: "",
      historyAndMission: "",
      values: [],
      valuesDetails: "",
      businessTypes: [],
      businessTypesDetails: "",
      sustainabilityPractices: [],
      sustainabilityDetails: "",
      expertise: [],
      expertiseDetails: "",
    },
    validationSchema: Yup.object({
      // email: Yup.string()
      //   .email("Invalid email format")
      //   .required("Email is required"),
      // businessNumber: Yup.string().required("Business number is required"),
      // phone: Yup.string().required("Phone number is required"),
      // country: Yup.string().required("Country is required"),
      // region: Yup.string().required("Region is required"),
      // city: Yup.string().required("City is required"),
    }),

    onSubmit: (values) => {

      let valuesArray: any = []
      let businessTypeArray: any = []
      let sustainabilityArray: any = []
      let expertiseArray: any = []

      values.values.forEach((value: any) => {
        valuesArray.push(value.label)
      })
      values.businessTypes.forEach((businessType: any) => {
        businessTypeArray.push(businessType.label)
      })
      values.sustainabilityPractices.forEach((sustainability: any) => {
        sustainabilityArray.push(sustainability.label)
      })
      values.expertise.forEach((expertise: any) => {
        expertiseArray.push(expertise.label)
      })


      //UPDATING GLOBAL STATE
      const updatedProfile = {
        //...state.businessProfile,

        name: values.name,
        historyAndMission: values.historyAndMission,
        values: valuesArray,
        valuesDetails: values.valuesDetails,
        businessTypes: businessTypeArray,
        businessTypesDetails: values.businessTypesDetails,
        sustainabilityPractices: sustainabilityArray,
        sustainabilityDetails: values.sustainabilityDetails,
        expertise: expertiseArray,
        expertiseDetails: values.expertiseDetails
      }
      dispatch({ type: 'SET_BUSINESS_PROFILE', payload: updatedProfile });

      //console.log(values)
      router.push('/profile/contact',)
    },


  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-6 max-w-3xl mx-auto bg-white pt-10"
    >
      <h1 className="text-2xl font-bold mb-8">About Your Agribusiness</h1>

      {/* Agribusiness  Name*/}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          What is the name of your business?
        </label>
        <textarea
          rows={1}
          id="name"
          {...formik.getFieldProps("name")}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter Your Business Name "
        />
      </div>

      {/* Type of Agribusiness */}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Agribusiness Type
        </label>
        <MultiSelect
          options={agribusinessOptions}
          value={formik.values.businessTypes}
          onChange={(value) => formik.setFieldValue("businessTypes", value)}
          placeholder="Select Agribusiness Type"
        />
      </div>

      {/* Agribusiness  Details*/}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          What is your business about?
        </label>
        <textarea
          rows={2}
          id="businessTypesDetails"
          {...formik.getFieldProps("businessTypesDetails")}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Write about your bsiness..."
        />
      </div>

      {/* History and Mission */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          History and Mission
        </label>
        <textarea
          rows={2}
          id="historyAndMission"
          {...formik.getFieldProps("historyAndMission")}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter history and mission"
        />
      </div>

      {/* Values Options */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Values
        </label>
        <MultiSelect
          options={valuesOptions}
          value={formik.values.values}
          onChange={(value) => formik.setFieldValue("values", value)}
          placeholder="Select Values"
        />
      </div>

      {/* Values */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          What are your business values?
        </label>
        <textarea
          rows={2}
          id="valuesDetails"
          {...formik.getFieldProps("valuesDetails")}
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
          value={formik.values.sustainabilityPractices}
          onChange={(value) => formik.setFieldValue("sustainabilityPractices", value)}
          placeholder="Select sustainability practices"
        />
      </div>

      {/* Sustainability  Details*/}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          What sustainability practices do you implement?
        </label>
        <textarea
          rows={2}
          id="sustainabilityDetails"
          {...formik.getFieldProps("sustainabilityDetails")}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Write about your implemented practices..."
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

      {/* Agricultural Expertise  Details*/}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          What agricultural expertise do you have?
        </label>
        <textarea
          rows={2}
          id="expertiseDetails"
          {...formik.getFieldProps("expertiseDetails")}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Write about your expertise..."
        />
      </div>

      {/* Logo Upload
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center ">
            <p className="mt-2 text-sm text-gray-600">
              Do you have a Logo? Upload it below.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <ImageUpload
              onUploadSuccess={handleUploadSuccess}
              onUploadError={handleUploadError}
              maxSize={5 * 1024 * 1024} // 5MB
            />
          </div>
        </div>
      </div> */}

      <button
        type="submit"
        //disabled={!formik.isValid || formik.isSubmitting}
        className="w-full py-3 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md"
      >
        Next →
      </button>
    </form>
  );
};

export default AgribusinessForm;
