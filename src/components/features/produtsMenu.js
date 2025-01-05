"use client"
const { default: Link } = require("next/link");


 export const navProductsItemsData = [
    {
      name: "Sweatshirt",
      url: "/products-category/sweatshirts",
    },
    {
      name: "T-Shirts",
      url: "/products-category/t-shirts",
    },
    {
      name: "Hoodies",
      url: "/products-category/hoodies",
    },
    {
      name: "Pants",
      url: "/products-category/pants",
    },
    {
      name: "Boxers",
      url: "/products-category/boxers",
    },
  ];
  export const LinkButtonStyle = `relative  before:content-[''] before:absolute before:top-full before:left-0 before:w-0 before:h-[2px] before:bg-primary dark:before:bg-white before:transition-[width] before:duration-400 before:ease-[cubic-bezier(0.19,1,0.22,1)]`
  const NavProductsItem = ({ pathname }) => {
    
    return (
      <>
        {navProductsItemsData.map((navItem, index) => (
          <Link href={navItem.url} key={index}>
            <span
              className={` ${LinkButtonStyle} ${
                pathname === navItem.url ? "before:w-full" : "hover:before:w-2/3"
              }`}
            >
              {navItem.name}
            </span>
          </Link>
        ))}
      </>
    );
  };

  export default NavProductsItem