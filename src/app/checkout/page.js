"use client"
import Underline from "@/components/design/underline";
import PaymentMethod from "@/components/ForCheckout/PaymentMethod";
import YourOrder from "@/components/ForCheckout/YourOrder";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
      <div className=""></div>
      <div className="">
        <YourOrder></YourOrder>

        <PaymentMethod></PaymentMethod>

        <Underline height="h-[1px]" width="w-full" css="mt-2 mb-2" />
        <section className="text-sm">
            <header className="mb-2">A warning message!!</header>
            <p className="text-justify ">Dear customer, We will be liable to take legal action if the product is not picked up without proper reason after order confirmation. Because, after booking a parcel, if it is returned, the courier company charges us about 200 taka. So please do not confirm the order unnecessarily. After knowing the details please confirm the order only if you like the product. Thank you</p>
        </section>
        <Link href={'/checkout'}><button className="mt-6 w-full bg-orange-500 text-white py-2.5 font-bold uppercase  shadow hover:bg-orange-600 transition">
            Place order
          </button></Link>
      </div>
    </div>
  );
};

export default page;
