"use client";
import { UsePasswordStrength } from "@/hooks/UsePasswordStrength";
import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useUpdateUserMutation } from "../../../../../redux/user/userApi";
import Loading from "@/app/loading";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";

const accountDetailsSchema = Yup.object().shape({
  myName: Yup.string().required("Name is required"),
  myEmail: Yup.string().email().required("Email is required"),
  myPhone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .required("Phone is required"),
  oldPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .test(
      "old-password-required",
      "Old Password is required when setting a new password",
      function (value) {
        const { newPassword, confirmPassword } = this.parent;
        if ((newPassword || confirmPassword) && !value) {
          return false;
        }
        return true;
      }
    ),
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .when("oldPassword", {
      is: (val) => !!val,
      then: (schema) => schema.required(),
    }),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .min(6, "Password must be at least 6 characters")
    .when("oldPassword", {
      is: (val) => !!val,
      then: (schema) => schema.required(),
    }),
});

const DashboardAccountDetails = () => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const user = useSelector((state) => state.auth.user);
  // console.log(user, "account details");
  const formik = useFormik({
    initialValues: {
      myName: user?.name || "",
      myPhone: user?.phone || "",
      myEmail: user?.email || "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: accountDetailsSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      console.log(values);
      const response = await updateUser({ userDetails: values });
      console.log(response, "update user");

      if (response?.error?.data?.isVerified === false) {
        setErrors({ oldPassword: response?.error?.data?.message });
        return;
      }
      if (response?.error?.data?.isValid === false) {
        toast.error("Failed to update account!", { position: "top-right" });
        setErrors({ oldPassword: "Old password is incorrect" });
        return;
      }
      toast.success("Account updated successfully!", { position: "top-right" });
      if (response?.data?.success) {
        resetForm({
          values: {
            myName: values.myName,
            myPhone: values.myPhone,
            myEmail: values.myEmail,
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          },
        });
      }
      console.log("Form Submitted", values);
    },
  });

  const { values, errors, touched, handleChange, handleSubmit } = formik;
  const strength = UsePasswordStrength(values.newPassword);

  return (
    <div className="mb-10 ">
      <ToastContainer />
      <div className="">{isLoading && <Loading></Loading>}</div>
      <h1 className="text-lg font-bold">My Account Details</h1>
      <div className="mt-8">
        <form onSubmit={handleSubmit}>
          <div className=" mx-auto flex lg:flex-row gap-5 flex-col">
            {/* Name Input */}
            <div className="mb-4 w-full">
              <label
                className="block text-sm font-semibold mb-1"
                htmlFor="myName"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="myName"
                name="myName"
                type="text"
                onChange={handleChange}
                className={`w-full px-3 py-2 text-sm border rounded-md ${
                  errors.myName ? "border-red-500" : "border-gray-300"
                }`}
                value={values.myName}
              />
            </div>

            {/* Phone Input */}
            <div className="mb-4 w-full">
              <label
                className="block text-sm font-semibold mb-1"
                htmlFor="myPhone"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="myPhone"
                name="myPhone"
                type="text"
                onChange={handleChange}
                className={`w-full px-3 py-2 text-sm border rounded-md ${
                  errors.myPhone ? "border-red-500" : "border-gray-300"
                }`}
                value={values.myPhone}
              />
            </div>
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="myEmail"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              disabled
              id="myEmail"
              name="myEmail"
              type="email"
              onChange={handleChange}
              className={`w-full px-3 py-2 text-sm border rounded-md ${
                errors.myEmail ? "border-red-500" : "border-gray-300"
              }`}
              value={values.myEmail}
            />
          </div>

          <div className="py-4 text-center">
            <h1 className="font-semibold">
              ** If you do not want to change your password, leave it blank. **
            </h1>
          </div>

          <div className="border border-gray-300 p-4">
            <div className="lg:w-2/3 mx-auto ">
              {/* Old Password */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Old Password
                </label>
                <input
                  id="oldPassword"
                  name="oldPassword"
                  type="text"
                  onChange={handleChange}
                  value={values.oldPassword}
                  className="w-full px-3 py-2 text-sm border rounded-md border-gray-300"
                />
                {errors.oldPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.oldPassword}
                  </p>
                )}
              </div>

              {/* New Password */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  New Password
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="text"
                  onChange={handleChange}
                  value={values.newPassword}
                  className={`w-full px-3 py-2 text-sm border rounded-md ${
                    errors.newPassword || errors.oldPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.newPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.newPassword}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="text"
                  onChange={handleChange}
                  value={values.confirmPassword}
                  className={`w-full px-3 py-2 text-sm border rounded-md ${
                    errors.confirmPassword || errors.oldPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Password Strength Indicator */}
              {values.newPassword && strength && (
                <p className="text-xs ">Password Strength: {strength}</p>
              )}
              <div className="">
                <Link
                  
                  className="text-sm font-thin text-error"
                  href={"/forget-password"}
                >
                  Lost your password?
                </Link>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="">
            <button
              type="submit"
              className="mt-6 btn btn-wide btn-primary  rounded-none"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardAccountDetails;
