"use client";
import { GrCart } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GrCompare } from "react-icons/gr";
import React, { useEffect } from "react";


import Themes from "@/utils/Themes/Themes";
import UseScroll from "@/hooks/UseScroll";
import Link from "next/link";

import { usePathname } from "next/navigation";
import Drawer from "./DynamicComponents/DrawerLayouts.jsx/DrawerLayouts";
import NavProductsItem from "./features/produtsMenu";
import NavMenu from "./features/navMenu";
import SidebarLoginRegister from "./features/sidebarLoginRegister";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../../redux/auth/authSlice";
import { useLogoutMutation } from "../../redux/auth/authApi";
import SidebarCart from "./features/SidebarCart";
import Logo from "./Logo/Logo";

const Navbar = () => {
  const cartQuantity = useSelector((state) =>
    state.productsMaster?.productsCart?.reduce(
      (total, product) => total + product.quantity,
      0
    )
  );
 
  const isScrolled = UseScroll();
  const pathname = usePathname();
  // console.log(pathname);
  const user = useSelector((state) => state?.auth?.user);
  const compareProductsLength = useSelector(
    (state) => state?.productsMaster.productCompare.length
  );
  const dispatch = useDispatch();
  const [logout, { isLoading, isError, error }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout({ user });
    } catch (error) {
      // console.log(error, "nav");
    }
  };

    // Force page to scroll to top on route change
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  return (
    
      <div
        className={`fixed top-0 left-0 w-full z-50 dark:text-white navbar shadow-md  bg-white dark:bg-black px-10 lg:px-20 transition-all`}
      >
        <div className="navbar-start">
          <div className="hidden lg:flex"><Logo></Logo></div>
          <div className=" block lg:hidden">
            <Drawer labelType="menu" position="left" drawerId="my-drawer-3">
              <div className=" flex flex-col gap-2 justify-center p-4">
                <NavMenu handleLogout={handleLogout} closeDrawer={"my-drawer-3"}></NavMenu>
              </div>
            </Drawer>
          </div>
        </div>

        <div className="navbar-center ">
          <div className="px-1  hidden lg:flex gap-5 font-bold">
            <NavProductsItem pathname={pathname}></NavProductsItem>
          </div>
          <div className="block lg:hidden"><Logo></Logo></div>
        </div>

        <div className="navbar-end">
          {/* right side  */}
          <div className="hidden lg:flex">
            {user?.email ? (
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="font-bold p-4">
                  <Link href="/my-account">My Account</Link>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content bg-base-100 z-[1] w-52 p-4"
                >
                  <li className="cursor-pointer font-semibold hover:text-stone-700  dark:hover:text-white dark:text-slate-200">
                    <div onClick={handleLogout} className="">
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            ) : user?.email ? (
              <Link href={"/my-account"} className="font-bold px-2">
                My Account
              </Link>
            ) : pathname === "/my-account" ? (
              <Link href={"/my-account"} className="font-bold px-2">
                Login / Register
              </Link>
            ) : (
              <Drawer
                labelType="nav"
                labelContent="Login / Register"
                position="right"
                drawerId="my-drawer-4"
              >
                <div className="flex flex-col gap-2 justify-center p-4">
                  <SidebarLoginRegister />
                </div>
              </Drawer>
            )}
          </div>

          <div className="flex  justify-items-center items-center gap-3">
            <div className="hidden lg:block">
            <Themes  />
            </div>

            {/* left side   */}
            {/* for lg */}

            <div className="hidden lg:block">
              <Drawer labelType="menu" position="left" drawerId="my-drawer-2">
                <div className="flex flex-col gap-2 justify-center p-4">
                  <NavMenu closeDrawer={"my-drawer-2"} />
                </div>
              </Drawer>
            </div>

            <div className="">
              <button className=" hidden lg:block text-xl">
                <FaSearch></FaSearch>
              </button>
            </div>
            <Link href={"/compare"} className="hidden lg:block text-xl">
              <div className="indicator flex items-center">
                <GrCompare></GrCompare>

                <span className="bg-orange-600 text-white dark:text-black px-1 text-xs rounded-full indicator-item ">
                  {compareProductsLength}
                </span>
              </div>
            </Link>

            <Link href={"/wishList"} className="hidden lg:block text-xl">
              <FaRegHeart></FaRegHeart>
            </Link>
            <div className="">
              {pathname === "/viewCart" || pathname === "/checkout" ? (
                <Link href={"/viewCart"}>
                  <div className="indicator">
                    <GrCart className="text-xl drawer-button cursor-pointer"></GrCart>
                    <span className="bg-orange-600  text-white dark:text-black px-1 text-xs rounded-full indicator-item ">
                      {cartQuantity}
                    </span>
                  </div>
                </Link>
              ) : (
                <Drawer
                  labelType="cart"
                  position="right"
                  drawerId="cart-drawer"
                >
                  <SidebarCart></SidebarCart>
                </Drawer>
              )}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Navbar;
