"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import LeftImageSection from "../LeftImageSection";
import FormSection from "../FormSection";

const Signup = () => {
  const [formType, setFormType] = useState("personal");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      businessName: "",
      businessEmail: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Confirm Password is required"),
      businessName:
        formType === "business"
          ? Yup.string().required("Business Name is required")
          : Yup.string(),
      businessEmail:
        formType === "business"
          ? Yup.string()
              .email("Invalid email address")
              .required("Business Email is required")
          : Yup.string(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex flex-wrap mt-10 ">
      {/* Left Image Section */}
      <LeftImageSection />

      {/* Form Section */}
      <FormSection
        formType={formType}
        setFormType={setFormType}
        formik={formik}
      />
    </div>
  );
};

export default Signup;
