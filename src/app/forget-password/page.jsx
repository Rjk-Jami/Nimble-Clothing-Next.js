"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/utils/Header/Header";
import { useUserForgetPasswordMutation } from "../../../redux/user/userApi";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../loading";

const ForgotPassword = () => {
  const [UserForgetPassword, { isLoading }] = useUserForgetPasswordMutation();
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
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      
  
      try {
        console.log(values);
        
        // Simulating API call delay
        // await new Promise((resolve) => setTimeout(resolve, 1000));
  
        const response = await UserForgetPassword({ email: values?.email });
        console.log(response);
  
        if (response?.error?.data?.success === false) {
          setErrors({ email: response?.error?.data?.message });
        } else if (response?.data?.success === true) {
          toast("Send Reset Email", { position: "top-right" });
          resetForm();
          setTimeout(() => {
            // window.location.href = '/my-account'
            router.back()
          }, 3000); 
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        
      }
    },
  });
  

  return (
    <>
    
     <Header>Forget Password</Header>
     <ToastContainer />
     {isLoading && <Loading></Loading>}
    <div className="mt-10 flex items-center justify-center ">
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
            <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          
          className={`w-full btn btn-primary  rounded-none `}
        >
          Send Reset Link
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
