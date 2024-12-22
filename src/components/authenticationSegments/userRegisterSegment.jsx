"use client"
import { UsePasswordStrength } from "@/hooks/UsePasswordStrength";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useRegistrationMutation } from "../../../redux/api/rootApi";
import { useGetUserMutation } from "../../../redux/user/userSlice";


const schema = Yup.object({ 
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

const UserRegisterSegment = () => {
  const [register, { isLoading, isError, error }] = useRegistrationMutation();
  const [getUser] = useGetUserMutation();

  
  // useEffect(() => {
  //   const fetchCourses = async () => {
   
  //     try {
  //       const result = await getUser()
  //       console.log(result?.data)
        
  //       setUser(result?.data)
  //     } catch (error) {
  //     } finally {
    
  //     }
  //   };

  //   fetchCourses();
  // }, [getUser]);
  

const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log(values);
      const { email, password} = values
      await register({ email, password})
     
       

    },
  });

  const {
    values,
    touched,
    errors,
    handleChange,

    handleSubmit,
  } = formik;
  const strength = UsePasswordStrength(values.password);
  console.log(strength);
  return (
    <div className="max-w-md mx-auto lg:mb-10 ">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm  font-semibold mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
            className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            aria-describedby={errors.email ? "email-error" : ""}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm  font-semibold mb-1"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            name="password"
            type="text"
            onChange={handleChange}
            value={values.password}
            className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
              errors.password && touched.password
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md`}
            aria-describedby={
              errors.password && touched.password ? "password-error" : ""
            }
          />
          {values.password && strength ? (
            <p id="password-error" className=" text-sm mt-1 ">
              {strength}
            </p>
          ) : (
            <p id="password-error" className=" text-sm mt-1 ">&nbsp;</p>
          )}
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
