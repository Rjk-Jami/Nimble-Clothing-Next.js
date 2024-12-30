import React from 'react'
import { FaTshirt } from 'react-icons/fa'
import { FaClone, FaCottonBureau, FaFireFlameCurved } from 'react-icons/fa6'

const Descriptions = ({product}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-10 lg:m-0 ">
    <div className="text-sm mx-auto w-fu  text-justify">
      {product?.description}
    </div>
    <div className="grid grid-cols-2 gap-4 text-sm  ">
      <div className="flex flex-col  items-center">
        <FaCottonBureau className="text-2xl"></FaCottonBureau>
        <p className="font-bold">100% cotton</p>
      </div>
      <div className="flex flex-col  items-center">
        <FaTshirt className="text-2xl"></FaTshirt>
        <p className="font-bold">Regular Fit</p>
      </div>
      <div className="flex flex-col  items-center">
        <FaClone className="text-2xl"></FaClone>
        <p className="font-bold">180 GSM</p>
      </div>
      <div className="flex flex-col  items-center">
        <FaFireFlameCurved className="text-2xl"></FaFireFlameCurved>
        <p className="font-bold">Bold Design</p>
      </div>
    </div>
  </div>
  )
}

export default Descriptions
