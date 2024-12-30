import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { TbPackages } from "react-icons/tb";

const ShippingAndDelivery = () => {
return (
    <div className=' mx-10 mt-10 text-sm'>
        <div className="">
            <div className="  ">
            <div className=" mb-4 flex justify-between items-center">
            <h2 className='font-bold mb-2'>Shipping & Delivery Information</h2>
            <div className=" flex gap-5 ">
            <FaShippingFast className='text-7xl'></FaShippingFast>
            <TbPackages className='text-7xl'></TbPackages>
            </div>
            </div>
        <p className='mb-1 text-justify'>
            At Volcano bd, we prioritize fast and reliable delivery to ensure you receive your orders promptly, no matter where you are in Bangladesh. We’ve partnered with Pathao, a trusted local courier service, to provide swift delivery to all our customers. For orders within Dhaka, expect delivery within 24 to 48 hours. For orders outside Dhaka, it takes between 48 to 72 hours to reach your location. No matter the destination, we are committed to delivering your favorite Volcano bd clothing right to your doorstep, efficiently and on time.
        </p>
        <p className='text-justify'>
            To ensure that your items arrive in perfect condition, we take extra care with our packaging. Each item is securely packed to preserve its quality and appearance throughout transit. Whether it’s a t-shirt, hoodie, or any other item from our collection, you can trust that it will be delivered to you in pristine condition. Our goal is to provide you with a smooth and hassle-free shopping experience from the moment you place your order to the time it arrives at your door.
        </p>
            </div>
            
        </div>
    </div>
)
}

export default ShippingAndDelivery
