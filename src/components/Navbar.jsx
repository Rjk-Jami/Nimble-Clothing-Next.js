"use client";

import React from "react";
import logoForLight from "../../public/Logo for light.png";
import logoForDark from "../../public/2-removebg-preview.png";
import logoForDark2 from "../../public/logoForDark_top.png";
import Image from "next/image";
import Themes from "@/utils/Themes/Themes";
import UseScroll from "@/hooks/UseScroll";
import Link from "next/link";

import { usePathname } from "next/navigation";


const Navbar = () => {
  const isScrolled = UseScroll();
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <div>
      <div
        className={`navbar fixed z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white dark:bg-black dark:text-white shadow-md px-10"
            : "bg-transparent dark:text-[#695a47]"
        }`}
      >
        <div className="navbar-start">
          <div className="h-14 dark:hidden">
            <Link className="" href={"/"}>
              <Image
                height={56}
                src={logoForLight}
                alt="Logo for Light Theme"
                 
              />{" "}
            </Link>
          </div>
          <div className={`h-14 hidden ${isScrolled ? "dark:flex" : ""}`}>
            <Link className="" href={"/"}>
              <Image
                height={56}
                src={logoForDark}
                alt="Logo for Dark Theme Scrolled"
                 
              />{" "}
            </Link>
          </div>
          <div className={`h-14 hidden ${isScrolled ? "" : "dark:flex"}`}>
            <Link className="" href={"/"}>
              <Image
                height={56}
                src={logoForDark2}
                alt="Logo for Dark Theme Unscrolled"
                 

              />{" "}
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <div className="px-1 flex gap-5 font-bold">
            <Link
              className={`relative text-lg before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-[width] before:duration-400 before:ease-[cubic-bezier(0.19,1,0.22,1)] ${
                pathname === "/products-category/sweatshirts"
                  ? "before:w-full"
                  : "hover:before:w-2/3"
              }`}
              href={`/products-category/sweatshirts`}
            >
              Sweatshirt
            </Link>
            <Link
              className={`relative text-lg before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-[width] before:duration-400 before:ease-[cubic-bezier(0.19,1,0.22,1)]  ${
                pathname === "/products-category/t-shirts"
                  ? "before:w-full"
                  : "hover:before:w-2/3"
              }`}
              href={`/products-category/t-shirts`}
            >
              T-Shirts
            </Link>
            <Link
              className={`relative text-lg before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-[width] before:duration-400 before:ease-[cubic-bezier(0.19,1,0.22,1)]  ${
                pathname === "/products-category/hoodies" ? "before:w-full" : "hover:before:w-2/3"
              }`}
              href={`/products-category/hoodies`}
            >
              Hoodies
            </Link>
            <Link
              className={`relative text-lg before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-[width] before:duration-400 before:ease-[cubic-bezier(0.19,1,0.22,1)]  ${
                pathname === "/products-category/pants" ? "before:w-full" : "hover:before:w-2/3"
              }`}
              href={`/products-category/pants`}
            >
              Pants
            </Link>
            <Link
              className={`relative text-lg before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-[width] before:duration-400 before:ease-[cubic-bezier(0.19,1,0.22,1)]  ${
                pathname === "/products-category/boxers" ? "before:w-full" : "hover:before:w-2/3"
              }`}
              href={`/products-category/boxers`}
            >
              Boxers
            </Link>
          </div>
        </div>

        <div className="navbar-end">
          <a className="font-bold px-2" href="#">
            Login / Register
          </a>
          <button className="btn btn-ghost btn-circle">
            <Themes height="h-5" weight="w-5" color="fill-current" />
            {/*  height="h-5" weight="w-5" color="fill-current" */}
          </button>
          <div>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost btn-circle drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
