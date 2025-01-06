"use client";
import { GrCart } from "react-icons/gr";

import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GrCompare } from "react-icons/gr";
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
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../../redux/auth/authSlice";
import { useLogoutMutation } from "../../redux/auth/authApi";

const Navbar = () => {
  const logoSection = (
    <>
      <div className="h-14 dark:hidden">
        <Link className="" href={"/"}>
          <Image height={56} src={logoForLight} alt="Logo for Light Theme" />{" "}
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
    </>
  );
  const isScrolled = UseScroll();
  const pathname = usePathname();
  // console.log(pathname);
  const user = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();
  const [logout, { isLoading, isError, error }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout({ user });
    } catch (error) {
      console.log(error, "nav");
    }
  };
  return (
    <div>
      <div
        className={`  dark:text-white navbar fixed z-50  ${
          pathname === "/" ? "" : "bg-white dark:bg-black"
        }  ${
          isScrolled
            ? "bg-white shadow-md lg:px-20 dark:bg-black lg:transition-all delay-100"
            : "dark:bg-black/50 lg:transition-all delay-0"
        }`}
      >
        <div className="navbar-start">
          <div className="hidden lg:flex">{logoSection}</div>
          <div className=" block lg:hidden">
            <Drawer labelType="menu" position="left" drawerId="my-drawer">
              <div className=" flex flex-col gap-2 justify-center p-4">
                <NavMenu closeDrawer={"my-drawer"}></NavMenu>
              </div>
            </Drawer>
          </div>
        </div>

        <div className="navbar-center ">
          <div className="px-1  hidden lg:flex gap-5 font-bold">
            <NavProductsItem pathname={pathname}></NavProductsItem>
          </div>
          <div className="block lg:hidden">{logoSection}</div>
        </div>

        <div className="navbar-end">
          {/* right side  */}
          <div className="hidden lg:flex">
            {user?.email ? (
              <div className="">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="font-bold p-4">
                    <Link href="/my-account">My Account</Link>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  bg-base-100  z-[1] w-52 p-4 "
                  >
                    <li className="cursor-pointer font-semibold hover text-stone-700 hover:text-black dark:hover:text-white dark:text-slate-200">
                      <div onClick={handleLogout} className="">
                        Logout
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
             
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
             
            )}
          </div>

          <div className="flex  justify-items-center items-center gap-3">
            <Themes className={"hidden lg:block"} />
            {/*  height="h-5" weight="w-5" color="fill-current" */}

            {/* left side   */}
            {/* for lg */}

            <div className="hidden lg:block">
            <Drawer labelType="menu" position="left" drawerId="my-drawer-2">
              <div className="flex flex-col gap-2 justify-center p-4">
                <NavMenu closeDrawer={"my-drawer-2"} />
              </div>
            </Drawer>
            </div>

            <button className=" hidden lg:block text-xl">
              <FaSearch></FaSearch>
            </button>
            <Link href={"/compare"} className="hidden lg:block text-xl">
              <GrCompare></GrCompare>
            </Link>

            <Link href={"/wishList"} className="hidden lg:block text-xl">
              <FaRegHeart></FaRegHeart>
            </Link>
            <button className=" text-xl">
              <GrCart></GrCart>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
