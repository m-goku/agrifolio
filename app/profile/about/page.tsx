// pages/index.tsx
"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MultiSelect from "@/app/components/MultiSelect";
import { useRouter } from 'next/navigation'
import ImageUpload from "@/app/components/ImageUpload";
import { useBusinessContext } from "@/app/context/BusinessContext";







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


      //UPDATING GLOBAL STATE
      const updatedProfile = {
        name: values.name,
        historyAndMission: values.historyAndMission,
        valuesDetails: values.valuesDetails,
        businessTypesDetails: values.businessTypesDetails,
        sustainabilityDetails: values.sustainabilityDetails,
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
