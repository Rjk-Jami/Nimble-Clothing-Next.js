"use client";

import React from "react";
import logoForLight from "../../public/Logo for light.png";
import logoForDark from "../../public/2-removebg-preview.png";
import logoForDark2 from "../../public/logoForDark_top.png";
import Image from "next/image";
import Themes from "@/utils/Themes/Themes";
import UseScroll from "@/hooks/UseScroll";
import Link from "next/link";
import { TfiMenu } from "react-icons/tfi";

import { usePathname } from "next/navigation";
import Drawer from "./DynamicComponents/DrawerLayouts.jsx/DrawerLayouts";
import NavProductsItem from "./features/produtsMenu";
import NavMenu from "./features/navMenu";
import SidebarLoginRegister from "./features/sidebarLoginRegister";

const Navbar = () => {
  const isScrolled = UseScroll();
  const pathname = usePathname();
  // console.log(pathname);
  
  
  return (
    <div>
      <div
        className={`  dark:text-white navbar fixed z-50  ${pathname === "/" ? "": "bg-white dark:bg-black" }  ${
          isScrolled
            ? "bg-white shadow-md lg:px-20 dark:bg-black lg:transition-all delay-100"
            : "dark:bg-black/50 lg:transition-all delay-0"
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
          <div className={`h-14 hidden dark:flex`}>
            <Link className="" href={"/"}>
              <Image
                height={56}
                src={logoForDark}
                alt="Logo for Dark Theme Scrolled"
              />{" "}
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <div className="px-1 flex gap-5 font-bold">
           
            <NavProductsItem pathname={pathname}></NavProductsItem>
            
          </div>
        </div>

        <div className="navbar-end">
          <div className="">
            <Drawer
              labelType="nav"
              labelContent="Login / Register"
              position="right"
              drawerId="my-drawer-4"
            >
              <div className=" flex flex-col gap-2 justify-center p-4">
              <SidebarLoginRegister></SidebarLoginRegister>
              </div>
            </Drawer>
          </div>

          <button className="btn btn-ghost btn-circle">
            <Themes height="h-5" weight="w-5" color="fill-current" />
            {/*  height="h-5" weight="w-5" color="fill-current" */}
          </button>

          <div className="">
            <Drawer labelType="menu" position="left" drawerId="my-drawer">
            <div className=" flex flex-col gap-2 justify-center p-4">
            <NavMenu></NavMenu>
              </div>
            </Drawer>
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
