"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useWishListedProductsMutation } from '../../../redux/products/productsApi'
import Table from '@/components/Table/Table'
import ProductsCard from '@/components/ProductsCard/ProductsCard'

const Page = () => {
  const state = useSelector((state)=>state.productsMaster.productWishList)
  console.log(state)
  const [wishListedProducts, { isLoading, isError, isSuccess, error }] =
  useWishListedProductsMutation();
    const [wishProducts, setWishProducts] = useState([])
  
  useEffect(() => {
      const fetchData = async () => {
        if (state && state.length > 0) {
          try {
            const response = await wishListedProducts({productsId:state});
            console.log('Response:', response);
            setWishProducts(response.data?.products)
          } catch (error) {
            console.error('Error:', error);
          }
        }
      };
  
      fetchData();
    }, [state, wishListedProducts]);

    console.log(wishProducts, "wishProducts")
    
  return (
    <div className="mx-10">
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  gap-5'>
      {wishProducts?.map((product, i) => (
          <ProductsCard key={i} product={product}></ProductsCard>
        ))}
    </div>
    </div>
  )
}

export default Page
