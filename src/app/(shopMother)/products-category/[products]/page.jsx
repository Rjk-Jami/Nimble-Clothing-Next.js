"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import  category  from '../../layout'

const page = ( ) => {
// eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();

const getCategory = () => {
  const categories = {
    "/products-category/sweatshirts": "Sweatshirts",
    "/products-category/t-shirts": "T-Shirts",
    "/products-category/hoodies": "Hoodies",
    "/products-category/pants": "Pants",
    "/products-category/boxers": "Boxers",
    "/shop": "allProducts",
  };
  return categories[pathname] || "allProducts";
};
const category = getCategory()
console.log(category)
  return (
    <div>
     
    </div>
  )
}

export default page
