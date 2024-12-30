"use client";
import { useFormik } from "formik";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const AddReview = ({ product }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      content: "",
      rating: "",
    },
    onSubmit: async (values) => {
      // console.log(values);
      const { email, name,content,  rating} = values;
    //   await 
    console.log(values)
    },
  });
  const { values, touched, errors, handleChange, handleSubmit } = formik;

return (
    <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-4  mx-10 mt-10">
        <div className="">
            <h1 className="uppercase font-bold">Reviews</h1>
            <div className="">
                {product?.reviews.length > 0 ? "" : "No reviews yet"}
            </div>
        </div>
        <div className="">
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                    <label htmlFor="reviewRating" className="block text-sm font-semibold mb-1">
                        Rating <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <label key={star}>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={star}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                {values.rating >= star ? (
                                    <FaStar className=" text-base text-yellow-500 cursor-pointer" />
                                ) : (
                                    <FaRegStar className=" text-base  cursor-pointer" />
                                )}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="reviewContent" className="block text-sm font-semibold mb-1">
                        Review <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        required
                        id="reviewContent"
                        name="content"
                        onChange={handleChange}
                        value={values.content}
                        className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
                            errors.content ? "border-red-500" : "border-gray-300"
                        } rounded-md`}
                        aria-describedby={errors.content ? "content-error" : ""}
                    />
                </div>

                
                <div className="mb-4">
                    <label htmlFor="reviewName" className="block text-sm font-semibold mb-1">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        id="reviewName"
                        name="name"
                        type="text"
                        onChange={handleChange}
                        value={values.name}
                        className={`w-full px-3 py-2 text-sm font-thin border rounded-none ${
                            errors.name ? "border-red-500" : "border-gray-300"
                        } rounded-md`}
                        aria-describedby={errors.name ? "name-error" : ""}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="reviewEmail" className="block text-sm font-semibold mb-1">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        id="reviewEmail"
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
                
                <button type="submit" className=" w-36 bg-black dark:bg-white dark:text-black text-white font-bold uppercase p-4 ">
                    Submit
                </button>
            </form>
        </div>
    </div>
);
};

export default AddReview;
