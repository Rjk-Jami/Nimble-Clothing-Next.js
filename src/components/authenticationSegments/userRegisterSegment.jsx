"use client";
import { UsePasswordStrength } from "@/hooks/UsePasswordStrength";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useRegistrationMutation } from "../../../redux/auth/authApi";
import Loading from "@/app/loading";

const schema = Yup.object({
  emailForRegister: Yup.string().email().required(),
  // password: Yup.string().min(6).required(),
});

const UserRegisterSegment = () => {
  const [register, { isLoading, isError, error }] = useRegistrationMutation();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      emailForRegister: "",
      // password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      // console.log(values);
      const { emailForRegister } = values;
      await register({ emailForRegister });
    },
  });

  const {
    values,
    touched,
    errors,
    handleChange,

    handleSubmit,
  } = formik;
  // const strength = UsePasswordStrength(values.password);
  // console.log(strength);
  return (
    <div className="max-w-md mx-auto lg:mb-10 ">
      <div className="">{isLoading && <Loading></Loading>}</div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="emailForRegister"
            className="block text-sm  font-semibold mb-1"
          >
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="emailForRegister"
            name="emailForRegister"
            type="email"
            onChange={handleChange}
            value={values.emailForRegister}
            className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
              errors.emailForRegister ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            aria-describedby={errors.emailForRegister ? "email-error" : ""}
          />
        </div>
        <div className="mb-4 text-sm">
          <p className="mb-4">
            A link to set a new password will be sent to your email address.
          </p>
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
        </div>

        <button
          type="submit"
          className="w-full uppercase font-bold btn btn-primary rounded-none "
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default UserRegisterSegment;
