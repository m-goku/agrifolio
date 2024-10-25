"use client";

// pages/login.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const Login = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission, e.g., authenticate the user
      console.log(values);
      // You might want to call your login API here
    },
  });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section - Image Background */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/841303/pexels-photo-841303.jpeg')",
        }}
      >
        {/* Additional content can go here */}
      </div>

      {/* Right Section - Form */}
      <div className="flex items-center justify-center lg:w-1/2 bg-white">
        <div className="max-w-md w-full px-6 py-8">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:ring focus:ring-blue-500`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="mb-6">
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
                className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:ring focus:ring-blue-500`}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              href="/auth/sign-up"
              className="text-blue-600 hover:underline"
            >
              Dont have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
