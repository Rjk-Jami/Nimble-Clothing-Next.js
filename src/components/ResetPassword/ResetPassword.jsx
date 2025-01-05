"use client";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useResetPassMutation } from "../../../redux/auth/authApi";
import { UsePasswordStrength } from "@/hooks/UsePasswordStrength";
import Loading from "@/app/loading";

const schema = Yup.object({
  //
  resetPassword: Yup.string().min(6).required(),
});
const ResetPassword = ({ token }) => {
  const [resetPass, { isLoading, isError, isSuccess, data, error }] =
    useResetPassMutation();

  const formik = useFormik({
    initialValues: {
      resetPassword: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values, "resetPassword");
      const { resetPassword } = values;
      await resetPass({ resetPassword, token });
      resetForm()
      setTimeout(() => {
        window.location.href = '/'// Redirect to home page
      }, 3000); 
    },
  });
  
  const {
    values,
    touched,
    errors,
    handleChange,

    handleSubmit,
  } = formik;

  const strength = UsePasswordStrength(values.resetPassword);
  //   console.log(strength);
  return (
    <div>
      <div className="">
        {isLoading ? <Loading></Loading>:""}
      </div>
      <div className="max-w-md mx-auto lg:mb-10 ">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor=" resetPassword"
              className="block text-sm  font-semibold mb-1"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="resetPassword"
              name="resetPassword"
              type="text"
              onChange={handleChange}
              value={values.resetPassword}
              className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
                errors.resetPassword && touched.resetPassword
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md`}
              aria-describedby={
                errors.resetPassword && touched.resetPassword
                  ? "password-error"
                  : ""
              }
            />
            {values.resetPassword && strength ? (
              <p id="password-error" className=" text-sm mt-1 ">
                {strength}
              </p>
            ) : (
              <p id="password-error" className=" text-sm mt-1 ">
                &nbsp;
              </p>
            )}
          </div>
          <button 
            type="submit"
            className="w-full uppercase font-bold btn btn-primary rounded-none "
          >
            set new password
          </button>
          {isSuccess && <p>Password reset successfully!</p>}
          {isError && <p>Error resetting password: {error?.data?.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
