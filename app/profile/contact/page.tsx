// pages/index.tsx
"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const AgribusinessForm = () => {
  //GETTING GLOBAL STATE VALUES

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      country: "",
      region: "",
      city: "",
      email: "",
      phone: "",
      serviceAreas: "",
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
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-6 max-w-3xl mx-auto bg-white pt-10"
    >
      <h1 className="text-2xl font-bold mb-8">Location and Contact</h1>

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
          id="phone"
          placeholder="Phone Number"
          {...formik.getFieldProps("phone")}
          className="w-full border border-gray-300 rounded-md p-2 mt-2"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-500 text-sm">{formik.errors.phone}</div>
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
        //disabled={!formik.isValid || formik.isSubmitting}
        className="w-full py-3 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md"
      >
        Next
      </button>
    </form>
  );
};

export default AgribusinessForm;
