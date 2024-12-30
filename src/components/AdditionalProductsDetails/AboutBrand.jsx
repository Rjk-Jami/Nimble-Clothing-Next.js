import React from "react";
import logoForLight from "../../../public/Logo for light.png";
import logoForDark from "../../../public/2-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

const AboutBrand = () => {
  return (
    <div className="w-3/4 lg:w-4/5 mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  text-sm">
        <div className="flex flex-col gap-2">
          {/* logo */}
          <div className="">
            <div className="h-14 dark:hidden">
              <Image
                height={56}
                src={logoForLight}
                alt="Logo for Light Theme"
              />
            </div>
            <div className={`h-14 hidden dark:flex`}>
              <Image
                height={56}
                src={logoForDark}
                alt="Logo for Dark Theme Scrolled"
              />
            </div>
          </div>
          <div className=" text-justify">
            <p>
              At Nimble Ware, we believe that fashion should be as powerful and
              dynamic as a volcanic eruption. Born out of a desire to create
              clothing that makes a statement, we focus on blending high-quality
              materials with bold designs that resonate with those who live life
              with passion and intensity.
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-2 text-justify">
          <h2 className="font-bold">Why Choose Us?</h2>
          <ul className="list-disc list-inside flex flex-col gap-1">
            <li>
              <span className="font-bold">Quality You Can Trust:</span> Premium
              fabrics and long-lasting construction.
            </li>
            <li>
              <span className="font-bold">Unique Designs:</span> Stand out with
              our eye-catching prints and themes.
            </li>
            <li>
              <span className="font-bold">Comfort Meets Style:</span> Whether
              lounging or exploring, feel great in every piece.
            </li>
          </ul>
          <Link
            href="/shop"
            className=" underline underline-offset-1 font-bold"
          >
            <h3>MORE PRODUCTS</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutBrand;
