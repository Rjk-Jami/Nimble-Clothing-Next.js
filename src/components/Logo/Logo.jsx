"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoForLight from "../../../public/Logo for light.png";
import logoForDark from "../../../public/2-removebg-preview.png";

const Logo = () => {
  return (
    <>
      <div className=" dark:hidden">
        <Link className="" href={"/"}>
          <Image width={111}  src={logoForLight} alt="Logo for Light Theme" />{" "}
        </Link>
      </div>
      <div className={` hidden dark:flex `}>
        <Link className="" href={"/"}>
          <Image
            width={111} 
            src={logoForDark}
            alt="Logo for Dark Theme Scrolled"
          />{" "}
        </Link>
      </div>
    </>
  );
};

export default Logo;
