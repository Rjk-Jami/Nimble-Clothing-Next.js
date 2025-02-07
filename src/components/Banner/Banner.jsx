"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const slideData = [
  
  {
    image: "https://res.cloudinary.com/dpphpbkkz/image/upload/v1735155568/banner2_jan7vc.png",
    title: <span><span className="text-zinc-900">Unleash</span> Comfort & Style</span>,
    subtitle: "Premium fabrics, modern designs, and a perfect fit.",
    link: "/products-category/t-shirts",
  },
 
  
  {
    image: "https://res.cloudinary.com/dpphpbkkz/image/upload/v1735155570/banner4_fkvllc.png",
    title: <span>Flash Sale - <span className="text-zinc-900">Limited Time!</span></span>,
    subtitle: "Get up to 50% off on select items. Don't miss out!",
    link: "/products-category/pants",
  },
  {
    image: "https://res.cloudinary.com/dpphpbkkz/image/upload/v1735155570/banner3_qycb9g.png",
    title: <span><span className="text-zinc-900">Exclusive</span> Winter Collection</span>,
    subtitle: "Stay warm and stylish with our latest arrivals.",
    link: "/products-category/hoodies",
  },
  {
    image: "https://res.cloudinary.com/dpphpbkkz/image/upload/v1735155568/banner1_bc5rmf.png",
    title: <span>Elevate Your <span className="text-zinc-900">Style</span></span>,
    subtitle: "Discover the latest trends in fashion with Nimble Wear.",
    link: "/products-category/t-shirts",
  },
];




const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slideData.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={slide.image}
              className="w-full object-cover brightness-75 dark:brightness-50 saturate-150"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white  text-center">
              <div className="px-4">
                <h2 className="text-2xl  md:text-4xl lg:text-6xl 2xl:text-8xl drop-shadow-2xl  font-bold font-sans">{slide.title}</h2>
                <p className="lg:text-lg md:text-sm text-xs font-thin mt-2">{slide.subtitle}</p>
                <div className=" flex items-center justify-center gap-6">
                <Link href={'/shop'} className=" btn btn-xs md:btn-sm lg:btn-md btn-neutral mt-4 rounded-none  bg-zinc-900 ">Shop Now</Link>
                <Link href={slide.link} className=" btn btn-xs md:btn-sm lg:btn-md  border-white text-white mt-4 rounded-none btn-outline hover:bg-zinc-900  ">View More</Link>
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute md:left-5 left-2 top-1/2 transform -translate-y-1/2 md:btn-lg  text-white dark:text-black  btn-circle btn-sm"
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + slideData.length) % slideData.length)
        }
      >
        ❮
      </button>
      <button
        className="absolute md:right-5 right-2  top-1/2 transform -translate-y-1/2 md:btn-lg  btn-circle btn-sm  text-white dark:text-black "
        onClick={() => setCurrentIndex((prev) => (prev + 1) % slideData.length)}
      >
        ❯
      </button>
    </div>
  );
};

export default Banner;
