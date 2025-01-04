"use client";
import ResetPassword from '@/components/ResetPassword/ResetPassword'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const token = useParams()
    // console.log(token.token, "token")
  return (
    <div>
      <ResetPassword token={token?.token}></ResetPassword>
    </div>
  )
}

export default page
