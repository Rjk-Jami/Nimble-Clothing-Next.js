"use client";
import React, { useEffect, useState, useCallback } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Image from "next/image";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    "https://res.cloudinary.com/dpphpbkkz/image/upload/v1735155568/banner1_bc5rmf.png",
    "https://res.cloudinary.com/dpphpbkkz/image/upload/v1735155568/banner2_jan7vc.png",
    "https://res.cloudinary.com/dpphpbkkz/image/upload/v1735155570/banner4_fkvllc.png",
    "https://res.cloudinary.com/dpphpbkkz/image/upload/v1735155570/banner3_qycb9g.png",
  ];

  const nextBanner = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, [banners.length]);

  const prevBanner = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  }, [banners.length]);

  useEffect(() => {
    const interval = setInterval(nextBanner, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [nextBanner]);

  return (
    <div className="relative w-full">
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banners[currentIndex]})` }}
      >
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <GrPrevious
            className="text-4xl text-dark hover:text-slate-500 cursor-pointer"
            onClick={prevBanner}
          />
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <GrNext
            className="text-4xl text-dark hover:text-slate-500 cursor-pointer"
            onClick={nextBanner}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
