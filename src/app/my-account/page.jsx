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
    <div className='font-sm '>
      {isLoading && <Loading></Loading>}
      
      <h1 className='mb-2'>Hello <span className='font-bold'>{user.name}</span> (not <span className='font-bold'>{user.name}</span>? <span onClick={()=>handleLogout()} className='font-bold cursor-pointer'>Log out</span>)</h1>
      <p className='text-justify'>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>

   
      
    </div>
  )
}

export default MyAccount
