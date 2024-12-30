"use client";
import Link from 'next/link';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const SocialMediaShare = ({ id }) => {
    const url = `https://example.com/product/${id}`;

    return (
        <div className='text-sm font-semibold flex gap-1 items-center'>
            <div className="">
                <p>Share:</p>
            </div>
           <div className=" flex gap-2">
           <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                target="_blank"
                
            >
                <FaFacebook></FaFacebook>
            </Link>
        
            <Link
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`}
                target="_blank"
              
            >
                <FaWhatsapp></FaWhatsapp>
            </Link>
            
            <Link
                href={`https://t.me/share/url?url=${encodeURIComponent(url)}`}
                target="_blank"
              
            >
               <FaTelegram></FaTelegram>
            </Link>
           </div>
        </div>
    );
};

export default SocialMediaShare;