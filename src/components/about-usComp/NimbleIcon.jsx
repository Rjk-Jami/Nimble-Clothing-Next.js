"use client"
import Image from 'next/image'
import React from 'react'

const NimbleIcon = ({width, height, className}) => {
  return (
    <div>
      <Image className={`p-3 ${className}`} width={width} height={height} src={"https://res.cloudinary.com/dpphpbkkz/image/upload/c_crop,w_430,h_430/v1738828352/Nimble_oxa9rb.png"}  alt='nimbleIcon'></Image>
    </div>
  )
}

export default NimbleIcon
