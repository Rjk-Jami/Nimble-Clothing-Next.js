// this a Layout for Dashboard
"use client";
import LoginAndRegistration from "@/components/authenticationSegments/loginAndRegistration";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../loading";
import { useRegistrationMutation } from "../../../redux/auth/authApi";
import Header from "@/utils/Header/Header";
import Underline from "@/components/design/underline";
import DashboardNav from "@/components/Dashboard/DashboardNav/DashboardNav";
import { usePathname } from "next/navigation";
import ErrorAlert from "@/components/Alert/ErrorAlert";
import Image from "next/image";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  const [register, { isLoading }] = useRegistrationMutation(); //register user
  const pathname = usePathname();
  // console.log(pathname)
  const [showError, setShowError] = useState(true);
  const user = useSelector((state) => state.auth.user); // get user from redux store

  // if user is not verified show this error message
  useEffect(() => {
    if (user && !user.isVerified) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 30000);
      return () => clearTimeout(timer);
    }
  }, [user]);

  return (
    <div className=" z-10">
      <div className="text-black dark:text-white bg-neutral-100 dark:bg-neutral-900 pb-28">
        <Header>My Account</Header>

        <div className="mt-10">
          {/* if user logged in show dashboard or show login page */}

          {user?.email ? (
            <>
              {/* dashboard start */}
              {showError && !user?.isVerified && (
                <div className="mx-10 lg:mx-20">
                  <ErrorAlert>
                    <span className="font-bold">
                      Please verify your account to set your password. A
                      password setup link has been sent to your email address.
                    </span>
                  </ErrorAlert>
                </div>
              )}

              <div>
                <div className="font-sm grid grid-cols-1 md:grid-cols-4 gap-5">
                  <div className="mx-10 lg:mx-20">
                    <div className="flex items-center gap-2 justify-center lg:justify-normal">
                      <Image
                        src={user.avatar}
                        width={50}
                        height={50}
                        alt="avatar"
                      />
                      <h1 className="font-bold">{user?.name.slice(0, 4)}</h1>
                    </div>
                    <Underline
                      height="h-[1px]"
                      width="w-full"
                      css="mt-2 mb-2"
                    />
                    <div className="flex flex-wrap lg:flex-col justify-center">
                      <DashboardNav pathname={pathname} />
                    </div>
                  </div>
                  <div className="md:col-span-3 mx-10 lg:mx-0 lg:me-20">
                    {children}
                  </div>
                </div>
              </div>
              {/* dashboard end */}
            </>
          ) : (
            // login menu start
            <div className="flex justify-center items-center">
              <LoginAndRegistration />
            </div>
            // login menu end
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
