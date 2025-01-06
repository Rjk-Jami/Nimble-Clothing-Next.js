"use client";
import Table from "@/components/Table/Table";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCompareProductsMutation } from "../../../redux/products/productsApi";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

const Page = () => {
  const state = useSelector((state) => state.productsMaster.productCompare);
  // console.log(state)
  const [compareProducts, { isLoading, isError, isSuccess, error }] =
    useCompareProductsMutation();

  const [compProducts, setCompProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (state && state.length > 0) {
        try {
          const response = await compareProducts({ productsId: state });
          // console.log('Response:', response);
          setCompProducts(response.data?.products);
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    fetchData();
  }, [state, compareProducts]);
  console.log(compProducts, "compProducts");
  const columns = [
    { header: "", tag: "name" },
    { header: "", tag: "image" },
    { header: (<span className="">Current Price:</span>), tag: "price" },
    { header: "", tag: "viewProduct" },
    { header: "", tag: "description" },
    { header: "Size: ", tag: "size" },
    { header: "", tag: "availability" },
  ];
  const data = compProducts?.map((product, index) => ({
    name:
      (product?.name && <div className="font-bold h-16 text-center flex justify-center items-center">{product.name}</div>) || "",
    image:
      (product?.image && (
        <Image
          className="mx-auto cursor-default transform group-hover:scale-110 transition-transform duration-300 ease-out"
          src={product?.image}
          alt={product.name}
          width={430}
          height={430}
        />
      )) ||
      "",
    price: (product?.current_price && <span className="font-bold ">{product.current_price}</span>) || "",
    viewProduct:
      (product?._id && (
        <Link
          className="text-sm font-fold btn btn-sm rounded-none btn-accent"
          href={`/product/${product?._id}`}
        >
          View Details
        </Link>
      )) ||
      "",
    description: product?.description || "",
    size:
      product?.sizes.map((p, i) => (
        <span key={i}>
          {p}
          {i < product.sizes.length - 1 && ", "}
        </span>
      )) || "",
    availability:
      (product?.quantity !== 0 ? (
        <div className="flex items-center gap-2">
          <FaCheck></FaCheck>In stock
        </div>
      ) : (
        "jami "
      )) || "",
  }));
  return (
    <div className="grid grid-flow-col auto-rows-min  gap-2 w-full">
      {data?.map((row, rowIndex) => (
        <div
          className="border p-1 grid grid-flow-row  w-full items-center"
          key={rowIndex}
        >
          {columns?.map((col, colIndex) => (
            <div className="" key={colIndex}>
              {col.header}
              {row[col.tag]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page;
