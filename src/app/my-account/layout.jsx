import LoginAndRegistration from "@/components/authenticationSegments/loginAndRegistration";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
    let user = false
  return (
    <div className="text-black  dark:text-white dark:bg-black">
      <div className="pt-32 pb-5">
        <div className="flex justify-center items-center gap-2 flex-col">
          <h1 className="text-7xl font-bold tracking-widest">My Account</h1>
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
      {
        user ? children : <>
        <div className="">
            <LoginAndRegistration></LoginAndRegistration>
        </div>
        </>  
      }
    </div>
  );
};

export default layout;
