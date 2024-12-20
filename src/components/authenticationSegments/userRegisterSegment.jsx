import { UsePasswordStrength } from "@/hooks/UsePasswordStrength";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { userRegistration } from "../../../redux/auth/authSlice";
import { useRegisterMutation } from "../../../redux/api/rootApi";


const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

const UserRegisterSegment = () => {
  const [registration, { isSuccess, data, error, isLoading }] = useRegisterMutation();
const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit:  (values) => {
      console.log(values);
      const { email, password} = values
       dispatch(registration({ email, password}))
       
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
    <div className="max-w-md mx-auto ">
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
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegisterSegment;
