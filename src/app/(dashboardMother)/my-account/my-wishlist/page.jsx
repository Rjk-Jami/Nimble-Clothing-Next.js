import Wishlist from '@/app/wishList/page'
import React from 'react'

const DashboardWishlist = () => {
  return (
    <div>
      <h1 className='text-lg font-bold'>My Wishlist</h1>
      <div className="mt-4">
      <Wishlist></Wishlist>
      </div>
    </div>
  )
}

export default DashboardWishlist
