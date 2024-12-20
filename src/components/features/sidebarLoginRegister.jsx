
import { IoClose } from "react-icons/io5";
import Underline from "../design/underline";
import { LuUserRound } from "react-icons/lu";
import Link from "next/link";
import UserLoginSegment from "../authenticationSegments/UserLoginSegment";

const SidebarLoginRegister = () => {
  // for close sidebar
  const handleCloseSidebar = () => {
   
    const drawerInput = document.getElementById("my-drawer-4");
    if (drawerInput) drawerInput.checked = false;
  };

  return (
    <div className="text-base font-semibold">
      <div className="flex justify-between">
        <span>Sign in</span>
        <label htmlFor="my-drawer-4" aria-label="Close sidebar menu">
          <IoClose className="text-2xl" />
        </label>
      </div>
      <Underline height="h-[1px]" width="w-full" css="mt-2 mb-6" />
      <UserLoginSegment></UserLoginSegment>
      <Underline height="h-[1px]" width="w-full" css="mt-6 mb-6" />

      <div className="flex flex-col justify-center items-center">
        <LuUserRound className="text-6xl text-zinc-700 dark:text-slate-200" />
        <h4 className="text-sm mt-2">No account yet?</h4>
        <Link
          href="/my-account"
          className="btn btn-link text-base text-black dark:text-white"
          aria-label="Create an account"
          onClick={handleCloseSidebar} // Add this click handler
        >
          Create an Account
        </Link>
      </div>
    </div>
  );
};

export default SidebarLoginRegister;
