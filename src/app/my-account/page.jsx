"use client"
import React from 'react'
import Loading from '../loading'
import { useSelector } from 'react-redux';
import { useLogoutMutation } from '../../../redux/auth/authApi';
import Underline from '@/components/design/underline';


const MyAccount = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  const [logout, { isLoading, isError, error }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout({ user });
    } catch (error) {
      // console.log(error, "nav");
    }
  };
  return (
    <div className='font-sm grid grid-cols-1 md:grid-cols-4 gap-5'>
      <div className="">
       <h1 className='text-2xl font-bold'>My account</h1>
       <Underline height="h-[1px]" width="w-full" css="mt-2 mb-2" />
       
      </div>
      <div className="md:col-span-3">
      <h1 className='mb-2'>Hello <span className='font-bold'>{user.name}</span> (not <span className='font-bold'>{user.name}</span>? <span onClick={()=>handleLogout()} className='font-bold cursor-pointer'>Log out</span>)</h1>
      <p className='text-justify'>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>

      </div>
      
    </div>
  )
}

export default MyAccount
