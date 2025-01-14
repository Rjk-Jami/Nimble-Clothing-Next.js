"use client"
import { IoClose } from "react-icons/io5";
import Underline from "../design/underline";
import { LuUserRound } from "react-icons/lu";
import Link from "next/link";
import UserLoginSegment from "../authenticationSegments/UserLoginSegment";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import ErrorAlert from "../Alert/ErrorAlert";
 
export const handleCloseSidebar = (drawerId) => {

  const drawerInput = document.getElementById(drawerId);
  if (drawerInput) drawerInput.checked = false;
};

const SidebarLoginRegister = () => {
    const errorMassage = useSelector((state) => state.auth.errorMassage);  

  // for close sidebar
const [isHide, setIsHide] = useState(true);
const pathname = usePathname();
const handleHideAndClose = (drawerId2) => {
  handleCloseSidebar(drawerId2)
if (pathname === "/my-account") {
  setIsHide(true);
}
else{
  setIsHide(false);  
}
}


  return (
    <div className={`text-base font-semibold  ${isHide ? "block" : "opacity-0"}`}>
      <div className="flex justify-between">
        <span>Sign in</span>
        <label htmlFor="my-drawer-4" aria-label="Close sidebar menu">
          <IoClose className="text-2xl" />
        </label>
      </div>
      <Underline height="h-[1px]" width="w-full" css="mt-2 mb-6" />
      <div className="">
        {errorMassage && <ErrorAlert>{errorMassage}</ErrorAlert>}
      </div>
      <UserLoginSegment></UserLoginSegment>
      <Underline height="h-[1px]" width="w-full" css="mt-6 mb-6" />

      <div className="flex flex-col justify-center items-center">
        <LuUserRound className="text-6xl text-zinc-700 dark:text-slate-200" />
        <h4 className="text-sm mt-2">No account yet?</h4>
        <Link
          href="/my-account"
          className="btn btn-link text-base text-black dark:text-white"
          aria-label="Create an account"
          onClick={()=>handleHideAndClose("my-drawer-4")} // Add this click handler
        >
          Create an Account
        </Link>
      </div>
    </div>
  );
};

export default SidebarLoginRegister;
