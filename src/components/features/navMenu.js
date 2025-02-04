"use client"
import Link from "next/link";
import Underline from "../design/underline";
import { handleCloseSidebar } from "./sidebarLoginRegister";
import Themes from "@/utils/Themes/Themes";

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
    {
      name: "Login / Register",
      url: "/my-account",
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
                <div className="">
      <Themes  />
      <Underline height={"h-[1px]"} width={"w-full"}></Underline>
      </div>
      </>
    )
  }
  
  export default NavMenu
  