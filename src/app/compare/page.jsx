"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCompareProductsMutation } from "../../../redux/products/productsApi";
import Image from "next/image";
import Link from "next/link";
import Loading from "../loading";
import { IoClose } from "react-icons/io5";
import { userDeleteCompare } from "../../../redux/products/productSlice";

const Page = () => {
  const state = useSelector((state) => state.productsMaster.productCompare);
  const dispatch = useDispatch();
  const [compareProducts, { isLoading }] = useCompareProductsMutation();

  const [compProducts, setCompProducts] = useState([]);

  const handleDeleteCompare = (_id) => {
    dispatch(userDeleteCompare(_id));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (state && state.length > 0) {
        try {
          const response = await compareProducts({ productsId: state });
          if (response?.data?.products) {
            setCompProducts(
              response.data.products.map((product) => ({
                image: (
                  <div className="relative">
                    <IoClose
                      onClick={() => handleDeleteCompare(product._id)}
                      className="absolute text-2xl hover:cursor-pointer"
                    />
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="mx-auto"
                    />
                  </div>
                ),
                name: product.name,
                price: product.current_price || "N/A",
                description: product.description || "No description available.",
                sizes: product.sizes?.join(", ") || "N/A",
                availability: product.quantity > 0 ? (
                  <span className="text-green-500">In Stock</span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                ),
                actions: (
                  <Link
                    href={`/product/${product._id}`}
                    className="btn btn-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    View Details
                  </Link>
                ),
              }))
            );
          }
        } catch (error) {
          console.error("Error fetching compare products:", error);
        }
      } else {
        setCompProducts([]);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, compareProducts]);

  const columns = [
    { header: "Image", tag: "image" },
    { header: "Name", tag: "name" },
    { header: "Price", tag: "price" },
    { header: "Description", tag: "description" },
    { header: "Sizes", tag: "sizes" },
    { header: "Availability", tag: "availability" },
    { header: "Actions", tag: "actions" },
  ];

  return (
    <div className="mx-10 my-5">
      {isLoading && <Loading />}

      <div className="overflow-x-auto text-sm">
        <table className="table w-full">
          {compProducts.length > 0 ? (
            <tbody>
              {columns.map((col, colIndex) => (
                <tr key={colIndex}>
                  <td className="font-semibold">{col.header}</td>
                  {compProducts.map((row, rowIndex) => (
                    <td className="border-2 border-t-0 border-b-0" key={rowIndex}>
                      {row[col.tag]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ) : (
            <thead className="text-center">
              <tr>
                <th>No Compare Products Found!</th>
              </tr>
            </thead>
          )}
        </table>
      </div>
    </div>
  );
};

export default Page;
