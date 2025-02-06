import NimbleIcon from "@/components/about-usComp/NimbleIcon";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo/Logo";
import Header from "@/utils/Header/Header";

import React from "react";

const AboutUs = () => {

  return (
    <div>
      <Header>About us</Header>
      <div className=" mt-10 mb-10 flex flex-col md:flex-row gap-4 justify-around items-start mx-10 md:mx-20">
        <div className="mx-auto">
          <NimbleIcon className={"hidden md:block"} width={430} height={430}></NimbleIcon>
          <NimbleIcon className={"md:hidden"} width={300} height={300}></NimbleIcon>
          <p className="text-center font-bold ">Nimble Ventures</p>
          
        </div>
        <div className="text-base-content md:w-3/5 text-justify">
        <div className="float-right  ps-5">
          <Logo></Logo>
          </div>
          <p className="mb-4">At Nimble Ware Bangladesh, we believe clothing is more than just what you wear—it&rsquo;s an expression of your personality. Our apparel blends comfort, style, and versatility, designed for those who move with confidence and ease. From t-shirts and hoodies to sweatpants, boxers, and more, every piece is crafted with quality and individuality in mind.</p>

          <p className="mb-4">Founded with a passion for originality, our mission is to deliver fashion that not only looks good but feels incredible. Whether you&rsquo;re keeping it casual or stepping out in style, Nimble Ware ensures you stay effortlessly on-trend. With fast, reliable nationwide delivery and top-notch customer service, we&rsquo;re here to keep you moving in style—because fashion should be as dynamic as you are.</p>

          <p className="mb-4">At Nimble Ware, we focus on high-quality fabrics, precise craftsmanship, and modern designs that cater to every occasion. Our collections are thoughtfully created to offer the perfect balance between trend and timelessness, ensuring you always have the right outfit for any moment.</p>

          <p className="mb-4">Sustainability is also at the core of our philosophy. We are committed to ethical sourcing and responsible production practices, making sure our clothing not only elevates your wardrobe but also respects the environment.</p>

          <p className="mb-4">Join the Nimble Ware movement—where style meets substance, and every piece is designed to empower you. Dress with confidence, live with purpose, and let your fashion reflect the best version of yourself.</p>
          
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
