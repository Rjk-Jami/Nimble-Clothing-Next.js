"use client";
import LoginAndRegistration from "@/components/authenticationSegments/loginAndRegistration";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../loading";
import { useRegistrationMutation } from "../../../redux/auth/authApi";
import Header from "@/utils/Header/Header";
import { TiArrowLeftThick } from "react-icons/ti";

const Layout = ({ children }) => {
  const [register, { isLoading, isError, error }] = useRegistrationMutation();
  useEffect(() => {
    if (isLoading) {
      console.log(isLoading, "loading");
    }
  }, [isLoading]);
  // const user = false
  const user = useSelector((state) => state.auth.user);
  // console.log(user)
  return (
    <div className="text-black  dark:text-white dark:bg-black mb-28">
      <Header> My account</Header>
      <div className="">{isLoading && <Loading />}</div>
      <div className="mt-10">
        {user?.email ? (
          <div className="pt-10 w-11/12 xl:w-10/12 mx-auto">
            {children}
          </div>
        ) : (
          <>
            <div className=" flex justify-center items-center">
              <LoginAndRegistration></LoginAndRegistration>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
