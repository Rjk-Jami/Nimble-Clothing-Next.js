"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/utils/Header/Header";

const ForgotPassword = () => {
  
  const router = useRouter();

  // Form validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  // useFormik hook
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
     

      try {
        // Simulating API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(values)
        
        resetForm();
        setSubmitting(false);

        // Redirect to login page after 3 seconds
        // setTimeout(() => {
        //   router.push("/login");
        // }, 3000);
      } catch (error) {
        
        setSubmitting(false);
      }
    },
  });

  return (
    <>
     <Header>Forget Password</Header>
    <div className="min-h-screen flex items-center justify-center ">
    <div className="w-full max-w-md border p-6 rounded-lg shadow-md">
      

      

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your email"
          />
          { formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className={`w-full p-2 text-white rounded ${
            formik.isSubmitting
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {formik.isSubmitting ? "Sending..." : "Send Reset Link"}
        </button>
      </form>

      {/* Back to Login */}
      <p className="text-center text-sm mt-4">
        
        <Link href="/my-account" className="text-blue-600 underline">
          Back to Login
        </Link>
      </p>
    </div>
  </div></>
  );
};

export default ForgotPassword;
