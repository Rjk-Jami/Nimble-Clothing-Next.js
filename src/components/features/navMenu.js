"use client"
import Link from "next/link";
import Underline from "../design/underline";
import { handleCloseSidebar } from "./sidebarLoginRegister";

const navMenuItemsData = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Shop",
      url: "/shop",
    },
    {
      name: "Blog",
      url: "/blog",
    },
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
      url: "/wishlist",
    },
    {
      name: "compare",
      url: "/compare",
    },
    {
      name: "Login / Register",
      url: "/auth",
    },
  ];

  
  const NavMenu = ({closeDrawer}) => {
    return (
      <>
        {navMenuItemsData?.map((navItem, index) => (
                  
                  <Link onClick={()=>handleCloseSidebar(closeDrawer)}  href={navItem.url} key={index} className="hover:text-black dark:hover:text-white hover:tracking-wider">
                    <div  className="">
                    
                      <span className={`text-base font-semibold uppercase `}>
                        {navItem.name}
                      </span>
                    
                      <Underline height={"h-[1px]"} width={"w-full"}></Underline>
                    </div>
                    </Link>
                ))}
      </>
    )
  }
  
  export default NavMenu
  