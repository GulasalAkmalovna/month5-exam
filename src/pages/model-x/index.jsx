import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import tesla from '../../images/tesla.jpg'
import blue from '../../images/teslaBlue.png'
import red from '../../images/redTesla.png'
import white from '../../images/teslaWhite.png'
import black from '../../images/teslaBlack.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../style/style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <div className='mt-[100px]'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={white} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={black} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={red} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={white} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={blue} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={black} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={red} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={white} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={black} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}