"use client";
import Link from "next/link";
import Underline from "../design/underline";
import { handleCloseSidebar } from "./sidebarLoginRegister";
import Themes from "@/utils/Themes/Themes";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/theme/themeSlice";

const navMenuItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Shop",
    url: "/shop",
  },
  // {
  //   name: "Blog",
  //   url: "/blog",
  // },
  {
    name: "About Us",
    url: "/aboutUS",
  },
  {
    name: "Contact Us",
    url: "/contactUs",
  },
  {
    name: "Wishlist",
    url: "/wishList",
  },
  {
    name: "compare",
    url: "/compare",
  },
  // {
  //   name: "Login / Register",
  //   url: "/my-account",
  // },
];

const NavMenu = ({ closeDrawer, handleLogout }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const user = useSelector((state) => state?.auth?.user);
  return (
    <>
      {navMenuItemsData?.map((navItem, index) => (
        <Link
          onClick={() => handleCloseSidebar(closeDrawer)}
          href={navItem.url}
          key={index}
          className="hover:text-black dark:hover:text-white hover:tracking-wider"
        >
          <div className="">
            <span className={`text-base font-semibold uppercase `}>
              {navItem.name}
            </span>

            <Underline height={"h-[1px]"} width={"w-full"}></Underline>
          </div>
        </Link>
      ))}
      <div className="">
        {user?.email ? (
          <Link
            onClick={() => handleCloseSidebar(closeDrawer)}
            href={"/my-account"}
            className="hover:text-black dark:hover:text-white hover:tracking-wider"
          >
            <div className="">
              <span className={`text-base font-semibold uppercase `}>
                My Account
              </span>
              <li className="cursor-pointer font-semibold hover:text-stone-700  dark:hover:text-white dark:text-slate-200">
                <div onClick={handleLogout} className="">
                  Logout
                </div>
              </li>

              <Underline height={"h-[1px]"} width={"w-full"}></Underline>
            </div>
          </Link>
        ) : (
          <Link
            onClick={() => handleCloseSidebar(closeDrawer)}
            href={"/my-account"}
            className="hover:text-black dark:hover:text-white hover:tracking-wider"
          >
            <div className="">
              <span className={`text-base font-semibold uppercase `}>
                Login / Register
              </span>

              <Underline height={"h-[1px]"} width={"w-full"}></Underline>
            </div>
          </Link>
        )}
      </div>
      <div className="">
        <div
          onClick={() => dispatch(toggleTheme())}
          className="cursor-pointer group  flex items-center gap-2"
        >
          <Themes />
          <span
            className={`text-base font-semibold uppercase group-hover:tracking-wider group-hover:text-black dark:group-hover:text-white`}
          >
            {theme === "emerald" ? "Dark" : "Light"}
          </span>
        </div>
        <Underline height={"h-[1px]"} width={"w-full"}></Underline>
      </div>
    </>
  );
};

export default NavMenu;
