"use client"
import React from 'react'

const FreeShipping = ({subTotal}) => {
  return (
    <div className="px-8 pt-8 pb-4 border border-dashed  border-black dark:border-white">
          {subTotal <= 1200 ? (
            <p className="text-sm ">
              Add <span className="font-bold">{1200 - subTotal}</span>৳ to cart
              and get free shipping!
            </p>
          ) : (
            <p className='text-sm'>Your order qualifies for <span className='font-bold'>free</span> shipping!</p>
          )}
          <progress
            className="progress progress-primary w-full rounded-s-none"
            value={subTotal}
            max="1200"
          ></progress>
        </div>
  )
}

export default FreeShipping
