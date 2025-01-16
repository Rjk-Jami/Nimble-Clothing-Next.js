"use client";
import LoginAndRegistration from "@/components/authenticationSegments/loginAndRegistration";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../loading";
import { useRegistrationMutation } from "../../../redux/auth/authApi";
import Header from "@/utils/Header/Header";
import { TiArrowLeftThick } from "react-icons/ti";
import Underline from "@/components/design/underline";
import DashboardNav from "@/components/Dashboard/DashboardNav/DashboardNav";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const [register, { isLoading }] = useRegistrationMutation();
const pathname = usePathname()
  useEffect(() => {
    if (isLoading) {
      console.log(isLoading, "loading");
    }
  }, [isLoading]);

  const user = useSelector((state) => state.auth.user);

  return (
    <div className="text-black dark:text-white bg-neutral-100 dark:bg-neutral-900 mb-28">
      <Header>My Account</Header>
      <div className="">{isLoading && <Loading />}</div>
      <div className="mt-10">
        {user?.email ? (
          <div className="pt-10 w-11/12 lg:w-9/12 xl:w-8/12 mx-auto">
            <div className="font-sm grid grid-cols-1 md:grid-cols-4 gap-5">
              <div className="">
                <h1 className="text-2xl font-bold">My account</h1>
                <Underline height="h-[1px]" width="w-full" css="mt-2 mb-2" />
                <div className="flex flex-col">
                  <DashboardNav pathname={pathname}></DashboardNav>
                </div>
              </div>
              <div className="md:col-span-3">{children}</div>
            </div>
          </div>
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
