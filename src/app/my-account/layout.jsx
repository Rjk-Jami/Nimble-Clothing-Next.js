"use client"
import LoginAndRegistration from "@/components/authenticationSegments/loginAndRegistration";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
    // const user = false
    const user = useSelector((state) => state.auth)
  console.log(user)
  return (
    <div className="text-black  dark:text-white dark:bg-black mb-28">
      <div className="pt-20 lg:pt-32 pb-5">
        <div className="flex justify-between items-center  flex-col">
          <h1 className="lg:text-7xl text-6xl font-bold tracking-widest">My Account</h1>
          {/* <div className="breadcrumbs text-sm ">
            <ul>
              <li>
                <Link href="/" className="tracking-widest">Home</Link>
              </li>
              <li>
                <Link href={'/my-account'}>My Account</Link>
              </li>
              
            </ul>
          </div> */}
        </div>
      </div>
      <div className="mt-10">
      {
        user.token ? children : <>
        <div className=" flex justify-center items-center">
            <LoginAndRegistration></LoginAndRegistration>
        </div>
        </>  
      }
      </div>
    </div>
  );
};

export default Layout;
