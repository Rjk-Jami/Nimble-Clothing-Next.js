"use client"
import UseScroll from '@/app/hooks/UseScroll';
import React from 'react'
import logoForLight from "../../public/Logo for light.png"
import logoForDark from "../../public/2-removebg-preview.png"
import logoForDark2 from "../../public/logoForDark_top.png"
import Image from 'next/image';
const Navbar = () => {
    const isScrolled = UseScroll();

  return (
    <div>
    <div
      className={`navbar fixed z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-black/50 shadow-md px-10"
          : "bg-transparent dark:text-[#695a47]"
      }`}
    >
      <div className="navbar-start">
        <div className="h-14 dark:hidden">
          <Image height={56} src={logoForLight} alt="Logo for Light Theme" layout="intrinsic" />
        </div>
        <div className={`h-14 hidden ${isScrolled ? "dark:flex" : ""}`}>
          <Image height={56} src={logoForDark} alt="Logo for Dark Theme Scrolled" layout="intrinsic" />
        </div>
        <div className={`h-14 hidden ${isScrolled ? "" : "dark:flex"}`}>
          <Image height={56} src={logoForDark2} alt="Logo for Dark Theme Unscrolled" layout="intrinsic" />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div className="px-1 flex gap-5 font-bold">
          <a className="text-lg dark:hover:text-[#e4e2dd] hover:text-[#171710]">T-Shirts</a>
          <a className="text-lg dark:hover:text-[#e4e2dd] hover:text-[#171710]">Sweatshirt</a>
          <a className="text-lg dark:hover:text-[#e4e2dd] hover:text-[#171710]">Hoodies</a>
          <a className="text-lg dark:hover:text-[#e4e2dd] hover:text-[#171710]">Pants</a>
          <a className="text-lg dark:hover:text-[#e4e2dd] hover:text-[#171710]">Boxers</a>
        </div>
      </div>

      <div className="navbar-end">
        <a className="font-bold px-2" href="#">
          Login / Register
        </a>
        <button className="btn btn-ghost btn-circle">
          {/* <ThemeController height="h-5" weight="w-5" color="fill-current" /> */}
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
  )
}

export default Navbar
