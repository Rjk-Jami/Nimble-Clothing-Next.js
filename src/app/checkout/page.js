/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  districtsOptions,
  loadOptions,
} from "@/components/Data/districtsOptions";
import Underline from "@/components/design/underline";
import BillingDetails from "@/components/ForCheckout/BillingDetails";
import PaymentMethod from "@/components/ForCheckout/PaymentMethod";
import YourOrder from "@/components/ForCheckout/YourOrder";
import UseGetClassForSelectForm from "@/hooks/UseGetClassForSelectForm";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncSelect from "react-select/async";
import * as Yup from "yup";
import { setShippingAddress } from "../../../redux/shippingAddress/shippingAddressSlice";

const BillingSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  streetAddress: Yup.string().required("Street address is required"),
  zip: Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .required("Phone number is required"),
  district: Yup.object().required("District is required"),
});
const page = () => {
  const theme = useSelector((state) => state.theme.theme);
  const shippingAddress = useSelector((state) => state?.shippingAddress);
  const { town, zipcode, district, shippingCost } = shippingAddress;
  const dispatch = useDispatch();
  console.log(town, zipcode, district, shippingCost, "shippingAddress");
  const customStyles = UseGetClassForSelectForm({ theme });
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      name: "",
      streetAddress: "",
      zip: "",

      phone: "",
      email: "",
      createAccount: false,
      orderNotes: "",
      district: district || null,
    },
    validationSchema: BillingSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });
  const {
    values,
    errors,
    touched,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = formik;

  const handleDistrictChange = (selectedOption) => {
    console.log(selectedOption,'selectedOption')
    setFieldValue("district", selectedOption);
    if(selectedOption !== null){
      dispatch(
        setShippingAddress({
          town: town,
          zipcode: zipcode,
          district: selectedOption?.value,
        })
      ); // Dispatch to Redux store
    }
  };
  const districtDefault = values?.district
    ? { value: values.district, label: values.district }
    : null;

  console.log(values.district, "values.district");
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
        <div className="">
          <h1 className="uppercase text-2xl font-bold  my-2">
            Billing details
          </h1>

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
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor="district"
            >
              District<span className="text-red-500">*</span>
            </label>
            <AsyncSelect
              defaultValue={districtDefault}
              isClearable
              isSearchable
              onChange={handleDistrictChange}
              styles={customStyles}
              placeholder="Search District..."
              loadOptions={(inputValue) =>
                loadOptions(inputValue, districtsOptions)
              }
            />
          </div>
          <div className="mb-4">
            <label
              className={"block text-sm  font-semibold mb-1"}
              htmlFor="zip"
            >
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
        </div>
        <div className="">
          <YourOrder></YourOrder>

          <PaymentMethod></PaymentMethod>

          <Underline height="h-[1px]" width="w-full" css="mt-2 mb-2" />
          <section className="text-sm mt-5">
            <header className="mb-2 ">A warning message!!</header>
            <p className="text-justify ">
              Dear customer, We will be liable to take legal action if the
              product is not picked up without proper reason after order
              confirmation. Because, after booking a parcel, if it is returned,
              the courier company charges us about 200 taka. So please do not
              confirm the order unnecessarily. After knowing the details please
              confirm the order only if you like the product. Thank you
            </p>
          </section>

          <button
            type="submit"
            className="mt-6 w-full bg-orange-500 text-white py-2.5 font-bold uppercase  shadow hover:bg-orange-600 transition"
          >
            Place order
          </button>
        </div>
      </div>
    </form>
  );
};

export default page;
