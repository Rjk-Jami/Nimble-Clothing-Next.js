"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const slideData = [
  {
    image: "https://res.cloudinary.com/dpphpbkkz/image/upload/v1735155568/banner1_bc5rmf.png",
    title: "Discover the Latest Trends",
  },
  {
    image: "https://res.cloudinary.com/dpphpbkkz/image/upload/v1735155568/banner2_jan7vc.png",
    title: "Exclusive Fashion Deals",
  },
  {
    image: "https://res.cloudinary.com/dpphpbkkz/image/upload/v1735155570/banner4_fkvllc.png",
    title: "New Arrivals Just for You",
  },
  {
    image: "https://res.cloudinary.com/dpphpbkkz/image/upload/v1735155570/banner3_qycb9g.png",
    title: "Upgrade Your Style Today",
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
              className="w-full object-cover"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-center">
              <div className="px-4">
                <h2 className="lg:text-4xl text-xl font-bold">{slide.title}</h2>
                <p className="lg:text-lg text-sm mt-2">Explore our latest collection now!</p>
                <Link href={'/shop'} className="btn btn-sm lg:btn-lg btn-primary mt-4 rounded-none">Shop Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 md:btn-md bg-white  btn-circle btn-xs"
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + slideData.length) % slideData.length)
        }
      >
        ❮
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 md:btn-md  btn-circle btn-xs bg-white "
        onClick={() => setCurrentIndex((prev) => (prev + 1) % slideData.length)}
      >
        ❯
      </button>
    </div>
  );
};

export default Banner;
