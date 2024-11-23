"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useRouter } from 'next/navigation'
import Toast from "@/app/components/Toast";
const Signup = () => {

  const [loading, setLoading] = useState(false)
  const router = useRouter()

  type ToastState = {
    message: string;
    type: "success" | "error" | "info" | "warning";
  } | null;


  const [toast, setToast] = useState<ToastState>(null);

  const showToast = (message: string, type: "success" | "error" | "info" | "warning") => {
    setToast({ message, type });

    // Clear the toast after it's closed
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };



  // Validation schema for business form
  const businessValidationSchema = Yup.object({
    businessName: Yup.string().required("Required"),
    email: Yup.string()
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
    },
    validationSchema: businessValidationSchema,
    onSubmit: async (values) => {
      console.log("Business Signup:", values);
      setLoading(true)
      const response = await fetch('http://192.168.0.129:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          businessName: values.businessName
        }),
      });

      const result = await response.json();

      if (response.status === 409) {
        setLoading(false)
        showToast(result.message, "error")
      }

      if (response.status === 500) {
        setLoading(false)
        showToast(result.message, "error")
      }

      if (result.status === "SUCCESS") {
        showToast(result.status, "success")
        router.push('/profile/who-we-are')
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row  bg-slate-50">
      <div className="lg:ml-40 lg:mr-40 lg:mt-10 lg:mb-40 flex flex-col w-full lg:flex-row lg:shadow-lg mt-20">
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
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${formik.touched.businessName && formik.errors.businessName
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
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...formik.getFieldProps("email")}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                    } focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="business@example.com"
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.email}
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
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${formik.touched.password && formik.errors.password
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
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm ${formik.touched.confirmPassword &&
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
              disabled={loading ? true : false}
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

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Signup;
