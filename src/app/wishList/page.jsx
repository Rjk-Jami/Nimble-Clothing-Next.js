"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useWishListedProductsMutation } from '../../../redux/products/productsApi'
import Table from '@/components/Table/Table'

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
    const columns = [
      {header: "Name", tag: "name"},
      {header: "Image", tag: "image"},
      {header: "Price", tag: "price"},
      {header: "View Product", tag: "viewProduct"},
      {header: "Description", tag: "description"},
      {header: "Size", tag: "size"},
      {header: "Availability", tag: "availability"},
    ]
    const data =[
      {name:"", image:"",price:"",viewProduct:"", description:"",size:"",availability:""}
    ]
  return (
    <div>
      <Table columns={columns} data={data} className={"mt-10"}></Table>
    </div>
  )
}

export default Page
