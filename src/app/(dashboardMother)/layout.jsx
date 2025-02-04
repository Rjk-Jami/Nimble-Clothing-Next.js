"use client";
import LoginAndRegistration from "@/components/authenticationSegments/loginAndRegistration";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../loading";
import { useRegistrationMutation } from "../../../redux/auth/authApi";
import Header from "@/utils/Header/Header";
import { TiArrowLeftThick } from "react-icons/ti";
import Underline from "@/components/design/underline";
import DashboardNav from "@/components/Dashboard/DashboardNav/DashboardNav";
import { usePathname } from "next/navigation";
import ErrorAlert from "@/components/Alert/ErrorAlert";

const Layout = ({ children }) => {
  const [register, { isLoading }] = useRegistrationMutation();
  const pathname = usePathname();
  const [showError, setShowError] = useState(true);

  useEffect(() => {
    if (isLoading) {
      console.log(isLoading, "loading");
    }
  }, [isLoading]);

  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (user && !user.isVerified) {
      setShowError(true); 
      const timer = setTimeout(() => setShowError(false), 30000);
      return () => clearTimeout(timer);
    }
  }, [user]);

  return (
    <div className=" text-black dark:text-white bg-neutral-100 dark:bg-neutral-900 mb-28">
      <Header>My Account</Header>

      <div className="mt-10">
        {user?.email ? (
          <>
            {showError && !user?.isVerified && (
              <div className="mx-10 lg:mx-20">
                <ErrorAlert>
                  <span className="font-bold">
                    Please verify your account to set your password. A password
                    setup link has been sent to your email address.
                  </span>
                </ErrorAlert>
              </div>
            )}

            <div className="">
              <div className="font-sm grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="mx-10 lg:mx-20">
                  <h1 className="text-2xl font-bold">My account</h1>
                  <Underline height="h-[1px]" width="w-full" css="mt-2 mb-2" />
                  <div className="flex flex-col">
                    <DashboardNav pathname={pathname}></DashboardNav>
                  </div>
                </div>
                <div className="md:col-span-3 me-10 lg:me-20">{children}</div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center">
            <LoginAndRegistration />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
