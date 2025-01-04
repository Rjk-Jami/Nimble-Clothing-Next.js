"use client"
import LoginAndRegistration from "@/components/authenticationSegments/loginAndRegistration";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../loading";
import { useRegistrationMutation } from "../../../redux/auth/authApi";

const Layout = ({ children }) => {
  const [register, { isLoading, isError, error }] = useRegistrationMutation();
  useEffect(() => {
    if(isLoading){
      console.log( isLoading,'loading')
    }
  
  },[isLoading])
    // const user = false
    const user = useSelector((state) => state.auth.user)
  // console.log(user)
  return (
    <div className="text-black  dark:text-white dark:bg-black mb-28">
      <div className="pt-20 lg:pt-32 pb-5">
        <div className="flex justify-between items-center  flex-col">
          <h1 className="lg:text-7xl text-6xl font-bold tracking-widest">My Account</h1>
          
        </div>
      </div>
      <div className="">
      {isLoading && <Loading />}
      </div>
      <div className="mt-10">
      
      {
        user?.email ? children : <>
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
