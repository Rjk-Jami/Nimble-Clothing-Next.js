"use client";
import { UsePasswordStrength } from "@/hooks/UsePasswordStrength";
import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";

const accountDetailsSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  myPhone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .required("Phone is required"),
  oldPassword: Yup.string(),
  newPassword: Yup.string().min(6),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .min(6),
});

const DashboardAccountDetails = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user, "account details")
  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      myPhone: user?.phone || "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: accountDetailsSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  const { values, errors, touched, handleChange, handleSubmit } = formik;
  const strength = UsePasswordStrength(values.newPassword);

  return (
    <div className="mb-10">
      <h1 className="text-lg font-bold">My Account Details</h1>
      <div className="mt-8">
        <form onSubmit={handleSubmit}>
          <div className="lg:w-2/3 mx-auto">
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1" htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                className={`w-full px-3 py-2 text-sm border rounded-md ${
                  errors.name && touched.name ? "border-red-500" : "border-gray-300"
                }`}
                value={values.name}
              />
              
            </div>

            {/* Phone Input */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1" htmlFor="myPhone">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="myPhone"
                name="myPhone"
                type="text"
                onChange={handleChange}
                className={`w-full px-3 py-2 text-sm border rounded-md ${
                  errors.myPhone && touched.myPhone ? "border-red-500" : "border-gray-300"
                }`}
                value={values.myPhone}
              />
              
            </div>
          </div>

          <div className="py-4 text-center">
            <h1 className="font-semibold">
              ** If you do not want to change your password, leave it blank. **
            </h1>
          </div>

          <div className="lg:w-2/3 mx-auto">
            {/* Old Password */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Old Password</label>
              <input
                id="oldPassword"
                name="oldPassword"
                type="text"
                onChange={handleChange}
                value={values.oldPassword}
                className="w-full px-3 py-2 text-sm border rounded-md border-gray-300"
              />
            </div>

            {/* New Password */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">New Password</label>
              <input
                id="newPassword"
                name="newPassword"
                type="text"
                onChange={handleChange}
                value={values.newPassword}
                className={`w-full px-3 py-2 text-sm border rounded-md ${
                  errors.newPassword && touched.newPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="text"
                onChange={handleChange}
                value={values.confirmPassword}
                className={`w-full px-3 py-2 text-sm border rounded-md ${
                  errors.confirmPassword && touched.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Password Strength Indicator */}
            {values.newPassword && strength && (
              <p className="text-sm mt-1">Password Strength: {strength}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md">
              Save Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardAccountDetails;
