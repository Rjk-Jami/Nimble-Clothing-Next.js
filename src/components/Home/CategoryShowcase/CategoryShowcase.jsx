"use client";
import React, { useEffect, useState } from "react";
import { useGetProductsMutation } from "../../../../redux/products/productsApi";
import Image from "next/image";
import boxers from "../../../../public/boxer.png";
import hoodies from "../../../../public/Hoodie.png";
import pants from "../../../../public/Joggers.png";
import sweatshirt from "../../../../public/Sweatshirt.png";
import tShirts from "../../../../public/DropShoulderT-shirt.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { navProductsItemsData } from "@/components/features/produtsMenu";
import UseGetAllProducts from "@/hooks/UseGetAllProducts";

const CategoryShowcase = () => {
  const { products, isLoading } = UseGetAllProducts();
 
  const categories = [
    { tagName: "Boxers", image: boxers },
    { tagName: "Hoodies", image: hoodies },
    { tagName: "Pants", image: pants },
    { tagName: "Sweatshirt", image: sweatshirt },
    { tagName: "T-Shirts", image: tShirts },
  ];
  
  console.log(products);

  return (
    <div className="">
      <div className="">
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              {/* find Link */}
              <Link href={navProductsItemsData.find(nav=>nav.name === category.tagName).url}><div className=" relative overflow-hidden group">
                <span className="absolute z-40 inset-x-0 bottom-0 transform translate-y-5 bg-white dark:bg-black group-hover:translate-y-0 transition-all duration-300 ease-out delay-100 opacity-0 group-hover:opacity-100 flex justify-start items-center">
                  <div className="flex flex-col px-4 py-2">
                    <p className="text-3xl font-bold  ">{category?.tagName}</p>
                    <p>
                      {
                        products?.filter(
                          (p) => p.categories === category.tagName
                        ).length
                      }
                    </p>
                  </div>
                </span>
                <div className="overflow-hidden lg:h-[450px] xl:h-[450px] 2xl:h-[500px] md:h-[300px] h-[300px] z-0">
                  <Image
                    className="mx-auto o cursor-default transform hover:scale-125 transition-transform duration-300 ease-out hover:brightness-100 brightness-75"
                    src={category?.image}
                    alt={category?.tagName}
                    // width={330}
                    width={330}
                  ></Image>
                </div>
              </div></Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryShowcase;
