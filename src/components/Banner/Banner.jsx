import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from "../../../public/banner1.png"
import banner2 from "../../../public/banner2.png"
import banner3 from "../../../public/bannerHoddy.png"
import banner4 from "../../../public/banner4.png"
import banner1Dark from "../../../public/banner1-dark.png"
import banner2Dark from "../../../public/banner2-dark.png"
import banner3Dark from "../../../public/bannerHoddy-dark.png"
import banner4Dark from "../../../public/banner4-dark.png"
import Image from 'next/image';

const Banner = () => {
    return (
        <div className=''>
           <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Image  className='flex dark:hidden  ' src={banner1} alt="" />
            <Image  className='hidden dark:flex' src={banner1Dark} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <Image  className='flex dark:hidden' src={banner2} alt="" />
        <Image  className='hidden dark:flex' src={banner2Dark} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <Image  className='flex dark:hidden' src={banner3} alt="" />
        <Image  className='hidden dark:flex' src={banner3Dark} alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <Image  className='flex dark:hidden' src={banner4} alt="" />
        <Image  className='hidden dark:flex' src={banner4Dark} alt="" />
        </SwiperSlide>
        
        
      </Swiper> 
        </div>
    );
};

export default Banner;