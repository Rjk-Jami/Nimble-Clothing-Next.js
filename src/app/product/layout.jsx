/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import AdditionalProductsDetails from '@/components/AdditionalProductsDetails/AdditionalProductsDetails';
import Footer from '@/components/Footer';
import useGetProductById from '@/hooks/UseGetProductById';
import { useParams } from 'next/navigation';
import React from 'react'

const layout = ({children, params}) => {
  
  const { id } = useParams();
  // console.log(id , "params")
  const {product, isLoading, isError, error} = useGetProductById(id)
  return (
    <div className="">
      <div className='pt-20 w-full lg:w-11/12 xl:w-9/12 mx-auto'>
        
        <div className=" ">
          {children}
        </div>
        <div className=" mt-8 pb-20">
        <AdditionalProductsDetails product={product} isLoading={isLoading}></AdditionalProductsDetails>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default layout
