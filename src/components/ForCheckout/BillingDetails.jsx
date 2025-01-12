import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const BillingSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  streetAddress: Yup.string().required("Street address is required"),
  zip: Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .required("Phone number is required"),
});
const BillingDetails = () => {
    const theme = useSelector((state) => state.theme.theme);
  const formik = useFormik({
    initialValues: {
      name: "",
      streetAddress: "",
      zip: "",

      phone: "",
      email: "",
      createAccount: false,
      orderNotes: "",
    },
    validationSchema: BillingSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const {
    values,
    touched,
    errors,
    handleChange,

    handleSubmit,
  } = formik;
  return (
    <div>
      <h1 className="uppercase text-2xl font-bold  my-2">Billing details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm  font-semibold mb-1" htmlFor="name">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            } `}
            value={values.name}
          />
        </div>
        <div className="mb-4">
          <label
            className={"block text-sm  font-semibold mb-1"}
            htmlFor="streetAddress"
          >
            Street address<span className="text-red-500">*</span>
          </label>
          <input
            id="streetAddress"
            name="streetAddress"
            type="text"
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
              errors.streetAddress ? "border-red-500" : "border-gray-300"
            } `}
            value={values.streetAddress}
          />
        </div>
        <div className="mb-4">
          <label className={"block text-sm  font-semibold mb-1"} htmlFor="zip">
            Postcode / ZIP (optional)
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
              errors.zip ? "border-red-500" : "border-gray-300"
            } `}
            value={values.zip}
          />
        </div>
        <div className="mb-4">
          <label
            className={"block text-sm  font-semibold mb-1"}
            htmlFor="phone"
          >
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } `}
            value={values.phone}
          />
        </div>
        <div className="mb-4">
          <label
            className={"block text-sm  font-semibold mb-1"}
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            } `}
            value={values.email}
          />
        </div>
        <div className="mb-4">
          <label
            className={"block text-sm  font-semibold mb-1"}
            htmlFor="createAccount"
          >
            Create an account?
          </label>
          <input
            id="createAccount"
            name="createAccount"
            type="checkbox"
            onChange={handleChange}
            checked={formik.values.createAccount}
            className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
              errors.createAccount ? "border-red-500" : "border-gray-300"
            } `}
            value={values.createAccount}
          />
        </div>
        <div className="mb-4">
          <label
            className={"block text-sm  font-semibold mb-1"}
            htmlFor="orderNotes"
          >
            Order notes (optional)
          </label>
          <textarea
            name="orderNotes"
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
              errors.orderNotes ? "border-red-500" : "border-gray-300"
            } `}
            value={values.orderNotes}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BillingDetails;
