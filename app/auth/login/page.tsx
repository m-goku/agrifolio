"use client";

// pages/login.js
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

import { useRouter } from 'next/navigation'
import Toast from "@/app/components/Toast";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const Login = () => {

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


  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true)
      // Handle form submission, e.g., authenticate the user
      console.log(values);

      const response = await fetch('http://192.168.0.129:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const result = await response.json();

      if (response.status === 404) {
        setLoading(false)
        showToast(result.message, "error")
      }

      if (result.status === "SUCCESS") {
        //setLoading(false)
        router.push('/user/dashboard')
      }
      console.log(result);
      // You might want to call your login API here
    },
  });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:bg-slate-50 lg:items-center lg:justify-center">
      <div className="lg:ml-40 lg:mr-40 lg:mt-10 lg:mb-40 flex flex-col lg:w-3/5 lg:flex-row lg:shadow-lg mt-20">
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
                  className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none ${formik.touched.email && formik.errors.email
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
                  className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none ${formik.touched.password && formik.errors.password
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
                disabled={loading ? true : false}
                type="submit"
                className={`w-full py-2 px-4 text-white font-semibold rounded-md transition duration-200 ${loading ? "bg-blue-400" : "bg-blue-600  hover:bg-blue-700"}`}
              >
                {loading ? <p>Logging in</p> : <p>Login</p>}
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

export default Login;
