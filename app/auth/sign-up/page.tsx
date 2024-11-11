"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  // Validation schema for business form
  const businessValidationSchema = Yup.object({
    businessName: Yup.string().required("Required"),
    businessEmail: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  // Formik for handling form submission and validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      businessName: "",
      businessEmail: "",
    },
    validationSchema: businessValidationSchema,
    onSubmit: (values) => {
      console.log("Business Signup:", values);
    },
  });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row  bg-slate-50">
      <div className="lg:ml-40 lg:mr-40 lg:mt-10 lg:mb-40 flex flex-col w-full lg:flex-row lg:shadow-lg">
        {/* Left Section - Image Background (hidden on mobile) */}
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/841303/pexels-photo-841303.jpeg")', // Replace with your image URL
          }}
        ></div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-6 lg:p-20">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Create an account
          </h2>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
            <>
              {/* Business Form */}
              <div className="mb-4">
                <label
                  htmlFor="businessName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  {...formik.getFieldProps("businessName")}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                    formik.touched.businessName && formik.errors.businessName
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Your business name"
                />
                {formik.touched.businessName && formik.errors.businessName ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.businessName}
                  </p>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="businessEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Email
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  {...formik.getFieldProps("businessEmail")}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                    formik.touched.businessEmail && formik.errors.businessEmail
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="business@example.com"
                />
                {formik.touched.businessEmail && formik.errors.businessEmail ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.businessEmail}
                  </p>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...formik.getFieldProps("password")}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Create your password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  {...formik.getFieldProps("confirmPassword")}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Confirm your password"
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.confirmPassword}
                  </p>
                ) : null}
              </div>
            </>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Next →
            </button>
          </form>

          {/* Existing User Link */}
          <p className="mt-6 text-sm text-center">
            Existing user?{" "}
            <a href="/auth/login" className="text-blue-500 underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
