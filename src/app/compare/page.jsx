"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCompareProductsMutation } from "../../../redux/products/productsApi";
import Image from "next/image";
import Link from "next/link";
import Table from "@/components/Table/Table";

const Page = () => {
  const state = useSelector((state) => state.productsMaster.productCompare);

  const [compareProducts, { isLoading, isError, isSuccess, error }] =
    useCompareProductsMutation();

  const [compProducts, setCompProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (state && state.length > 0) {
        try {
          const response = await compareProducts({ productsId: state });
          setCompProducts(
            response.data?.products.map((product) => ({
              image: (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              ),
              name: product.name,
              price: product.current_price || "N/A",
              description: product.description || "No description available.",
              sizes: product.sizes?.join(", ") || "N/A",
              availability:
                product.quantity > 0 ? (
                  <span className="text-green-500">In Stock</span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                ),
              actions: product._id ? (
                <Link
                  href={`/product/${product._id}`}
                  className="btn btn-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  View Details
                </Link>
              ) : null,
            }))
          );
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    fetchData();
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
     <div className={`overflow-x-auto text-sm`}>
    <table className="table w-full">
      
      <tbody>
        {columns.map((col, colIndex) => (
          <tr className="" key={colIndex}>
            <td className="font-semibold ">{col.header}</td>
            {compProducts.map((row, rowIndex) => (
              <td className="border-2" key={rowIndex}>{row[col.tag]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    </div>
  );
};

export default Page;
